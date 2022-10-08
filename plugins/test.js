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
  {index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},
  {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},
  {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]

const buttonMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: templateButtons,
    image: {url: 'https://telegra.ph/file/98364e342c965a8f34b21.jpg'}
}    
    await message.client.sendMessage(message.jid, buttonMessage)
  }
);
