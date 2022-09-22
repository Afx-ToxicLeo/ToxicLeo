const {
     Jsl
 } = require('../lib/')
 const {
     Fancy
 } = require('../lib/misc')
 
 Jsl({pattern: "fancy ?(.*)", 
     fromMe: true, 
     desc: "change text to fancy text fonts", 
     type: "misvlc"}, 
     async (message, match) => {
 try {
     var result = Fancy(message.reply_message.text, 31)
 } catch (e) {
     return await message.reply(e.message)
 }
     await message.reply(result)
});
