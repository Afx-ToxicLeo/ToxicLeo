const { Module } = require("../lib/");
Module(
  {
    pattern: "test ",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match) => {
  const templateButtons = [
  {urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
  {callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},
  {quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]

const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: templateButtons
}    
    await message.client.sendMessage(message.jid, templateMessage)
  }
);
