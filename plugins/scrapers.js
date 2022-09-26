const { Function, Jsl, webp2mp4, isUrl } = require("../lib/");
const { yta, ytIdRegex, ytv } = require("../lib/yotube");
const { search } = require("yt-search");
const { toAudio } = require("../lib/media");
let gis = require("g-i-s");

Jsl(
  {
    pattern: "vv ",
    fromMe: true,
    desc: "Forwards The View once messsage",
    type: "tool",
  },
  async (message, match, m) => {
    if (message.reply_message.type !== "view_once")
      return await message.reply("_Not a View Once_");
    let buff = await m.quoted.download();
    return await message.sendFile(buff);
  }
);

Jsl(
  {
    pattern: "photo ",
    fromMe: true,
    desc: "Changes sticker to Photo",
    type: "converter",
  },
  async (message, match, m) => {
    if (message.reply_message.mtype !== "stickerMessage")
      return await message.reply("_Not a sticker_");
    let buff = await m.quoted.download();
    return await message.sendMessage(buff, {}, "image");
  }
);

Jsl(
  {
    pattern: "mp4 ",
    fromMe: true,
    desc: "Changes sticker to Video",
    type: "converter",
  },
  async (message, match, m) => {
    if (message.reply_message.mtype !== "stickerMessage")
      return await message.reply("_Not a sticker_");
    let buff = await m.quoted.download();
    let buffer = await webp2mp4(buff);
    return await message.sendMessage(buffer, {}, "video");
  }
);

Jsl(
  {
    pattern: "song ",
    fromMe: true,
    desc: "Downloads Song",
    type: "downloader",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (ytIdRegex.test(match)) {
      yta(match.trim()).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title });
      });
    }
    search(match + "song").then(async ({ all }) => {
      await message.reply(`_Downloading ${all[0].title}_`);
      yta(all[0].url).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title, quoted: message });
      });
    });
  }
);

Jsl(
  {
    pattern: "video ",
    fromMe: true,
    desc: "Downloads video",
    type: "downloader",
  },
  async (message, match) => {
    match = match || message.reply_message.text;
    if (ytIdRegex.test(match)) {
      ytv(match.trim()).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title });
      });
    }
    search(match + "song").then(async ({ all }) => {
      await message.reply(`_Downloading ${all[0].title}_`);
      ytv(all[0].url).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title, quoted: message });
      });
    });
  }
);

Jsl(
  {
    pattern: "mp3 ",
    fromMe: true,
    desc: "converts video/voice to mp3",
    type: "downloader",
  },
  async (message, match, m) => {
    let buff = await m.quoted.download();
    buff = await toAudio(buff, "mp3");
    return await message.sendMessage(buff, { mimetype: "audio/mpeg" }, "audio");
  }
);

Jsl(
  {
    pattern: "yts ",
    fromMe: true,
    desc: "Search Youtube",
    type: "Search",
  },
  async (message, match) => {
    if(!match) return await message.reply('_Enter a search term_')
    let rows = [];
    search(match).then(async ({ videos }) => {
      videos.forEach((result) => {
        rows.push({
          title: result.title,
          description: `\nDuration : ${result.duration.toString()}\nAuthor : ${
            result.author
          }\nPublished : ${result.ago}\nDescription : ${
            result.description
          }\nURL : ${result.url}`,
          rowId: ` `,
        });
      });
      await message.client.sendMessage(message.jid, {
        text: "Youtube Search for " + match,
        buttonText: "View Results",
        sections: [
          {
            title: "Youtube Search",
            rows: rows,
          },
        ],
      });
    });
  }
);
