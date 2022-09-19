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
 }, (async (message, match) => {
     if (!match[1] || !message.reply_message.message) return await message.sendReply("Reply to any message with .fancy number\n" + Fancy("example", "32"))
     try {
         var result = Fancy(message.reply_message.message, match[1])
     } catch (e) {
         return await msg.reply_message(e.message)
     }
     await msg.reply_message(result)
 }))
