const {
    isAdmin,
    isFake,
    delAntifake,
    getAntifake,
    setAntifake,
    parseWelcome
} = require('./misc/misc');
const {
    setAutoMute,
    setAutounMute,
    delAutounMute,
    delAutoMute
} = require('./misc/scheduler');
const greeting = require('./sql/greeting');
const {
    Module
} = require('../main')
const {
    ALLOWED
} = require('../config');
function tConvert(time) {
  time = time.toString ().match (/^([01]\d|2[0-3])( )([0-5]\d)(:[0-5]\d)?$/) || [time];
 if (time.length > 1) { 
    time = time.slice (1); 
    time[5] = +time[0] < 12 ? ' AM' : ' PM';
    time[0] = +time[0] % 12 || 12; 
  }
  return time.join(''). replace(" ",":");
}
Module({
    pattern: "automute ?(.*)",
    fromMe: true,
    warn: "This works according to IST (Indian standard time)",
    use: 'group'
}, async (message, match) => {
if (!match[1]) return await message.sendReply("*Wrong format!*\n*.automute 22 00 (For 10 PM)*\n*.automute 06 00 (For 6 AM)*\n*.automute off*");
if (match[1]==="off") {
await delAutoMute(message.jid);
return await message.sendReply("*Automute has been disabled in this group ❗*");       
}  
var mregex = /[0-2][0-9] [0-5][0-9]/
if (mregex.test(match[1]) === false) return await message.sendReply("*Wrong format!\n.automute 22 00 (For 10 PM)\n.automute 06 00 (For 6 AM)*");
var admin = await isAdmin(message)
if (!admin) return await message.sendReply("*I'm not admin*");
await setAutoMute(message.jid,match[1]);
return await message.sendReply(`*Group will automatically mute at ${tConvert(match[1])}. Please restart after setting is complete*`)
});
Module({
    pattern: "autounmute ?(.*)",
    fromMe: true,
    warn: "This works according to IST (Indian standard time)",
    use: 'group'
}, async (message, match) => {
if (!match[1]) return await message.sendReply("*Wrong format!*\n*.autounmute 22 00 (For 10 PM)*\n*.autounmute 06 00 (For 6 AM)*\n*.autounmute off*");
if (match[1]==="off") {
await delAutounMute(message.jid);
return await message.sendReply("*Auto Unmute has been disabled in this group ❗*");       
}
var mregex = /[0-2][0-9] [0-5][0-9]/
if (mregex.test(match[1]) === false) return await message.sendReply("*Wrong format!\n.autounmute 22 00 (For 10 PM)\n.autounmute 06 00 (For 6 AM)*");
var admin = await isAdmin(message)
if (!admin) return await message.sendReply("*I'm not admin*");
await setAutounMute(message.jid,match[1]);
return await message.sendReply(`*Group will automatically open at ${tConvert(match[1])}. Please restart after setting is complete*`)
});
var {
    getAutoMute,
    getAutounMute
} = require('./misc/scheduler');
Module({
    pattern: "getmute ?(.*)",
    fromMe: true,
    use: 'group'
}, async (message, match) => {
var mute = await getAutoMute(message.jid,match[1]);
var unmute = await getAutounMute(message.jid,match[1]);
var msg = '';
for (e in mute){
  let temp = unmute.find(element=> element.chat === mute[e].chat)
  if(temp.time) {
    mute[e].unmute = temp.time;
  }
  msg += `*${Math.floor(parseInt(e)+1)}. Group:* ${(await message.client.groupMetadata(mute[e].chat)).subject}
*➥ Mute:* ${tConvert(mute[e].time)}
*➥ Unmute:* ${tConvert(mute[e].unmute)}` + "\n\n";
};
message.sendReply("*Scheduled Mutes/Unmutes*\n\n"+msg)
});
Module({
    pattern: "antifake",
    fromMe: true,
    use: 'group'
}, async (message, match) => {
var admin = await isAdmin(message)
if (!admin) return await message.sendReply("*I'm not admin*");
var {
        subject,
        owner
    } = await message.client.groupMetadata(message.jid)
    var myid = message.client.user.id.split(":")[0]
    owner = owner || myid + "@s.whatsapp.net"
    const templateButtons = [{
            index: 1,
            urlButton: {
                displayText: 'WIKI',
                url: 'https://github.com/souravkl11/raganork-md/wiki/Docs'
            }
        },
        {
            index: 2,
            quickReplyButton: {
                displayText: 'ENABLE',
                id: 'fake_on' + myid
            }
        },
        {
            index: 3,
            quickReplyButton: {
                displayText: 'DISABLE',
                id: 'fake_off' + myid
            }
        },
        {
            index: 4,
            quickReplyButton: {
                displayText: 'ALLOWED PREFIXES',
                id: 'fake_get' + myid
            }
        },
    ]

    const templateMessage = {
        text: "*Antifake menu of* " + subject,
        footer: '',
        templateButtons: templateButtons
    }
    await message.client.sendMessage(message.jid, templateMessage)
})
Module({
    on: "button",
    fromMe: true
}, async (message, match) => {
    if (message.button && message.button.startsWith("fake_on") && message.button.includes(message.client.user.id.split(":")[0])) {
        await setAntifake(message.jid);
        return await message.sendMessage("Antifake enabled ✅")
    }
    if (message.button && message.button.startsWith("fake_off") && message.button.includes(message.client.user.id.split(":")[0])) {
        await delAntifake(message.jid);
        return await message.sendMessage("Antifake disabled ✅")
    }
    if (message.button && message.button.startsWith("fake_get") && message.button.includes(message.client.user.id.split(":")[0])) {
        return await message.sendMessage("Allowed prefixes: " + ALLOWED)
    }
})
Module({
    on: "group_update",
    fromMe: false
}, async (message, match) => {
    var db = await getAntifake();
    const jids = []
    db.map(data => {
        jids.push(data.jid)
    });
    if (message.update === 27 && jids.includes(message.jid)) {
        var allowed = ALLOWED.split(",");
        if (isFake(message.participant[0], allowed)) {
            var admin = await isAdmin(message);
            if (!admin) return;
            await message.client.sendMessage(message.jid, {
                text: "*Country code not allowed* @" + message.participant[0].split("@")[0],
                mentions: [message.participant[0]]
            });
            return await message.client.groupParticipantsUpdate(message.jid, [message.participant[0]], "remove")
        }
    }
    await parseWelcome(message,greeting)
})
