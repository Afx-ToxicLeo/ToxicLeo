const config = require("../config");
const { command, isPrivate } = require("../lib/");
const { isAdmin, parsedJid, isUrl } = require("../lib");
const { cron, saveSchedule } = require("../lib/scheduler");


command(
  {
    pattern: "add ?(.*)",
    fromMe: isPrivate,
    desc: " *Adds a person to group*",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply(" *_ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs_*");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply(" *_ᴍᴇɴᴛɪᴏɴ ᴜsᴇʀ ᴛᴏ ᴀᴅᴅ_* ");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply(" *_ɪ'ᴍ ɴᴏᴛ  ᴀᴅᴍɪɴ_*");
    let jid = parsedJid(match);
    await message.add(jid);
    return await message.reply(`@${jid[0].split("@")[0]} *added*`, {
      mentions: jid,
    });
  }
);



command(
  {
    pattern: "kick",
    fromMe: true,
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply(" *_ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘ ᴏɴʟʏ_*");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply(" *_ᴍᴇɴᴛɪᴏɴ ᴜsᴇʀ ᴛᴏ ᴋɪᴄᴋ_*");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply(" *_ɪ'ᴍ ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ_*");
    let jid = parsedJid(match);
    await message.kick(jid);
    return await message.reply(`@${jid[0].split("@")[0]} *_ᴋɪᴄᴋᴇᴅ_*`, {
      mentions: jid,
    });
  }
 
);


command(
  {
    pattern: "promote",
    fromMe: isPrivate,
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply(" *_ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘ ᴏɴʟʏ_*");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply(" *_ᴍᴇɴᴛɪᴏɴ ᴜsᴇʀ ᴛᴏ ᴘʀᴏᴍᴏᴛᴇ_*");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply(" *_ɪ'ᴍ ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ_*");
    let jid = parsedJid(match);
    await message.promote(jid);
    return await message.reply(`@${jid[0].split("@")[0]} *_ᴘʀᴏᴍᴏᴛᴇᴅ ᴀs ᴀᴅᴍɪɴ_*`, {
      mentions: jid,
    });
  }
);


command(
  {
    pattern: "demote",
    fromMe: isPrivate,
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup)
      return await message.reply(" *_ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘ ᴏɴʟʏ_*");
    match = match || message.reply_message.jid;
    if (!match) return await message.reply(" *_ᴍᴇɴᴛɪᴏɴ ᴜsᴇʀ ᴛᴏ ᴅᴇᴍᴏᴛᴇ_*");
    let isadmin = await isAdmin(message.jid, message.user, message.client);
    if (!isadmin) return await message.reply(" *_ɪ'ᴍ ɴᴏᴛ ᴀɴ ᴀᴅᴍɪɴ_*");
    let jid = parsedJid(match);
    await message.demote(jid);
    return await message.reply(`@${jid[0].split("@")[0]} *_ᴅᴇᴍᴏᴛᴇᴅ ғʀᴏᴍ ᴀᴅᴍɪɴ_*`, {
      mentions: jid,
    });
  }
);



command(
  {
    pattern: "mute",
    fromMe: true,
    desc: "mute group",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply(" *_ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs_*");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply(" *_ɪ'ᴍ ɴᴏᴛ ᴀᴅᴍɪɴ_*");
    await message.reply(" *_ᴍᴜᴛɪɴɢ_*");
    return await client.groupSettingUpdate(message.jid, "announcement");
  }
);



command(
  {
    pattern: "unmute",
    fromMe: true,
    desc: "unmute group",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply(" *_ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs_*");
    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply(" *I'm not admin*");
    await message.reply(" *_ᴜɴᴍᴜᴛɪɴɢ_*");
    return await client.groupSettingUpdate(message.jid, "not_announcement");
  }
);


command(
  {
    pattern: "amute",
    fromMe: true,
    desc: "auto mutes group",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply(" *_ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs_*");
    if (!match) return message.reply(" *_ᴇɴᴛᴇʀ ᴛɪᴍᴇ ᴛᴏ ᴍᴜᴛᴇ_*\nEg : *amute 20:10*");

    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply(" *_ɪ'ᴍ ɴᴏᴛ ᴀᴅᴍɪɴ_*");
    message.reply(` *Group will mute at ${match}*`);
    await saveSchedule(message.jid, match, async () => {
      await message.reply(" *_ᴍᴜᴛɪɴɢ_*");
      return await client.groupSettingUpdate(message.jid, "announcement");
    });
    return cron(match, async () => {
      await message.reply(" *Muting*");
      return await client.groupSettingUpdate(message.jid, "announcement");
    });
  }
);


