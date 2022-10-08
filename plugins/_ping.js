const { Module, isPublic} = require("../lib/");

Module(
  {
    pattern: "ping ?(.*)",
    fromMe: isPublic,
    desc: "check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("❮ 𝙏𝙀𝙎𝙏𝙄𝙉𝙂 𝙋𝙄𝙉𝙂 ❯");
    const end = new Date().getTime();
    return await message.sendMessage(
      "*𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝙀 𝙄𝙉 ```" + (end - start) + "``` _𝙈𝙎_*"
    );
  }
);
