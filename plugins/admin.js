const config = require("../config");
const { Jsl, isAdmin, parsedJid, isUrl } = require("../lib/");

Jsl(
  {
    pattern: "add ?(.*)",
    fromMe: true,
    desc: "Adds a person to group",
    type: "type",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply("_This command is for groups_");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply("_I'm not admin_");
    match = match || message.reply_message.jid;
    let jid = parsedJid(match);
    await message.add(jid);
    return await message.reply(`@${jid[0].split("@")[0]} added`, {
      mentions: jid,
    });
  }
);

Jsl(
  {
    pattern: "kick ?(.*)",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply("_This command is for groups_");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply("_I'm not admin_");
    match = match || message.reply_message.jid;
    let jid = parsedJid(match);
    await message.kick(jid);
    return await message.reply(`@${jid[0].split("@")[0]} kicked`, {
      mentions: jid,
    });
  }
);

Jsl(
  {
    pattern: "promote ?(.*)",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply("_This command is for groups_");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply("_I'm not admin_");
    match = match || message.reply_message.jid;
    let jid = parsedJid(match);
    await message.promote(jid);
    return await message.reply(`@${jid[0].split("@")[0]} promoted as admin`, {
      mentions: jid,
    });
  }
);
Jsl(
  {
    pattern: "demote ?(.*)",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply("_This command is for groups_");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply("_I'm not admin_");
    match = match || message.reply_message.jid;
    let jid = parsedJid(match);
    await message.demote(jid);
    return await message.reply(`@${jid[0].split("@")[0]} demoted from admin`, {
      mentions: jid,
    });
  }
);

