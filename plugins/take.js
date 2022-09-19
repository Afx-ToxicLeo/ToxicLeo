const config = require("../config");
const { Jsl, getJson, sleep } = require("../lib/");
Jsl(
  {
    pattern: "sticker ?(.*)",
    fromMe: true,
    desc: "_Converts Photo or video to sticker_",
    type: "converter",
  },
  async (message, match,m) => {
    if(!(message.reply_message.video||message.reply_message.image)) return await message.reply('_Reply to photo or video_')
    let buff = await m.quoted.download()
    message.sendMessage(buff,{ packname: config.PACKNAME, author: config.AUTHOR },'sticker')
  }
);


Jsl(
  {
    pattern: "tgs ?(.*)",
    fromMe: true,
    desc: "Download Sticker From Telegram",
    type: "Tools",
  },
  async (message, match) => {
    if (!match)
      return message.reply(
        "_Enter a tg sticker url_"
      );
    let packid = match.split("/addstickers/")[1];
    let { result } = await getJson(
      `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(
        packid
      )}`
    );
    if (result.is_animated)
      return message.reply("_Animated stickers are not supported_");
    message.reply(
      `*ᴛᴏᴛᴀʟ sᴛɪᴄᴋᴇʀs :* ${result.stickers.length}\n*Estimated complete in:* ${
        result.stickers.length * 1.5
      } seconds`.trim()
    );
    for (let sticker of result.stickers) {
      let file_path = await getJson(
        `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${sticker.file_id}`
      );
      await message.sendMessage(`https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file_path.result.file_path}`,{ packname: config.PACKNAME, author: config.AUTHOR },'sticker')
    }
  }
);
