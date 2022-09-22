const { Jsl } = require("../lib/");

Jsl(
  {
    pattern: "ping ?(.*)",
    fromMe: true,
    desc: "Send Bot Ping",
    type: "misc",
  },
  async (message, match) => {
  const start = new Date().getTime();
   await message.sendMessage("*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*");
    const buttons = [
      {buttonId: ',menu', buttonText: {displayText: 'ᴍᴇɴᴜ'}},
      {buttonId: ',ping', buttonText: {displayText: 'ᴘɪɴɢ'}}
    ]
    
    const buttonMessage = {
        text: '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*',
        footer: 'ᴘɪɴɢ ᴛᴇsᴛɪɴɢ',
        buttons: buttons,
        headerType: 1
    }
    
    await message.client.sendMessage(message.jid, buttonMessage)
  }
);
