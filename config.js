const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = '@gmail.com'
global.github = 'https://github.com/Afx-Abu/Abu-MD'
global.location = 'Kerala IN'
global.gurl = 'https://instagram.com/' 
global.sudo = process.env.SUDO || '917025994178'
global.devs = '917025994178';
global.website = 'https://github.com/Afx-Abu/Abu-MD' 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/blZJmdo.jpeg'
module.exports = {
  VERSION: 'v1.0.0',
  botname: process.env.BOT_NAME || 'Abu-MD',
  ownername:process.env.OWNER_NAME || 'Jsl',
  sessionName: process.env.SESSION_ID || 'M1dORm12UFM=',
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.LANGUAGE || 'en',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
