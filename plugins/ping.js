
const { bot, isPublic } = require("../lib/");

bot({
    pattern: "ping ?(.*)",
    fromMe: isPublic,
    desc: "check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯");
    const end = new Date().getTime();
    return await message.sendMessage(
      "*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*"
    );
  }
);
