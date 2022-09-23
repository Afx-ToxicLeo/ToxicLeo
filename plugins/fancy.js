const { Jsl } = require('../lib/')
const { Fancy } = require('../lib/misc')
 
Jsl({pattern: "fancy ?(.*)", fromMe: true, desc: "change text to fancy text fonts", type: "misc"}, async (message, match) => {
if (!match && message.reply_message.text) return await message.reply("Reply to any message with .fancy number\n" + Fancy("example", "32"))
try { var result = await Fancy(message.reply_message.text, match) } catch (e) { return await message.reply(e.message) }
await message.reply(result)
});
 
