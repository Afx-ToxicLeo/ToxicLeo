const { command } = require("../lib/");
command(
  {
    pattern: "ping ?(.*)",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match) => {
  const start = new Date().getTime();
   await message.sendMessage("*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*");
    const buttons = [
      {buttonId: ',menu', buttonText: {displayText: 'menu'}},
      {buttonId: ',ping', buttonText: {displayText: 'ping'}}
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
