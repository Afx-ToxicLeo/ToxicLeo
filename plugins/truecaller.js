const axios = require ('axios');
const {addCommand} = require('../events');
const Config = require('../config');
const Abu = Config.WORKTYPE == 'public' ? false : true
addCommand({ pattern: 'true ?(.*)', fromMe: true, desc: "get number details" }, async (msg, query) => {
if (!query[1] && !msg.reply_message) return await msg.reply("_Give me any number or reply to any user!_");  
if (query[1].includes('/')) return await msg.client.sendMessage(msg.jid, 'Wrong format! \n\n .true +91 6282344739', MessageType.text, {quoted: msg.data})
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
var {data} = await axios(`https://raganork-api.herokuapp.com/api/truecaller?text=in&username=${number}&apikey=souravkl11`);
await msg.sendMessage(data.result.data[0] == 'error' ? 'Server limit over (50/50)' : data.result.data[0])
})
