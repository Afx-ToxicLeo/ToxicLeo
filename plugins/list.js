const events = require("../lib/utils");
const { Jsl, getBuffer } = require("../lib");
const { readFileSync } = require("fs");
Jsl(
  {
    pattern: "list ?(.*)",
    fromMe: true,
    desc: "Show All commands",
  },
  async (message, match) => {
  var img = await (await fetch('https://telegra.ph/file/e6c498c568fd8d35f9395.jpg')).buffer(),    
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
      menu += `\n┠${(num += 1)} \`\`\`${cmd}\`\`\` \n╿➪`;
    });
    menu += `\n╰╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼`
    message.sendMessage(readFileSync(img), {caption:menu},'image');
  }
);
