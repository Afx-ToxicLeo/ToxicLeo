const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./database.db";

module.exports = {
  SESSION_ID: (process.env.SESSION_ID || '').trim(),
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  ANTILINK_ACTION: "kick",
  HANDLERS: process.env.HANDLERS || "^[,]",
  PACKNAME: process.env.PACKNAME || "ᴀʙᴜ-ᴍᴅ",
  BOT_INFO: process.env.BOT_INFO || 'Abu;Jsl;917025994178;https://i.imgur.com/PMa01tz.jpeg',
  WELCOME_MSG:
    process.env.WELCOME_MSG ||
    "{pp}ʜɪ @user ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ @gname\nYou're our @count/513 ᴍᴇᴍʙᴇʀs ",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user ɢᴏᴏᴅ ʙʏᴇ ᴠʀᴏ",
  AUTHOR: process.env.AUTHOR || "Jsl",
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
          logging: false,
        }),
  SUDO: process.env.SUDO || "917025994178,0",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  MODE : process.env.MODE || "public"
};
