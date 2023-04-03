const { command,tiny } = require("../lib/");
const {
  setMessage,
  getMessage,
  delMessage,
  getStatus,
  toggleStatus,
} = require("../lib/database/greetings");
command(
  {
    pattern: "welcome ?(.*)",
    fromMe: true,
    desc: "description",
    type: "group",
  },
  async (message, match) => {
    let {prefix} = message
    if (!message.isGroup) return;
    let status = await getStatus(message.jid, "welcome");
    let toggler = status ? "off" : "on";
    let stat = status ? "on" : "off";
    if (!match) {
      return await message.client.sendMessage(message.jid, {
        text: tiny("Welcome manager"),
        footer:
          (await (await message.client.groupMetadata(message.jid)).subject) +
          `\nstatus : ${stat}`,
        buttons: [
          {
            buttonId: prefix + "welcome get",
            buttonText: { displayText: "GET" },
          },
          {
            buttonId: prefix + "welcome " + toggler,
            buttonText: { displayText: toggler.toUpperCase() },
          },
        ],
      });
    }
    if (match === "get") {
      let msg = await getMessage(message.jid, "welcome");
      if (!msg) return await message.reply(" ᴛʜᴇʀᴇ ɪs ɴᴏ ᴡᴇʟᴄᴏᴍᴇ sᴇᴛ");
      return message.reply(msg.message);
    }
    if (match === "on") {
      let msg = await getMessage(message.jid, "welcome");
      if (!msg)
        return await message.reply(" *ᴛʜᴇʀᴇ ɪs ɴᴏ welcome ᴍᴇssᴀɢᴇ ᴛᴏ ᴇɴᴀʙʟᴇ* ");
      if (status) return await message.reply(" *ᴡᴇʟᴄᴏᴍᴇ ᴀʟʀᴇᴀᴅʏ ᴇɴᴀʙʟᴇᴅ");
      await toggleStatus(message.jid);
      return await message.reply(" *ᴡᴇʟᴄᴏᴍᴇ ᴇɴᴀʙʟᴇ* ");
    }
    if (match === "off") {
      if (!status) return await message.reply(" *ᴡᴇʟᴄᴏᴍᴇ ᴀʟʀᴇᴀᴅʏ ᴅɪsᴀʙʟᴇᴅ* ");
      await toggleStatus(message.jid, "welcome");
      return await message.reply(" *ᴡᴇʟᴄᴏᴍᴇ  ᴅɪsᴀʙʟᴇᴅ* ");
    }
    if (match == "delete") {
      await delMessage(message.jid, "welcome");
      return await message.reply(" *ᴡᴇʟᴄᴏᴍᴇ ᴅᴇʟᴇᴛᴇᴅ sᴜᴄᴄᴇssғᴜʟʟʏ* ");
    }
    await setMessage(message.jid, "welcome", match);
    return await message.reply(" *ᴡᴇʟᴄᴏᴍᴇ sᴇᴛ sᴜᴄᴄᴇssғᴜʟʟʏ* ");
  }
);

command(
  {
    pattern: "goodbye ?(.*)",
    fromMe: true,
    desc: "description",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return;
    let status = await getStatus(message.jid, "goodbye");
    let toggler = status ? "off" : "on";
    let stat = status ? "on" : "off";
    if (!match) {
      return await message.client.sendMessage(message.jid, {
        text: tiny("Goodbye manager"),
        footer:
          (await (await message.client.groupMetadata(message.jid)).subject) +
          `\nstatus : ${stat}`,
        buttons: [
          {
            buttonId: prefix + "goodbye get",
            buttonText: { displayText: "GET" },
          },
          {
            buttonId: prefix + "goodbye " + toggler,
            buttonText: { displayText: toggler.toUpperCase() },
          },
        ],
      });
    }
    if (match === "get") {
      let msg = await getMessage(message.jid, "goodbye");
      if (!msg) return await message.reply(" *ᴛʜᴇʀᴇ ɪs ɴᴏ ɢᴏᴏᴅʙʏᴇ sᴇᴛ* ");
      return message.reply(msg.message);
    }
    if (match === "on") {
      await toggleStatus(message.jid, "goodbye");
      return await message.reply(" *ɢᴏᴏᴅʙʏᴇ ᴇɴᴀʙʟᴇᴅ* ");
    }
    if (match === "off") {
      await toggleStatus(message.jid);
      return await message.reply(" *ɢᴏᴏᴅʙʏᴇ ᴅɪsᴀʙʟᴇᴅ* ");
    }
    if (match == "delete") {
      await delMessage(message.jid, "goodbye");
      return await message.reply(" *ɢᴏᴏᴅʙʏᴇ  ᴅᴇʟᴇᴛᴇᴅ sᴜᴄᴄᴇsғᴜʟʟʏ* ");
    }
    await setMessage(message.jid, "goodbye", match);
    return await message.reply(" *ɢᴏᴏᴅʙʏᴇ sᴇᴛ sᴜᴄᴄᴇsғᴜʟʟʏ* ");
  }
);