command(
  {
    pattern: "aunmute",
    fromMe: true,
    desc: "auto unmutes group",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply(" *_ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs_*");
    if (!match)
      return message.reply(" *_ᴇɴᴛᴇʀ ᴛɪᴍᴇ ᴛᴏ ᴜɴᴍᴜᴛᴇ_*\nEg : *aunmute 20:10*");

    if (!isAdmin(message.jid, message.user, message.client))
      return await message.reply(" *ɪ'ᴍ ɴᴏᴛ ᴀᴅᴍɪɴ_*");
    message.reply(` *_ɢʀᴏᴜᴘ ᴡɪʟʟ ᴜɴᴍᴜᴛᴇ ᴀᴛ ${match}_*`);
    await saveSchedule(message.jid, match, async () => {
      await message.reply(" *_ᴀᴜᴛᴏ ᴜɴᴍᴜᴛɪɴɢ_* ");
      return await client.groupSettingUpdate(message.jid, " * _ɴᴏᴛ_ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ_*");
    });
    return cron(match, async () => {
      await message.reply(" *_ᴀᴜᴛᴏ ᴜɴᴍᴜᴛɪɴɢ_* ");
      return await client.groupSettingUpdate(message.jid, " *_ɴᴏᴛ_ᴀɴɴᴏᴜɴᴄᴇᴍᴇɴᴛ_*");
    });
  }
);


command(
  {
    pattern: "gjid",
    fromMe: true,
    desc: "gets jid of all group members",
    type: "group",
  },
  async (message, match, m, client) => {
    if (!message.isGroup)
      return await message.reply(" *_ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ɪs ғᴏʀ ɢʀᴏᴜᴘs_*");
    let { participants } = await client.groupMetadata(message.jid);
    let participant = participants.map((u) => u.id);
    let str = "╭──〔 *ɢʀᴏᴜᴘ ᴊɪᴅs* 〕\n";
    participant.forEach((result) => {
      str += `├ *${result}*\n`;
    });
    str += `╰──────────────`;
    message.reply(str);
  }
);


command(
  {
    pattern: "tagall ?(.*)",
    fromMe: true,
    desc: "mention all users in group",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return;
    const { participants } = await message.client.groupMetadata(message.jid);
    let teks = "";
    for (let mem of participants) {
      teks += ` @${mem.id.split("@")[0]}\n`;
    }
    message.sendMessage(teks.trim(), {
      mentions: participants.map((a) => a.id),
    });
  }
);



command(
  {
    pattern: "tag ?(.*)",
    fromMe: true,
    desc: "mention all users in group",
    type: "group",
  },
  async (message, match) => {
    if (!message.isGroup) return;
    const { participants } = await message.client.groupMetadata(message.jid);
    let teks = match;
    for (let mem of participants) {
      teks += ` @${mem.id.split("@")[0]}\n`;
    }
    message.sendMessage(teks.trim(), {
      mentions: participants.map((a) => a.id),
    });
  }
);
command(
  {
    pattern: "poll ?(.*)",
    fromMe: true,
    desc: "create poll",
    type: "group",
  },
  async (message, match) => {
       let {prefix} = message
    let [poll,opt] = match.split(";");
    if (match.split(";") < 2)
      return await message.reply(
        `${prefix}poll question;option1,option2,option3.....`
      );
    
    let options = [];

    for (let i of opt.split(',')) {
      options.push({ optionName: i });
    }
    return await message.client.relayMessage(
      message.jid,
      {
        pollCreationMessage: {
          name: poll,
          options,
          selectableOptionsCount: 0,
        },
      },
      {}
    );
  }
);



command(
  {
    on: "text",
    fromMe: false,
  },
  async (message, match) => {
    if (!message.isGroup) return;
    if (config.ANTILINK)
      if (isUrl(match)) {
        await message.reply(" *_ʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ❗_*");
        let botadmin = await isAdmin(message.jid, message.user, message.client);
        let senderadmin = await isAdmin(
          message.jid,
          message.participant,
          message.client
        );
        if (botadmin) {
          if (!senderadmin) {
            await message.reply(
              `;*_ᴄᴏᴍᴍᴇɴᴄɪɴɢ sᴘᴇᴄɪғɪᴇᴅ ᴀᴄᴛɪᴏɴ* :${config.ANTILINK_ACTION}_`
            );
            return await message[config.ANTILINK_ACTION]([message.participant]);
          }
        } else {
          return await message.reply(" *_ɪ'ᴍ ɴᴏᴛ ᴀᴍ ᴀᴅᴍɪɴ_*");
        }
      }
  }
);
