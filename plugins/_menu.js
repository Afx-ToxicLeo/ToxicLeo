const events = require("../lib/utils");
const { Jsl, getBuffer, commands } = require("../lib");
const { readFileSync } = require("fs");
Jsl(
  {
    pattern: "menu ?(.*)",
    fromMe: true,
    desc: "Show All commands",
  },
  async (message, match) => {
    let menu = `╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼\n╽`
    let cmnd = [];
    events.commands.map((command, num) => {
      let cmd;
      if (command.pattern) {
        cmd = command.pattern
          .toString()
          .match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
      }

      if (!command.dontAddCommandList&& cmd !==undefined) {
        cmnd.push(cmd);
      }
    });
    cmnd.sort();
    cmnd.forEach((cmd, num) => {
      menu += `\n┠${(num += 1)} \`\`\`${cmd}\`\`\` \n╿`;
    });
    menu += `\n╰╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼`
    message.sendMessage(readFileSync("./temp/abu.png"), {caption:menu},'image');
  }
);

Jsl({pattern: 'list ?(.*)', fromMe: true, dontAddCommandList: true }, async (message, match) => {
let msg = '', no  = 1;
commands.map(async (command) => { if (command.dontAddCommandList === false && command.pattern !== undefined) { msg += `${no++}. ${command.pattern.toString().match(/(\W*)([A-Za-z0-9_ğüşiö ç]*)/)[2].trim()}\n${command.desc}\n\n`};})
await message.reply(msg)
});
