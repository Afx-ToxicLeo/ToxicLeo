//modified @ Afx-Abu

const Abu = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Abu.addCommand({pattern: 'owner', fromMe: false, desc: Lang.NUMBER}, (async (message, match) => {
    var img = await abubuffer(Config.LOGO)
            const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + Config.OWNER + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Alexa;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + Config.PHONE + ':' + Config.PHONE + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "〽️ʙᴏᴛ ᴏᴡɴᴇʀ", vcard: vcard}, MessageType.contact, { mimetype: Mimetype.contact, quoted: message.data, ptt: true,quoted: { key: { participant : '0@s.whatsapp.net'},message: {orderMessage: {itemCount : 777777,status: 1,surface : 1,message: Config.SKV,orderTitle: `THIS IS NEW?`,thumbnail: img, sellerJid: Config.JID }}}});

  }));
