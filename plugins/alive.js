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
    const end = new Date().getTime();
    const buttons = [
      {buttonId: ',menu', buttonText: {displayText: '𝙈𝙀𝙉𝙐'}},
      {buttonId: ',ping', buttonText: {displayText: '𝙋𝙄𝙉𝙂'}}
    ]
    
    const buttonMessage = {
        text: '𝐑𝐄𝐒𝐏𝐎𝐍𝐒𝐄 𝐈𝐍 ' + (end - start) + ' _𝐌𝐒_',
        footer: '𝐁𝐎𝐓 𝐏𝐈𝐍𝐆',
        buttons: buttons,
        headerType: 1
    }
    
    await message.client.sendMessage(message.jid, buttonMessage)
  }
);
