/* Codded by @Afx-Abu
Telegram: t.me/ABU_OP
Instagram: www.instagram.com/jasil_xo
*/

const Abu = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

    Abu.addCommand({pattern: 'warn ?(.*)', fromMe: false, desc: 'to report someone'}, (async (message, match) => {
        if (match[1] == '') {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.jid);
                }
            });
           await message.client.sendMessage(message.jid,'𝑾𝑨𝑹𝑵 𝑼𝑺𝑬𝑹 \n'+ mesaj , MessageType.extendedText, {quoted: message.data, contextInfo: {mentionedJid: jids}, previewType: 0})
        
        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,'𝑾𝑨𝑹𝑵 𝑼𝑺𝑬𝑹\n' + mesaj  + '\n\n𝑹𝑬𝑺𝑶𝑵 :  ' + `${match[1]}`,  MessageType.extendedText, {quoted: message.data, contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid,'Please Respond to Users Message to Report', MessageType.text);
        }
}));
}
else if (Config.WORKTYPE == 'public') {
    Abu.addCommand({pattern: 'warn ?(.*)', fromMe: false, desc: 'to report someone'}, (async (message, match) => {
        if (match[1] == '') {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.jid);
                }
            });
           await message.client.sendMessage(message.jid,'𝑾𝑨𝑹𝑵 𝑼𝑺𝑬𝑹 \n'+ mesaj , MessageType.extendedText, {quoted: message.data, contextInfo: {mentionedJid: jids}, previewType: 0})
        
        }
        else if (match[1] !== '' && message.reply_message) {
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
            });
            await message.client.sendMessage(message.jid,'𝑾𝑨𝑹𝑵 𝑼𝑺𝑬𝑹\n' + mesaj  + '\n\n𝑹𝑬𝑺𝑶𝑵 :  ' + `${match[1]}`,  MessageType.extendedText, {quoted: message.data, contextInfo: {mentionedJid: jids}, previewType: 0})
        }
        else if (!message.reply_message) {
            return message.client.sendMessage(message.jid,'Please Respond to Users Message to Warn', MessageType.text);
        }
}));
}
}
