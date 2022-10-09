const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))require("dotenv").config({ path: "./config.env" });
const toBool = (x) => x == "true";
DATABASE_URL = process.env.DATABASE_URL || "./database.db";
let HANDLER = "false";
module.exports = {
  VERSION: 'v1.0.0',
  BRANCH: "main",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
  ALIVE: process.env.ALIVE || "https://telegra.ph/file/47842cf7d85784cb4e441.jpg Hey {sender}, I'm alive \n Uptime: {uptime}",
  Session_Id: process.env.SESSION_ID || "bkxkWlhCSmU=",
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  LANG: process.env.LANG || "EN",
  AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? '𝐴𝑏𝑢¹¹ꫂ;Abu MD bot;https://i.imgur.com/cO6Ddfh.jpeg' : process.env.AUDIO_DATA,
  HANDLERS:
    process.env.HANDLER === "false" || process.env.HANDLER === "null"
      ? "^"
      : "^[.]",
  RMBG_KEY: process.env.RMBG_KEY || false,
  PACKNAME: process.env.PACKNAME || "Abu",
  WELCOME_MSG:
    process.env.WELCOME_MSG ||
    "{pp}Hi @user Welcome to @gname\nYou're our @count/513 Members ",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
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
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),

  BOT_INFO: process.env.BOT_INFO || 'Abu MD,Jsl,Abu SER,Abu MD,https://telegra.ph/file/47842cf7d85784cb4e441.jpg',
  SUDO: process.env.SUDO || "917025994178",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  IMAGE_URL: process.env.IMAGE_URL || "https://telegra.ph/file/47842cf7d85784cb4e441.jpg",
  BOT_NAME: process.env.BOT_NAME || "Abu-MD",
  MODE: process.env.MODE || "public",
  LANGUAGE: process.env.LANGUAGE || 'english',
};
