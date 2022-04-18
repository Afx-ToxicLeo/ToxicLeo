/* Copyright (C) 2020 afnanplk.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
*/


const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Abu = require('../events');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');
const END = "clear all messages"

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

Abu.addCommand({pattern: 'clear', fromMe: true, desc: END, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage('```𝙲𝙷𝙰𝚃 𝙲𝙻𝙴𝙰𝙽𝙸𝙽𝙶....```');
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```𝙲𝙷𝙰𝚃 𝙲𝙻𝙴𝙰𝙽𝙴𝙳✅️```');
}));

Abu.addCommand({pattern: 'clean ?(.*)', fromMe: true, desc: END, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage('𝙲𝙷𝙰𝚃 𝙲𝙻𝙴𝙰𝚁𝙸𝙽𝙶...');   
    await message.client.modifyChat (match[1] == '' ? message.jid : match [1], ChatModification.delete);
    await message.sendMessage('🚮 𝙲𝙷𝙰𝚃 𝙲𝙻𝙴𝙰𝚁𝙴𝙳.....');
}));
