const events = require("../lib/utils");
const { Jsl, getBuffer } = require("../lib");
const { readFileSync } = require("fs");
const { fetch } = require('node-fetch') 

Jsl(
  {
    pattern: "list ?(.*)",
    fromMe: true,
    desc: "Show All commands",
  },
  async (message, match) => {
  var img = await (await fetch('https://telegra.ph/file/e6c498c568fd8d35f9395.jpg')).buffer(), 
    let menu = "";
    let cmnd = [];
    events.commands.map((command, num) => {
      let cmd;
      if (command.pattern) {
        cmd = command.pattern
          .toString()
          .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
      }

      if (!command.dontAddCommandList&&cmd !==undefined) {
        cmnd.push(cmd);
      }
    });
    cmnd.sort();
    cmnd.forEach((cmd, num) => {
      menu += `${(num += 1)} ${cmd} \n`;
    });
    message.sendMessage(menu, {
      quoted: {
        key: {
          participant: "0@s.whatsapp.net",
          remoteJid: "status@broadcast",
        },
        message: {
          orderMessage: {
            itemCount: 9999999,
            itemCoun: 404,
            surface: 404,
            message: `© 𝗔𝗕𝗨-𝗠𝗗`,
            orderTitle: "B",
            thumbnail: img,
            sellerJid: "0@s.whatsapp.net",
          },
        },
      },
    });
  }
);
