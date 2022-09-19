const {
     Jsl
 } = require('../lib/')
 const {
     Fancy
 } = require('../lib/misc')
 
 Jsl({
     pattern: 'fancy ?(.*)',
     fromMe: true,
     use: 'misc',
     desc: 'Creates fancy text fonts'
 }, (async (message, match,m) => {
     if (!match[1] || !message.reply_message.message) return await message.reply("Reply to any message with .fancy number\n" + Fancy("example", "32"))
     try {
         var result = Fancy(message.reply_message.message, match[1])
     } catch (e) {
         return await message.reply(e.message)
     }
     await message.reply(result)
 }))
