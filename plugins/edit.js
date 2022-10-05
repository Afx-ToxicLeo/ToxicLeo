const { isPublic, bot, getBuffer } = require("../lib");
const ll = "*Type something*";

bot(
  {
    pattern: "trollmaker ?(.*)",
    fromMe:isPublic,
    desc: "you can make your own trolls by this tool",
    type:'tool'
  },
  async (message, match) => {
    return await message.sendMessage(
      `╭────────────────╮
               *ᴛʀᴏʟʟ ᴘᴀᴄᴋ*
╰────────────────╯
               *ᴄᴏᴍᴍᴀɴᴅs*

❏ ᴅᴏɢɢʏ ᴘᴀᴄᴋ
╭────────────────
│ ▢ ᴀsᴋᴅᴏɢ
│ ▢ ʜᴀᴘᴘʏᴅᴏɢ
│ ▢ ᴄᴏᴅᴇᴅᴏɢ
│ ▢ ʟᴏᴠᴇᴅᴏɢ
│ ▢ ɢᴜɴᴅᴏɢ
│ ▢ ᴀɴɢʀʏᴅᴏɢ
│ ▢ sᴇᴅᴅᴏɢ
│ ▢ ᴛʜᴜɢᴅᴏɢ
╰────────────────

❏ ᴄᴀᴛ ᴘᴀᴄᴋ

╭────────────────
│   ❏ ᴄᴀᴛ  sᴇᴅ
│   
│ ▢ ᴀsᴇᴅᴄᴀᴛ
│ ▢ ʙsᴇᴅᴄᴀᴛ
│ ▢ ᴄsᴇᴅᴄᴀᴛ
│ ▢ ᴅsᴇᴅᴄᴀᴛ
│ ▢ ᴇsᴇᴅᴄᴀᴛ
│ ▢ ғsᴇᴅᴄᴀᴛ
╰────────────────

╭────────────────
│   ❏ ᴄᴀᴛ  ʟᴏᴠᴇ
│   
│ ▢ ᴀʟᴏᴠᴇᴄᴀᴛ
│ ▢ ʙʟᴏᴠᴇᴄᴀᴛ
│ ▢ ᴄʟᴏᴠᴇᴄᴀᴛ
│ ▢ ᴅʟᴏᴠᴇᴄᴀᴛ
│ ▢ ᴇʟᴏᴠᴇᴄᴀᴛ
│ ▢ ғʟᴏᴠᴇᴄᴀᴛ
╰────────────────

╭────────────────
│   ❏ ᴄᴀᴛ  ᴀɴɢʀʏ
│   
│ ▢ ᴀᴀɴɢʀʏᴄᴀᴛ
│ ▢ ʙᴀɴɢʀʏᴄᴀᴛ
│ ▢ ᴄᴀɴɢʀʏᴄᴀᴛ
│ ▢ ᴅᴀɴɢʀʏᴄᴀᴛ
│ ▢ ᴇᴀɴɢʀʏᴄᴀᴛ
│ ▢ ғᴀɴɢʀʏᴄᴀᴛ
╰────────────────

╭────────────────
│   ❏ ᴄᴀᴛ  ᴀɴɢʀʏ
│   
│ ▢ ᴀᴄᴜᴛᴇᴄᴀᴛ
│ ▢ ʙᴄᴜᴛᴇᴄᴀᴛ
│ ▢ ᴄᴄᴜᴛᴇᴄᴀᴛ
│ ▢ ᴅᴄᴜᴛᴇᴄᴀᴛ
│ ▢ ᴇᴄᴜᴛᴇᴄᴀᴛ
│ ▢ ғᴄᴜᴛᴇᴄᴀᴛ
╰────────────────

╭────────────────
│  ❏ ᴍɪsᴄᴇʟʟᴀɴᴏᴜs 
│   
│ ▢ ᴏʀɢsᴍ
╰────────────────`
    );
  }
);

