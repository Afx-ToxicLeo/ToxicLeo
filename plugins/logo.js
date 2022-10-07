const {bot, isPublic} = require('../lib/')
const {jslbuffer} = require('abu-bot');
var list = '```'+`Logo Maker List
Usage: .logo 14 Text
01 - 11 : Calligraphy
12 - 13 : Beast
14 - 19 : Pubg
20 - 25 : RRR
26 - 27 : Free Fire
28 - 29 : India
30 - 32 : Avengers
33 - 34 : Pushpa
35 - 37 Master
38 - 44 IPL
45      : Dhoni
46      : Vijay
47 - 52 : KGF`+'```'
bot({pattern: "logo ?(.*)",fromMe: isPublic,use: 'logo',desc: "45 + Logo maker commands"}, async(message, match) => {
if (!match[1] || match[1] === 'list') return await message.reply(list);
})
bot({pattern: "logo 01 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 02 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 03 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=3&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 04 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=4&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 05 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=5&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 06 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=6&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 07 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=7&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 08 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=8&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 09 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=9&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 10 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=10&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 11 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/calligraphy?style=11&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 12 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/beast?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 13 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/beast?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 14 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/pubg?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 15 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/pubg?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 16 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/pubg?style=3&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 17 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/pubg?style=4&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 18 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/pubg?style=5&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 19 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/pubg?style=6&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 20 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/rrr?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 21 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/rrr?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 22 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/rrr?style=3&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 23 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/rrr?style=4&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 24 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/rrr?style=5&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 25 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/rrr?style=6&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 26 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/freefire?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 27 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/freefire?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 28 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/india?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 29 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/india?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 30 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/avengers?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 31 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/avengers?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 32 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/avengers?style=3&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 33 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/pushpa?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 34 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/pushpa?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 35 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/master?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 36 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/master?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 37 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/master?style=3&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 38 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/ipl?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 39 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/ipl?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 40 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/ipl?style=3&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 41 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/ipl?style=4&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 42 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/ipl?style=5&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 43 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/ipl?style=6&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 44 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/ipl?style=7&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 45 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/dhoni?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 46 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/thalapathy?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 47 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/kgf?style=0&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 48 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/kgf?style=1&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 49 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/kgf?style=2&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 46 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/kgf?style=3&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 50 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/kgf?style=4&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 51 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/kgf?style=5&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
bot({pattern: "logo 52 ?(.*)",fromMe: isPublic,use: 'logo', dontAddCommandList: true}, async(message, match) => {
var text = match[1]
var api_url = "https://raganork-network.vercel.app/api/logo/kgf?style=6&text="+text
var image = await jslbuffer(api_url);
match = match || message.reply_message.jid;
    if (!match) return await message.reply(image,'image');
})
