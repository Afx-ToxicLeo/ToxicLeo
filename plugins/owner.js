const Abu = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'V2hhdHNBYnU=', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')



let whb = Config.WORKTYPE == 'public' ? false : true

Abu.addCommand({pattern: 'owner', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit Abu
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: Config.OWNER }, type: 1},
      ]
      
      const buttonMessage = {
          contentText: '╭─➤ 𝜣͢𝑾𝜨𝜩𝑹 𝜤𝜨𝑭𝜭 »\n│➪ ᴏᴡɴᴇʀ ɴᴀᴍᴇ : '+Config.OWNER+'\n│➪ ʙᴏᴛ ɴᴀᴍᴇ : '+Config.BOT+'\n│➪ ɪɴꜱᴛᴀ : '+Config.INSTA+'\n│➪ ɴᴜᴍʙᴇʀ : wa.me/'+Config.PHONE+'\n╰────────────────❋ཻུ۪۪➹\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘\n'+Config.OWNER+'™',
          footerText:  '©'+Config.ABU+' ™',
          buttons: buttons,
          headerType: 1
      }
      
await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 123, status: 200, thumbnail: fs.readFileSync ('img.jpg'), surface: 200, message: Config.BOT, orderTitle: Config.BOT, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('img.jpg')}}}});

}));
