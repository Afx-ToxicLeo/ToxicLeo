const {find} = require('alexa-bot')
const {Module} = require('../main');
const s = require('../config');
const wk = s.MODE == 'public' ? false : true
Module({pattern: 'true ?(.*)', desc: 'Searches for number in truecaller!',use: 'search',fromMe: wk}, async (msg, query) => {
if (!query[1] && !msg.reply_message) return await msg.reply("_Give me any number or reply to any user!_");
if (query[1].includes('/')) return await msg.sendReply('Wrong format! \n\n .true +91 7025994178')
var go;
if (msg.reply_message) go = msg.reply_message.jid.split('@')[0]
else if (!query[1].includes('@')) go = query[1]
else if (msg.mention) {
var mm = '';
msg.mention.map(async (user) => {
mm += user.split('@')[0];
});
go = mm
} 
var initt = go.split(" ").join("")
var number = initt.replace('+','')
var res = await find(number,'',msg.client.user.id)
if (res == 'error') return await msg.sendReply("_Truecaller limit over! (20/20) Contact owner_")
await msg.sendReply(res);});
