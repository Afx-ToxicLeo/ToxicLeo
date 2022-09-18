const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";

module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  ANTILINK_ACTION: "kick",
  HANDLERS: process.env.HANDLERS || "^[.!;]",
  BRANCH: "master",
  PACKNAME: process.env.PACKNAME || "Abu-MD",
  WELCOME_MSG: process.env.WELCOME_MSG ||  "{pp}Hi @user Welcome to @gname\nYou're our @count/513 Members ",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It was Nice Seeing you",
  AUTHOR: process.env.AUTHOR || "Jsl",
  DATABASE_URL: DATABASE_URL, DATABASE: DATABASE_URL === "./lib/database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false, }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: false, }),
  SUDO: process.env.SUDO || "917025994178,0",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
};
