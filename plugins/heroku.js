const {
    Module
} = require('../main');
const {
    isAdmin,
    delAntilink,
    getAntilink,
    setAntilink
} = require('./misc/misc');
const {
    getBuffer
} = require('abu-bot');
const {
    chatBot
} = require('./misc/misc');
const Config = require('../config');
const Heroku = require('heroku-client');
const got = require('got');
const {
    getString
} = require('./misc/lang');
const Lang = getString('heroku');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});

function secondsToDhms(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    
    var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
    }
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;

Module({
    pattern: 'restart$',
    fromMe: true,
    dontAddCommandList: true,
    use: 'owner'
}, (async (message, match) => {

    await message.sendReply(Lang.RESTART_MSG)
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.sendMessage(error.message)
    });
}));

Module({
    pattern: 'shutdown$',
    fromMe: true,
    dontAddCommandList: true,
    use: 'owner'
}, (async (message, match) => {

    await heroku.get(baseURI + '/formation').then(async (formation) => {
        forID = formation[0].id;
        await message.sendReply(Lang.SHUTDOWN_MSG)
        await heroku.patch(baseURI + '/formation/' + forID, {
            body: {
                quantity: 0
            }
        });
    }).catch(async (err) => {
        await message.sendMessage(error.message)
    });
}));

Module({
    pattern: 'dyno$',
    fromMe: true,
    dontAddCommandList: true,
    use: 'owner'
}, (async (message, match) => {

    heroku.get('/account').then(async (account) => {
        url = "https://api.heroku.com/accounts/" + account.id + "/actions/get-quota"
        headers = {
            "User-Agent": "Chrome/80.0.3987.149 Mobile Safari/537.36",
            "Authorization": "Bearer " + Config.HEROKU.API_KEY,
            "Accept": "application/vnd.heroku+json; version=3.account-quotas",
        }
        await got(url, {
            headers: headers
        }).then(async (res) => {
            const resp = JSON.parse(res.body);
            total_quota = Math.floor(resp.account_quota);
            quota_used = Math.floor(resp.quota_used);
            percentage = Math.round((quota_used / total_quota) * 100);
            remaining = total_quota - quota_used;
            await message.sendReply(
                "Total: ```{}```\n\n".format(secondsToDhms(total_quota)) +
                "Used: ```{}```\n".format(secondsToDhms(quota_used)) +
                "Percent: ```{}```\n\n".format(percentage) +
                "Remaining: ```{}```\n".format(secondsToDhms(remaining)))

        }).catch(async (err) => {
            await message.sendMessage(error.message)
        });
    });
}));

Module({
    pattern: 'setvar ?(.*)',
    fromMe: true,
    desc: Lang.SETVAR_DESC,
    use: 'owner'
}, (async (message, match) => {

    if (match[1] === '' || !match[1].includes(":")) return await message.sendReply(Lang.KEY_VAL_MISSING)

    if ((varKey = match[1].split(':')[0]) && (varValue = match[1].replace(match[1].split(':')[0] + ":", ""))) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                [varKey]: varValue
            }
        }).then(async (app) => {
            await message.sendReply(Lang.SET_SUCCESS.format(varKey, varValue))
        });
    } else {
        await message.sendReply(Lang.INVALID)
    }
}));


Module({
    pattern: 'delvar ?(.*)',
    fromMe: true,
    desc: Lang.DELVAR_DESC,
    use: 'owner'
}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(Lang.NOT_FOUND)
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        key = match[1].trim();
        for (vr in vars) {
            if (key == vr) {
                await heroku.patch(baseURI + '/config-vars', {
                    body: {
                        [key]: null
                    }
                });
                return await message.sendReply(Lang.DEL_SUCCESS.format(key))
            }
        }
        await await message.sendReply(Lang.NOT_FOUND)
    }).catch(async (error) => {
        await message.sendReply(error.message)
    });

}));
Module({
    pattern: 'getvar ?(.*)',
    fromMe: true,
    desc: Lang.GETVAR_DESC,
    use: 'owner'
}, (async (message, match) => {

    if (match[1] === '') return await message.sendReply(Lang.NOT_FOUND)
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        for (vr in vars) {
            if (match[1].trim() == vr) return await message.sendReply(vars[vr])
        }
        await await message.sendReply(Lang.NOT_FOUND)
    }).catch(async (error) => {
        await await message.sendMessage(error.message)
    });
}));
Module({
        pattern: "allvar",
        fromMe: true,
        desc: Lang.ALLVAR_DESC,
        use: 'owner'
    },
    async (message, match) => {
        let msg = Lang.ALL_VARS + "\n\n\n```"
        await heroku
            .get(baseURI + "/config-vars")
            .then(async (keys) => {
                for (let key in keys) {
                    msg += `${key} : ${keys[key]}\n\n`
                }
                return await await message.sendReply(msg += '```')
            })
            .catch(async (error) => {
                await message.sendMessage(error.message)
            })
    }
);
Module({
    pattern: 'mode',
    fromMe: true,
    desc: "Switches mode",
    use: 'config'
}, (async (message, match) => {
    var buttons = [{
        urlButton: {
            displayText: 'WIKI',
            url: 'https://github.com/Afx-Abu/Abu-MD/wiki'
        }
    },
    {
        quickReplyButton: {
            displayText: 'PUBLIC',
            id: 'public '+message.myjid
        }
    }, {
        quickReplyButton: {
            displayText: 'PRIVATE',
            id: 'private '+message.myjid
        }  
    }]
    await message.sendImageTemplate(await getBuffer("https://mma.prnewswire.com/media/701943/Mode_Logo.jpg"),"Working mode configuration","Current mode: "+Config.MODE,buttons);
    }));
