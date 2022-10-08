const { getBuffer, Module, isPublic } = require("../lib");
const NEED_WORD = "*You Must Enter a Word*";
const {
  ancient,
  arcane,
  avengers,
  balloon,
  balloon2,
  beach,
  bearlogo,
  berry,
  blackpink,
  blackpink1,
  blackpink2,
  blackpink3,
  blood,
  bokeh,
  bread,
  camerica,
  camerica2,
  chocolate,
  christmas,
  christmas2,
  christmas3,
  christmas4,
  christmas5,
  circuit,
  deepsea,
  deluxe,
  deluxe2,
  demon,
  denim,
  devil,
  diamonds,
  equalizer,
  fabric,
  fade,
  fire,
  flagamerica,
  giraffe,
  glass,
  glass2,
  glitch,
  glitch2,
  glossy,
  glue,
  golden,
  gradient,
  gradient2,
  graffiti,
  graffiti2,
  halloween,
  harrypotter,
  holograph,
  l1917,
  layered,
  leaves,
  love,
  love2,
  love3,
  luxury,
  luxury2,
  magma,
  marvel,
  marvel2,
  matrix,
  metal,
  metal2,
  metal3,
  metal4,
  metal5,
  metal6,
  metal7,
  metal8,
  metal9,
  minion,
  neon,
  neon2,
  neon3,
  neon4,
  neon5,
  neon6,
  newyear,
  orange,
  papercut,
  papercut2,
  phub,
  pottery,
  quote,
  r2,
  rainbow,
  retro,
  retro2,
  sand,
  sand2,
  sand3,
  sand4,
  scifi,
  scifi2,
  scifi3,
  skeleton,
  sketch,
  sky,
  sky2,
  sliced,
  space,
  space2,
  sparkle,
  spooky,
  spooky2,
  spooky3,
  steel,
  stone,
  stone2,
  stone3,
  stone4,
  strawberry,
  summer,
  summer2,
  thor,
  thunder,
  title,
  toxic,
  transformers,
  typography,
  underwater,
  vintage,
  watercolor,
  waterpipe,
  whitegold,
  wicker,
  window,
  winter,
} = require("@neeraj-x0/textpro");

Module(
  {
    pattern: "sparkling",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (match === "")
      return await message.client.sendMessage(message.jid, NEED_WORD);

    var topText, bottomText;
    if (match.includes("/")) {
      var split = match.split("/");
      bottomText = split[1];
      topText = split[0];
    }

    var webimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/sparkling?text1=${topText}&text2=${bottomText}`
    );

    await message.client.sendMessage(webimage, {}, "image");
  }
);


Module(
  {
    pattern: "ninjalogo",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (match === "")
      return await message.client.sendMessage(message.NEED_WORD);

    var webimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/gaming?text=${match}`
    );

    await message.client.sendMessage(webimage, {}, "image");
  }
);


Module(
  {
    pattern: "neonlight",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (match === "")
      return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/neon_light?text=${match}`
    );

    await message.client.sendMessage(webimage, {}, "image");
  }
);


Module(
  {
    pattern: "sandwriting",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (match === "")
      return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await getBuffer(
      `https://api.xteam.xyz/textpro/sandwriting?text=${match}&APIKEY=d90a9e986e18778b`
    );

    await message.client.sendMessage(webimage, {}, "image");
  }
);


Module(
  {
    pattern: "cloud",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (match === "")
      return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await getBuffer(
      `https://api.xteam.xyz/textpro/cloudtext?text=${match}&APIKEY=d90a9e986e18778b`
    );

    await message.client.sendMessage(webimage, {}, "image");
  }
);


Module(
  {
    pattern: "pornhub",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (match === "")
      return await message.client.sendMessage(message.jid, NEED_WORD);

    var topText, bottomText;
    if (match.includes("/")) {
      var split = match.split("/");
      bottomText = split[1];
      topText = split[0];
    }

    var webimage = await getBuffer(
      `https://api.xteam.xyz/textpro/ph?text=${topText}&text2=${bottomText}&APIKEY=ab9942f95c09ca89`
    );

    await message.client.sendMessage(webimage, {}, "image");
  }
);


Module(
  {
    pattern: "snow",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (match === "")
      return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await getBuffer(
      `https://api.xteam.xyz/textpro/snowtext?text=${match}&APIKEY=ab9942f95c09ca89`
    );

    await message.client.sendMessage(webimage, {}, "image");
  }
);


Module(
  {
    pattern: "3dtext",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (match === "")
      return await message.client.sendMessage(message.jid, NEED_WORD);

    var webimage = await getBuffer(
      `https://docs-jojo.herokuapp.com/api/text3d?text=${match}`
    );

    await message.client.sendMessage(webimage, {}, "image");
  }
);


