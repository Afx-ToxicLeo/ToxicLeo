const { Jsl } = require("../lib/");
const config = require('../config');
const { ALIVE_INFO } = require('../config');


Jsl(
  {
    pattern: "alive ?(.*)",
    fromMe: true,
    desc: "Send Bot Alive",
    type: "misc",
  },
  async (message, match) => {
  const start = new Date().getTime();
   await message.sendMessage("*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*");
    const buttons = [
      {buttonId: ',menu', buttonText: {displayText: '𝙼𝙴𝙽𝚄'}},
      {buttonId: ',ping', buttonText: {displayText: '𝙿𝙸𝙽𝙶'}}
    ]
    
    const buttonMessage = {
        text: '      \n╔══╗╔╗─╔══╗╔╗─╔╗╔═╗        \n║╔╗║║║─╚║║╝║╚╦╝║║╦╝        \n║╠╣║║╚╗╔║║╗╚╗║╔╝║╩╗        \n╚╝╚╝╚═╝╚══╝─╚═╝─╚═╝ \n\n *╔✘ 𝐈𝐀𝐌 𝐒𝐓𝐈𝐋𝐋 𝐀𝐋𝐈𝐕𝐄 𝐁𝐑𝐎*»\n*║✘Bᴏᴛ ɴᴀᴍᴇ :*ᴀʙᴜ ᴍᴅ\n*║✘ Oᴡɴᴇʀ : ᴊsʟ*\n*║✘Wᴏʀᴋ ᴛʏᴘᴇ : *ᴘᴜʙʟɪᴄ\n*║✘ Pʀᴇғɪx : ' + Config.HANDLERS + '*    \n *╚✘*\n           *𝐀𝐁𝐔 𝐌𝐃 𝐖𝐀 𝐁𝐎𝐓*         \n\n*╭◪ ᴄᴏᴅᴅᴇᴅ ʙʏ ᴊsʟ*\n*╰─────────────────❋ཻུ۪۪⸙*\n',          
        footer: `${ALIVE_INFO.split(";")[0]}`,
        buttons: buttons,
        headerType: 1
    }
    
    await message.client.sendMessage(message.jid, buttonMessage)
  }
);

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


