const {bot,isPublic} = require('../lib/')
let { upload, jslbuffer } = require('abu-bot')
var list = '```' + `╔════════════════
║𝑷𝑯𝑶𝑻𝑶 𝑬𝑫𝑰𝑻𝑶𝑹 𝑳𝑰𝑺𝑻
╚═══════════════ʏᴏᴜ ᴄᴀɴ ᴜsᴇ ɪᴛ ʙʏ ʀᴇᴘʟᴀʏ ᴛᴏ ᴀɴʏ  ɪᴍᴀɢᴇ
╔════════════════
║
║𝗔𝗩𝗔𝗜𝗟𝗔𝗕𝗟𝗘 𝗢𝗣𝗧𝗜𝗢𝗡𝗦
╔════════════════
║ 𝟷) 𝙱𝙻𝚄𝚁
║ 𝟸) 𝙿𝙸𝚇𝙴𝙻𝙰𝚃𝙴
║ 𝟹) 𝚁𝙰𝙸𝙽𝙱𝙾𝚆
║ 𝟺) 𝙷𝙾𝚁𝙽𝚈
║ 𝟻) 𝙱𝚆
║ 𝟼) 𝚁𝙴𝙳
║ 𝟽) 𝙶𝚁𝙴𝙴𝙽
║ 𝟾) 𝙱𝙻𝚄𝙴
║ 𝟿) 𝙶𝙰𝚈
║ 𝟷𝟶) 𝙶𝙻𝙰𝚂𝚂
║ 𝟷𝟷) 𝚆𝙰𝚂𝚃𝙴𝙳
║ 𝟷𝟸) 𝙿𝙰𝚂𝚂𝙴𝙳
║ 𝟷𝟹) 𝙹𝙰𝙸𝙻
║ 𝟷𝟺) 𝙲𝙾𝙼𝚁𝙰𝙳𝙴
║ 𝟷𝟻) 𝙸𝙽𝚅𝙴𝚁𝚃
║ 𝟷𝟼) 𝟸𝙸𝙽𝚅𝙴𝚁𝚃
║ 𝟷𝟽) 𝙶𝙾𝙻𝙳𝙴𝙽
║ 𝟷𝟾) 𝚂𝙸𝙼𝙿𝙲𝙰𝚁𝙳
║ 𝟷𝟿) 𝚃𝙷𝚁𝙴𝚂𝙷𝙾𝙻𝙳
╚════════════════ ` + '```'
bot({pattern: "editor",fromMe: isPublic,desc: "photo editor"}, async(message, match) => {
await message.sendReply(list);
});

bot(
	{
		pattern: 'rainbow ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'round rainbow border photo maker',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/lgbt?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'piisPublicelate ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'pixelate the photo ',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/pixelate?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'horny ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'horny card maker',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/horny?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'bw ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'makes the photo black and white',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/greyscale?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'red ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a red filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/red?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'green ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a green filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/green?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'blue ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a blue filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/blue?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'gay ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add gay effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/gay?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'glass ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add glass effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/glass?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'wasted ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'wasted photo effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/wasted?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'passed ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'mission passed photo effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/passed?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'jail ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add jail effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/jail?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'comrade ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add photo effect',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/comrade?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'invert ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a invert filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/invert?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: '2invert ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a invert filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/invertgreyacale?avatar=${link}`), 'image')}); 
bot(
	{
		pattern: 'golden ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a golden filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/sepia?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'simpcard ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'simpcard maker',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/simpcard?avatar=${link}`), 'image')});
bot(
	{
		pattern: 'threshold ?(.*)',
		fromMe: isPublic,
    dontAddCommandList: true,
		desc: 'add a threshold filter',
		type: 'misc',
	},async (message, match) => {
if (!message.reply_message) return await message.sendReply("*Need image*");
var imageUrl = await message.reply_message.download();
   let { link } = await upload(imageUrl)
    return await message.sendMessage(await jslbuffer (`https://some-random-api.ml/canvas/threshold?avatar=${link}`), 'image')});
