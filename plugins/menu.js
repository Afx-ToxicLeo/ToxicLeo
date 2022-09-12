const events = require("../lib/utils");
const { Jsl, getBuffer } = require("../lib");
const { readFileSync } = require("fs");
Jsl(
  {
    pattern: "menu ?(.*)",
    fromMe: true,
    desc: "Show All commands",
  },
  async (message, match) => {
    let menu = "";
    let cmnd = [];
    events.commands.map((command, num) => {
      let cmd = command.pattern
        .toString()
        .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
      if (!command.dontAddCommandList) {
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
            itemCount: 123,
            itemCoun: 404,
            surface: 404,
            message: `© Abu MD`,
            orderTitle: "B",
            thumbnail: {url:'https://imgur.com/MCOhVfX'},
            sellerJid: "0@s.whatsapp.net",
          },
        },
      },
    });
  }
);
