const fs = require('fs');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
DATABASE_URL = process.env.DATABASE_URL === undefined ? './bot.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);
module.exports = {
    VERSION: 'V 2.0.1',
    ALIVE: process.env.ALIVE || "https://i.imgur.com/OseHc3b.jpg Hey {sender}, I'm alive \n Uptime: {uptime}",
    BLOCK_CHAT: process.env.BLOCK_CHAT || '',
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE) || true,
    READ_MESSAGES: convertToBool(process.env.READ_MESSAGES) || false,
    PMB_VAR: convertToBool(process.env.PMB_VAR) || false,
    PMB: process.env.PMB || '*ᴘᴍ ᴍᴇssᴀɢᴇ ɴᴏᴛ ᴀʟʟᴏᴡᴇᴅ ʙʀᴏ .ɪᴀᴍ ʙʟᴏᴄᴋɪɴɢ sᴏʀʀʏ!*',
    READ_COMMAND: convertToBool(process.env.READ_COMMAND) || true,
    SESSION: process.env.SESSION || '',
    IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
    RG: process.env.RG || '7025994178-1632403322@g.us',
    RBG_KEY: process.env.RBG_KEY || '',
    ALLOWED: process.env.ALLOWED || '91,94,212',
    CHATBOT: process.env.CHATBOT || 'off',
    HANDLERS: process.env.HANDLERS || '.,',
    STICKER_DATA: process.env.STICKER_DATA,
    BOT_NAME: process.env.BOT_NAME || 'ᴀʙᴜ ᴍᴅ',
    OWNER_NUMBER: process.env.OWNER_NUMBER || '917025994178',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined || process.env.AUDIO_DATA === "private" ? '𝙰𝙱𝚄-𝙹𝚂𝙻;𝙰𝙱𝚄 𝙼𝙳 𝙱𝙾𝚃;https://i.imgur.com/OseHc3b.jpg' : process.env.AUDIO_DATA,
    TAKE_KEY: process.env.TAKE_KEY || '',
    MODE: process.env.MODE || 'public',
    WARN: process.env.WARN || '4',
    ANTILINK_WARN: process.env.ANTILINK_WARN || '',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './bot.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    SUDO: process.env.SUDO || '917025994178',
    LANGUAGE: process.env.LANGUAGE || 'en',
    DEBUG: DEBUG,
    ACR_A: "4b64f4e5401d1380e50b30d526def287",
    ACR_S: "uSVrKResE7wF4d6A1dtqvPWTTy3rBp3YjldsJSCh"
    };
