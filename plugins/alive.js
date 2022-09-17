const { Jsl } = require("../lib/");

Jsl(
  {
    pattern: "ping ?(.*)",
    fromMe: true,
    desc: "To check ping",
    type: "misc",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*");
    const end = new Date().getTime();
    return await message.sendMessage(
      '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*'
    );
  }
);
