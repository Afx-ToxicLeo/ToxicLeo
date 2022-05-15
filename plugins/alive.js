const Abu = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const {abubuffer} = require('../buffer');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('alive');

Abu.addCommand({pattern: 'alive', fromMe: false, desc: Lang.GL}, (async (message, match) => {
var img = await abubuffer(Config.LOGO)

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: img, mimetype: Mimetype.png,
    
╭────────────────╮
   '+Config.BOT+'
╰────────────────╯

╭────────────────
│
│ ʜᴇʏ ᴜsᴇʀ ` + wish + `
│         *⌚` + time + `*
│
│ ▢ *ʙᴏᴛ ɴᴀᴍᴇ* : '+Config.BOT+'*
│ ▢ *ᴏᴡɴᴇʀ* :'+Config.OWNER+'*
│ ▢ *ɴᴜᴍʙᴇʀ* :'+Config.PHONE+'*
│ ▢ *ᴠᴇʀsɪᴏɴ* : 2.1
│ ▢ *ғᴜʟʟ ᴇᴠᴀ* : ` + eva + `
│ ▢ *ᴀᴜᴛᴏ ʙɪᴏ* : ` + auto_bio + `
│ ▢ *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
│ ▢ *ᴘʀᴇғɪx* : *# / . ; !*
│
│      
│ ▢  '+Config.BOT+' ▢ 
│
│ ▢  '+Config.SKV+' ▢ 
╰────────────────
 
`}) 

})); 
