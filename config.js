const fs = require('fs');
const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG)
module.exports = {
    VERSION: 'v1.0.0', 
    SESSION_ID: process.env.SESSION_ID || '',
    MODE: process.env.MODE || 'private',
    HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
    SEND_READ: process.env.READ_COMMAND || false, 
    MSG_LOG: convertToBool(process.env.LOG_MSG) || false, 
    ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE),
    LANGUAGE: process.env.LANGUAGE || 'en',
    STICKER_PACKNAME: process.env.STICKER_PACKNAME || 'Abu;Jsl',
    ERROR_MESSAGE: convertToBool(process.env.ERROR_MESSAGE) || true, 
    WARN: process.env.WARN || '4',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY || '',
        APP_NAME: process.env.HEROKU_APP_NAME || ''
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './database.db' ? new Sequelize({ dialect: 'sqlite', storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
    SUDO: process.env.SUDO || '',
    DEBUG: DEBUG
};