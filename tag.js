const {Jsl} = require('../main')
const {getString} = require('./misc/lang');
const {readFileSync} = require('fs');
const {saveMessage} = require('./misc/saveMessage');
const Lang = getString('group');
Jsl({pattern: 'tag|hidetag ?(.*)',use: 'group', fromMe: true, desc: Lang.TAGALL_DESC}, (async (message, match) => {
if (!message.jid.endsWith('@g.us')) return await message.sendMessage(Lang.GROUP_COMMAND)
if (match[1] === "all" || (match[1] && match[1].startsWith("ad")) || !message.reply_message) return;
var target = message.jid
if (match[1] && match[1].endsWith("us") && /[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g.test(match[1])) target = [...match[1].match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g)];
var group = await message.client.groupMetadata(target)
var jids = [];
group.participants.map(async(user) => {
jids.push(user.id.replace('c.us', 's.whatsapp.net'));});
await message.forwardMessage(target,message.quoted,{detectLinks: true,contextInfo: {mentionedJid: jids}});
}))
Jsl({pattern: 'tagadmin',use: 'group', fromMe: true, desc: "Tags admins",usage: '.tag or .tag jid'}, (async (message, match) => {
    if (!message.jid.endsWith('@g.us')) return await message.sendMessage(Lang.GROUP_COMMAND)
    if (!message.reply_message) return;
    var group = await message.client.groupMetadata(message.jid)
    var jids = [];
    var admins = group.participants.filter(v => v.admin !== null).map(x => x.id);
    admins.map(async(user) => {
    jids.push(user.replace('c.us', 's.whatsapp.net'));});
    await message.forwardMessage(message.jid,message.quoted,{detectLinks: true,contextInfo: {mentionedJid: jids}});
}))
Jsl({pattern: 'forward ?(.*)',use: 'utility', fromMe: true, desc: "Forwards message"}, (async (message, match) => {
    if (!message.reply_message) return await message.sendReply("*Reply to a message*\n*Ex: .forward jid jid ...*")
    let Jids = [...match[1].match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g)] || [message.jid]
        for (let jid of Jids) {
      await message.forwardMessage(jid, message.quoted,{detectLinks: true});
    }
}));
Jsl({pattern: 'send ?(.*)',use: 'utility', fromMe: true, desc: "Sends message"}, (async (message, match) => {
    if (!message.reply_message) return await message.sendReply("*Reply to a message*\n*Ex: .send jid jid ...*")
    let Jids = [...match[1].match(/[0-9]+(-[0-9]+|)(@g.us|@s.whatsapp.net)/g)] || [message.jid];
        for (let jid of Jids) {
      await message.forwardMessage(jid, message.quoted,{contextInfo:{isForwarded: false},detectLinks: true});
    }
}));
