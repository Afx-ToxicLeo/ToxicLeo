const {
  default: makeWASocket,
  useSingleFileAuthState,
  makeInMemoryStore,
  fetchLatestBaileysVersion,
  Browsers
} = require("@adiwajshing/baileys");
const {
     DATABASE,
     VERSION
} = require('./config');
const fs = require("fs");
const { 
         Message,
         Image, 
         Video,
         PluginDB,
         Greetings,
         serialize
 } = require("./lib/");
const pino = require("pino");
const path = require("path");
const events = require("./lib/events");
const got = require("got");
const config = require("./config");

const { DataTypes } = require('sequelize');

const AbuDB = config.DATABASE.define('Abu', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

async function bot() {
  await config.DATABASE.sync();
  const { state, saveState } = useSingleFileAuthState(
    "./session.json",
    pino({ level: "silent" })
  );
  const { version, isLatest } = await fetchLatestBaileysVersion();
     const conn = makeWASocket({
          logger: pino({ level: "silent" }),
          auth: state,
          printQRInTerminal: true,
          browser: ['Abu MD','Safari','1.0.0'],
          version
     });

  conn.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s;
    if (connection === "connecting") {
      console.log("Abu "+VERSION);
      }

    if (
      connection === "close" &&
      lastDisconnect &&
      lastDisconnect.error &&
      lastDisconnect.error.output.statusCode != 401
    ) {
      console.log(lastDisconnect.error.output.payload);
      bot();
    }

    if (connection === "open") {
      console.log("Login Successful!..✅");
      console.log("Installing Plugins..✅.");

      let plugins = await PluginDB.findAll();
      plugins.map(async (plugin) => {
        if (!fs.existsSync("./plugins/" + plugin.dataValues.name + ".js")) {
          console.log(plugin.dataValues.name);
          var response = await got(plugin.dataValues.url);
          if (response.statusCode == 200) {
            fs.writeFileSync(
              "./plugins/" + plugin.dataValues.name + ".js",
              response.body
            );
            require("./plugins/" + plugin.dataValues.name + ".js");
          }
        }
      });

      fs.readdirSync("./plugins").forEach((plugin) => {
        if (path.extname(plugin).toLowerCase() == ".js") {
          require("./plugins/" + plugin);
        }
      });
      console.log("✅ Plugins Installed!");

      try {
        conn.ev.on("creds.update", saveState);

        conn.ev.on("group-participants.update", async (data) => {
          Greetings(data, conn);
        });
        conn.ev.on("messages.upsert", async (m) => {
          if (m.type !== "notify") return;
          let ms = m.messages[0];
          let msg = await serialize(JSON.parse(JSON.stringify(ms)), conn);
          if (!msg.message) return;
          let text_msg = msg.body;
          if (config.LOG_MSG === 'true') {
          if (text_msg) console.log(text_msg);
          }
          events.commands.map(async (command) => {
            if (msg.type === "videoMessage" && command.on === "video") {
              whats = new Video(conn, msg, ms);
              console.log(whats);
            }
            if (command.pattern && command.pattern.test(text_msg)) {
              var match = text_msg.match(command.pattern)[1] || false;
              whats = new Message(conn, msg, ms);
              command.function(whats, match, msg, conn);
            } else if (command.on === "text") {
              whats = new Message(conn, msg, ms);
              command.function(whats, text_msg, msg, conn);
            } else if (
              (command.on === "image" || command.on === "photo") &&
              msg.type === "imageMessage"
            ) {
              whats = new Image(conn, msg, ms);
              command.function(whats, text_msg, msg, conn);
            }
          });
        });
      } catch (e) {
        console.log(e + "\n\n\n\n\n" + JSON.stringify(msg));
      }
    }
  });
  process.on("uncaughtException", (err) => {
    let error = err.message;
    conn.sendMessage(conn.user.id, { text: error });
    console.log(err);
  });
}

bot();