Module(
  {
    pattern: "ancient",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await ancient(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "arcane",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await arcane(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "avengers",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2] = match.split(",");
    if (!t1 || !t2) return message.reply(" text1,text2");
    let data = await avengers(t1, t2);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "balloon",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await balloon(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "balloon2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await balloon2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "beach",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await beach(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "bearlogo",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await bearlogo(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "berry",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await berry(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "blackpink",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await blackpink(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "blackpink1",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await blackpink1(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "blackpink2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await blackpink2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "blackpink3",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await blackpink3(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "blood",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await blood(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "bokeh",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await bokeh(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "bread",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await bread(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "camerica",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2] = match.split(",");
    if (!t1 || !t2) return message.reply(" text1,text2");
    let data = await camerica(t1, t2);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "camerica2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await camerica2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "chocolate",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await chocolate(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "christmas",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await christmas(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "christmas2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await christmas2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "christmas3",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await christmas3(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "christmas4",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await christmas4(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "christmas5",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await christmas5(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "circuit",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await circuit(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "deepsea",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await deepsea(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "deluxe",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await deluxe(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "deluxe2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await deluxe2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "demon",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await demon(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "denim",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await denim(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "devil",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await devil(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "diamonds",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await diamonds(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "equalizer",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await equalizer(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "fabric",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await fabric(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "fade",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await fade(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "flagamerica",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await flagamerica(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "giraffe",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await giraffe(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "glass",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await glass(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "glass2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await glass2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "glitch",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await glitch(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "glitch2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await glitch2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "glossy",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await glossy(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "glue",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await glue(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "golden",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await golden(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "gradient",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await gradient(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "gradient2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await gradient2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "graffiti",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await graffiti(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "graffiti2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await graffiti2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "halloween",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await halloween(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "harrypotter",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await harrypotter(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "holograph",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await holograph(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "l1917",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await l1917(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "layered",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2] = match.split(",");
    if (!t1 || !t2) return message.reply(" text1,text2");
    let data = await layered(t1, t2);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "leaves",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await leaves(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "love",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await love(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "love2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await love2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "love3",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await love3(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "luxury",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await luxury(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "luxury2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await luxury2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "magma",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await magma(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "marvel",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2] = match.split(",");
    if (!t1 || !t2) return message.reply(" text1,text2");
    let data = await marvel(t1, t2);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "marvel2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2] = match.split(",");
    if (!t1 || !t2) return message.reply("text1,text2");
    let data = await marvel2(t1, t2);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "matrix",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await matrix(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "metal",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await metal(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "metal2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await metal2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "metal3",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await metal3(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "metal4",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await metal4(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "metal5",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await metal5(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "metal6",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await metal6(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "metal7",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await metal7(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "metal8",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await metal8(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "metal9",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await metal9(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "minion",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await minion(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "neon",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await neon(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "neon2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await neon2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "neon3",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await neon3(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "neon4",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await neon4(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "neon5",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await neon5(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "neon6",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await neon6(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "newyear",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await newyear(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "orange",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await orange(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "papercut",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await papercut(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "papercut2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await papercut2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "phub",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await phub(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "pottery",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await pottery(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "quote",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await quote(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "r2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await r2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "rainbow",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await rainbow(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "retro",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await retro(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "retro2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2, t3] = match.split(",");
    if (!t1 || !t2 || !t3) return message.reply(" text1,text2,text2");
    let data = await retro2(t1, t2, t3);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "sand",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await sand(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "sand2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await sand2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "sand3",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await sand3(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "sand4",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await sand4(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "scifi",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await scifi(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "scifi2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await scifi2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "scifi3",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await scifi3(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "skeleton",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await skeleton(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "sketch",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await sketch(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "sky",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await sky(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "sky2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await sky2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "sliced",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await sliced(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "space",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await space(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "space2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2] = message.split(",");
    if (!t1 && !t2) return message.reply("text1,text2");
    let data = await space2(t1, t2);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "sparkle",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await sparkle(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "spooky",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await spooky(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "spooky2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2] = message.split(",");
    if (!t1 && !t2) return message.reply("text1,text2");
    let data = await spooky2(t1, t2);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "spooky3",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2] = message.split(",");
    if (!t1 && !t2) return message.reply("text1,text2");
    let data = await spooky3(t1, t2);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "steel",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await steel(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "stone",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await stone(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "stone2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await stone2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "stone3",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await stone3(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "stone4",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2] = message.split(",");
    if (!t1 && !t2) return message.reply("text1,text2");
    let data = await stone4(t1, t2);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "strawberry",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await strawberry(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "summer",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await summer(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "summer2",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await summer2(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "thor",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await thor(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "thunder",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await thunder(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "title",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await title(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "toxic",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await toxic(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "transformers",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await transformers(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "typography",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await typography(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "underwater",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await underwater(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "vintage",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let [t1, t2] = message.split(",");
    if (!t1 && !t2) return message.reply("text1,text2");
    let data = await vintage(t1, t2);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "watercolor",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await watercolor(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "waterpipe",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await waterpipe(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "whitegold",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await whitegold(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "wicker",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await wicker(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "window",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await window(match);
    await message.sendFromUrl(data.url);
  }
);


Module(
  {
    pattern: "winter",
    fromMe: isPublic,
    dontAddCommandList: false,
    type: "Textpro",
  },
  async (message, match) => {
    if (!match) return await message.reply("Enter Text");
    let data = await winter(match);
    await message.sendFromUrl(data.url);
  }
);
