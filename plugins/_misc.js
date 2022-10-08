const { 
        Module,
        sleep, 
        isPublic,
        isUrl, 
        Bitly
} = require("../lib/");
Module(
  {
    pattern: "getqr ?(.*)",
    fromMe: isPublic,
    desc: "Get connection QR",
    type: "misc",
  },
  async (message, match) => {
    for (let index = 0; index < 5; index++) {
      await sleep(30 * 1000);
      await message.sendFromUrl("fix-my.vercel.app/", {
        caption: "Scan within 20 seconds",
      });
    }
    return await message.reply("Your session is OVER");
  }
);

Module(
  {
    pattern: "bitly ?(.*)",
    fromMe: isPublic,
    desc: "Converts Url to bitly",
    type: "tool",
  },
  async (message, match) => {
    match = match||message.reply_message.text
    if(!match) return await message.reply('_Reply to a url or enter a url_')
    if(!isUrl(match)) return await message.reply('_Not a url_')
    let short = await Bitly(match)
    return await message.reply(short.link)
  }
);
