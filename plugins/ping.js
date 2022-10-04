const { Jsl } = require("../lib/");

Jsl({pattern: "ping ?(.*)",
    fromMe: isPublic,
    desc: "Measures ping",
    type: "utility",
 },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("```_❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯_```");
    const end = new Date().getTime();
    return await message.sendMessage(
      "_ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_"
    );
  }
);


