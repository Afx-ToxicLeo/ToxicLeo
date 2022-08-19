var a = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
a.addCommand({pattern: 'alive ?(.*)', fromMe: true, desc: 'Send Alive Msg'}, async (message, match) => {
await message.client.sendMessage(message.jid, { text: 'Im Alive' })
});
