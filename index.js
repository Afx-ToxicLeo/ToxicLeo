const {
  default: makeWASocket,
  Browsers,
  makeInMemoryStore,
  useMultiFileAuthState,
} = require("@adiwajshing/baileys");
const fs = require("fs");
const { serialize } = require("./lib/serialize");
const { Message, Image, Sticker } = require("./lib/Base");
const pino = require("pino");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const Config = require('./config');
const events = require("./lib/event");
const got = require("got");
const config = require("./config");
const { PluginDB } = require("./lib/database/plugins");
const Greetings = require("./lib/Greetings");
const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});

require("events").EventEmitter.defaultMaxListeners = 500;


fs.readdirSync("./lib/database/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
    require("./lib/database/" + plugin);
  }
});

const aes256 = require('aes256');
let plaintext = Config.SESSION_ID.replaceAll("ToxicLeo~", "");
let key = 'k!t';
let decryptedPlainText = aes256.decrypt(key, plaintext);
  async function md(){
   let {body} = await got(`https://inrl-web.onrender.com/api/session?id=${decryptedPlainText}`)
  let result = JSON.parse(body).result[0].data;
fs.writeFileSync("./lib/auth_info_baileys/creds.json" , result);
   }
  md();

async function ToxicLeo() {
  console.log("Syncing Database");
  await config.DATABASE.sync();

const { state, saveCreds } = await useMultiFileAuthState(
    "./lib/auth_info_baileys/",
    pino({ level: "silent" })
  )
  let conn = makeWASocket({
    logger: pino({ level: "silent" }),
    auth: state,
    printQRInTerminal: true,
    generateHighQualityLinkPreview: true,
    browser: Browsers.macOS("Desktop"),
    fireInitQueries: false,
    shouldSyncHistoryMessage: false,
    downloadHistory: false,
    syncFullHistory: false,
  });
    
  store.bind(conn.ev);
  //store.readFromFile("./database/store.json");
  setInterval(() => {
    store.writeToFile("./database/store.json");
  }, 30 * 60 * 1000);

 conn.ev.on("creds.update", saveCreds);

  conn.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s;
    if (connection === "connecting") {
      console.log("Toxic Leo MD");
      console.log(" ♻ Toxic leo Connecting to WhatsApp... Please Wait. ");
    }

    if (
      connection === "close" &&
      lastDisconnect &&
      lastDisconnect.error &&
      lastDisconnect.error.output.statusCode != 401
    ) {
      console.log(lastDisconnect.error.output.payload);
      Xasena();
    }

    if (connection === "open") {
      console.log(" Login Successful! ✓ ");
      console.log(" ❗Installing External Plugins... ");

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

      console.log(" Installing Plugins... ");

      fs.readdirSync("./plugins").forEach((plugin) => {
        if (path.extname(plugin).toLowerCase() == ".js") {
          require("./plugins/" + plugin);
        }
      });
      console.log(" Plugins Installed! ");
      let str = `\`\`\` ToxicLeo MD Connected \nversion : ${
        require("./package.json").version
      }\nTotal Plugins : ${events.commands.length}\nMode: ${
        config.WORK_TYPE
      }\`\`\``;
      conn.sendMessage(conn.user.id, { text: str });
      try {
        conn.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await conn.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await conn.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                
            
         const reSize = async(buffer, ukur1, ukur2) => {
             return new Promise(async(resolve, reject) => {
             let jimp = require('jimp')
             let parseJid = require("../lib/");
             var baper = await jimp.read(buffer);
             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }

            
                try {
                    ppgroup = await conn.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                
                let butwel = [{ buttonId: 'menu', buttonText: { displayText: 'Welcome' }, type: 1 }]
                let butleav = [{ buttonId: 'menu', buttonText: { displayText: 'Selamat Tinggal' }, type: 1 }]
                let butselamat = [{ buttonId: 'menu', buttonText: { displayText: 'Selamat!' }, type: 1 }]
                let butsebar = [{ buttonId: 'menu', buttonText: { displayText: 'Sabar' }, type: 1 }]
                let esce = ('© At')
                let teks1 = `*Halo`
                let teks2 = `*Selamat Admin_`
                let teks3 = `* Promote From*\n*${metadata.subject}*\n*Selamat Anda Menjadi Admin*\n_~Jangan disalahgunakan!_`
                let teks4 = `* Demote From*\n*${metadata.subject}*\n_Pangkat kamu telah di turunkan!_`
                if (anu.acconnn == 'add') {
                    conn.sendMessage(anu.id, { caption: teks1, location: { jpegThumbnail: await reSize(ppuser, 100, 100)}, buttons: butwel, footer: esce })
                } else if (anu.action == 'remove') {
                    conn.sendMessage(anu.id, { caption: teks2, location: { jpegThumbnail: await reSize(ppuser, 100, 100)}, buttons: butleav, footer: esce})
                } else if (anu.action == 'promote') {
                    conn.sendMessage(anu.id, { caption: teks3, location: { jpegThumbnail: await reSize(ppuser, 100, 100)}, buttons: butselamat, footer: esce })
                } else if (anu.action == 'demote') {
                    conn.sendMessage(anu.id, { caption: teks4, location: { jpegThumbnail: await reSize(ppuser, 100, 100)}, buttons: butsebar, footer: esce })
              }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
	
        conn.ev.on("messages.upsert", async (m) => {
          if (m.type !== "notify") return;
          let ms = m.messages[0];
          let msg = await serialize(JSON.parse(JSON.stringify(ms)), conn);
          if (!msg.message) return;
          let text_msg = msg.body;
          if (text_msg && config.LOGS)
            console.log(
              `At : ${
                msg.from.endsWith("@g.us")
                  ? (await conn.groupMetadata(msg.from)).subject
                  : msg.from
              }\nFrom : ${msg.sender}\nMessage:${text_msg}`
            );

          events.commands.map(async (command) => {
            if (
              command.fromMe &&
              !config.SUDO.split(",").includes(
                msg.sender.split("@")[0] || !msg.isSelf
              )
            )
              return;
            let comman;
            if (text_msg) {
              comman = text_msg.trim().split(/ +/)[0];
              msg.prefix = new RegExp(config.HANDLERS).test(text_msg)
                ? text_msg.split("").shift()
                : ",";
            }
            if (command.pattern && command.pattern.test(comman)) {
              var match;
              try {
                match = text_msg.replace(new RegExp(comman, "i"), "").trim();
              } catch {
                match = false;
              }
              whats = new Message(conn, msg, ms);
              command.function(whats, match, msg, conn);
            } else if (text_msg && command.on === "text") {
              whats = new Message(conn, msg, ms);
              command.function(whats, text_msg, msg, conn, m);
            } else if (
              (command.on === "image" || command.on === "photo") &&
              msg.type === "imageMessage"
            ) {
              whats = new Image(conn, msg, ms);
              command.function(whats, text_msg, msg, conn, m, ms);
            } else if (
              command.on === "sticker" &&
              msg.type === "stickerMessage"
            ) {
              whats = new Sticker(conn, msg, ms);
              command.function(whats, msg, conn, m, ms);
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
       let Id = '919497206865'
    // conn.sendMessage(cid, { text: error });
    console.log(err);
  });
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => console.log(`Inrl Server listening on port http://localhost:${port}`));
setTimeout(() => {
  ToxicLeo();
}, 12000);
