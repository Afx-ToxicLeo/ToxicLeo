const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const Abu = require('../events');
const Config = require('../config');
const { igDownloader, igstalk } = require('../Abuser,.js')
const { errorMessage, infoMessage } = require('../helpers');
const axios = require('axios');
const fs = require('fs');
const gis = require('g-i-s');
const got = require("got");

const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

Abu.addCommand({on: 'text', fromMe: wk, deleteCommand: false}, (async (message, match) => {
    if (message.jid === '919562803423-1627735504@g.us') {
	    
             return;
         }
         let regex1 = new RegExp('Insta')
	 
         
         if (regex1.test(message.message)) {
              
              try{
    if (!match[1]) return await message.sendMessage("enter a link");
    await message.sendMessage("ᴡᴀɪᴛ...ʙʀᴏ...ꜱᴇᴀʀᴄʜɪɴɢ...")

    res = await igDownloader(match[1])
    ytm = res.result
    const profileBuffer = await axios.get(`${ytm.link}`, {responseType: 'arraybuffer'})
    const msg = `${ytm.link}`
     if (msg.includes('.mp4')) { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, { caption: `ɪɴsᴛᴀ ʀᴇᴇʟ`, quoted: message.data })}
     if (msg.includes('.jpg')) { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, { caption: `ɪɴsᴛᴀ ᴘʜᴏᴛᴏ`, quoted: message.data })}
  } catch {
     await message.sendMessage("error")
  }
});