bot(
  {
    pattern: "doggy ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${
        match.split(";")[1]
      }&img=https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg/revision/latest/top-crop/width/360/height/450?cb=20190205113053`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "askdog ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/o07ESQe.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "happydog ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/GYQZS92.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "codedog ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/sXP02k8.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "lovedog ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/XMFjEB1.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "gundog ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/oRN3wdZ.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "angrydog ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/4NnqLBo.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "seddog ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/IobC083.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "thugdog ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/nm8ce0C.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

// cat camands below

bot(
  {
    pattern: "asedcat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/gXp8b7o.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "bsedcat?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/TpArZur.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "csedcat?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/4Xo3beO.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "dsedcat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/wdoCo3n.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "esedcat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/ttQSzfQ.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "fsedcat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/b88sdCp.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "alovecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/SIrTjpF.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "blovecat?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/oQMIlfH.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "clovecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/JyEKXI1.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "dlovecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/InDs7ru.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "elovecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/KURVqlz.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "fovecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/4bzB8mT.png`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "aangrycat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/Cg2y9kP.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "bangrycat?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/QShIqGQ.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "cangrycat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/9PzbtLH.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "dangrycat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/InDs7ru.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "eangrycat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/nvYlfFe.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "fangrycat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/NyusYzP.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "acutecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/uvcSdde.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "bcutecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/bVxisI5.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "ccutecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/dO2j0iL.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "orgsm ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=%20&img=https://i.imgur.com/3YiONmk.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "dcutecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/N8jjMxb.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "ecutecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/1l87r7u.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "fcutecat ?(.*)",
    fromMe:isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (match === "" || !match.split(";")[0] || !match.split(";")[1])
      return await message.sendMessage(
        "*ᴇxᴀᴍᴘʟᴇ \n╭──────────────── \n│  ᴅᴏɢɢʏ ᴛʀᴏʟʟ;ᴘᴀᴄᴋ \n│   ▢ ᴛʀᴏʟʟ=ᴛᴏᴘ \n│   ▢ ᴘᴀᴄᴋ=ʙᴏᴛᴛᴏᴍ \n╰────────────────╯"
      );

    const buffer = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=${
        match.split(";")[0]
      }&bottom=${match.split(";")[1]}&img=https://i.imgur.com/fXeNyWK.jpeg`
    );
    return await message.sendMessage(buffer, {}, "image");
  }
);

bot(
  {
    pattern: "my3 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/3oiVAaC.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "fuck ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/9d4db91478cc90cbe814c.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "hii ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=hii&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/f5277ae7383f852196e8c.jpg/revision/latest/top-crop/width/1152/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "sir ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/9d4db91478cc90cbe814c.jpg/revision/latest/top-crop/width/1128/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "yasai ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/1ec40b3da163e0a55da66.jpg/revision/latest/top-crop/width/1203/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "hapoi ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/21b92760827dc33301a79.jpg/revision/latest/top-crop/width/916/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "uddika ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=uddikaputo&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/80c57bf5ac6c0fd0a1ca9.jpg/revision/latest/top-crop/width/747/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "aah ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/c34d400e0a937ee12a3f7.jpg/revision/latest/top-crop/width/1035/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "asai ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://telegra.ph/file/0bab6f4db17b4abca2677.jpg/revision/latest/top-crop/width/720/height/720?cb=20190205115000`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "quby1 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/rIz7yEg.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "quby2 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/rrfPeuq.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "quby3 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/l7ZCF3d.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "quby4 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/3ohqPtW.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "cat1 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/7eDuJS9.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "cat2 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/4t1sZoF.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "cat3 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/olnvBj7.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "cat4 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/dTQ43sU.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "trollikka1 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/03J0RQA.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "trollikka2 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/03J0RQA.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "trollikka3 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/oIdcRPg.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);

bot(
  {
    pattern: "trollikka4 ?(.*)",
    fromMe: isPublic,
    dontAddbotList: false,
    type: "Maker menu",
  },
  async (message, match) => {
    if (!match) return await message.reply(ll);

    var ttinullimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/meme-gen?top=%20&bottom=${encodeURIComponent(
        match
      )}&img=https://i.imgur.com/HRLF2Ri.jpeg`
    );

    await message.sendMessage(ttinullimage, {}, "image");
  }
);