Module({
    pattern: 'chatbot',
    fromMe: true,
    desc: "Activates chatbot",
    use: 'config'
}, (async (message, match) => {
    var buttons = [{
        urlButton: {
            displayText: 'WIKI',
            url: 'https://github.com/Afx-Abu/Abu-MD/wiki'
        }
    },
    {
        quickReplyButton: {
            displayText: 'ENABLE',
            id: 'cbe '+message.myjid
        }
    }, {
        quickReplyButton: {
            displayText: 'DISABLE',
            id: 'cbd '+message.myjid
        }  
    }]
    await message.sendImageTemplate(await getBuffer("https://kriyatec.com/wp-content/uploads/2020/05/chatbot2.jpeg"),"🤖 Chatbot configuration","Current status: "+Config.CHATBOT,buttons);
    }));
Module({
    pattern: 'antilink',
    fromMe: true,
    desc: "Activates antilink",
    use: 'config'
}, (async (message, match) => {
    if (!(await isAdmin(message))) return await message.sendReply("*I'm not an admin!*")
    var db = await getAntilink();
    const jids = []
    db.map(data => {
        jids.push(data.jid)
    });
    var buttons = [{
        urlButton: {
            displayText: 'WIKI',
            url: 'https://github.com/Afx-Abu/Abu-MD/wiki'
        }
    },
    {
        quickReplyButton: {
            displayText: 'ENABLE',
            id: 'ante '+message.myjid
        }
    }, {
        quickReplyButton: {
            displayText: 'DISABLE',
            id: 'antd '+message.myjid
        }  
    }]
    var status = jids.includes(message.jid) ? 'on' : 'off';
    await message.sendImageTemplate(await getBuffer("https://thumbs.dreamstime.com/b/settings-gears-icon-crystal-blue-banner-background-isolated-172063768.jpg"),"🔗 Antilink configuration of "+(await message.client.groupMetadata(message.jid)).subject,"Current status: "+status,buttons);
    }));
Module({
    on: 'button',
    fromMe: true
}, (async (message, match) => {
    if (message.button && message.button.startsWith("restart") && message.button.includes(message.myjid)) {
        await message.sendReply("_Restarting_")
        await heroku.delete(baseURI + '/dynos').catch(async (error) => {
        await message.sendMessage(error.message)
    });
    }
    if (message.button && message.button.startsWith("public") && message.button.includes(message.myjid)) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['MODE']: 'public'
            }
        });
        await message.sendReply("*Switched mode to public ✅*")
        return await message.sendReply("*Restarting*")
    }
    if (message.button && message.button.startsWith("private") && message.button.includes(message.myjid)) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['MODE']: 'private'
            }
        });
        await message.sendReply("*Switched mode to private ✅*")
        return await message.sendReply("*Restarting*")
    }
    if (message.button && message.button.startsWith("cbe") && message.button.includes(message.myjid)) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['CHATBOT']: 'on'
            }
        });
      return await message.sendReply("*Chatbot activated ✅*")
    }
    if (message.button && message.button.startsWith("cbd") && message.button.includes(message.myjid)) {
        await heroku.patch(baseURI + '/config-vars', {
            body: {
                ['CHATBOT']: 'off'
            }
        });
      return await message.sendReply("*Chatbot deactivated ❗*")
    }
    if (message.button && message.button.startsWith("ante") && message.button.includes(message.myjid)) {
        await setAntilink(message.jid) 
        return await message.sendReply("*Antilink has been enabled in this group ✅*")
    }
    if (message.button && message.button.startsWith("antd") && message.button.includes(message.myjid)) {
        await delAntilink(message.jid) 
        return await message.sendReply("*Antilink has been disabled in this group ❗*")
    }
}));
Module({
    on: 'text',
    fromMe: false
}, (async (message, match) => {
    if (Config.CHATBOT === 'on') {
        await chatBot(message, Config.BOT_NAME)
    }
}));
Module({
    on: 'text',
    fromMe: false
}, (async (message, match) => {
    if (/\bhttps?:\/\/\S+/gi.test(message.message)){
    var db = await getAntilink();
    const jids = []
    db.map(data => {
        jids.push(data.jid)
    });
    if (jids.includes(message.jid)) {
    var allowed = process.env.ALLOWED_LINKS || "gist,instagram,youtu";
    var checker = [];
    allowed.split(",").map(e=> checker.push(message.message.includes(e)))
    if (!checker.includes(true)){
    if (!(await isAdmin(message,message.sender))) {
    await message.sendReply("*Links aren't allowed!*");
    await message.client.groupParticipantsUpdate(message.jid, [message.sender], "remove")
    }
    }
    }
}
}));
