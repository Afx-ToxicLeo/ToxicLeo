const simpleGit = require('simple-git');
const git = simpleGit();
const {Module} = require('../main');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');
const exec = require('child_process').exec;
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
const { getBuffer } = require('alexa-bot');
Module({
    pattern: 'update',
    fromMe: true,
    desc: "Updates bot",
    use: 'owner'
}, (async (message, match) => {
     await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    var mss = '';
    if (commits.total === 0) {
    mss = "*No pending updates!*";
    var img = "https://i.imgur.com/MOrBAVx.jpeg"
    var buttons = [{
        urlButton: {
            displayText: 'WIKI',
            url: 'https://github.com/Afx-Abu/Abu-MD/wiki'
        }
    }];
    } else {
        var changelog = "_Pending updates:_\n\n";
        commits['all'].map(
            (commit) => {
                changelog += `• *${commit.message}* _[${commit.date.substring(0, 10)}]_ \n`
            }
        );
        mss = changelog;
       var img = "https://i.imgur.com/MOrBAVx.jpeg"
       var buttons = [{
        urlButton: {
            displayText: 'WIKI',
            url: 'https://github.com/Afx-Abu/Abu-MD/wiki'
        }
    },
    {
        quickReplyButton: {
            displayText: 'START UPDATE',
            id: 'upd '+message.myjid
        }
    }];
    }
    await message.sendImageTemplate(await getBuffer(img),mss,"Feel free to update!",buttons);
    }));
Module({
    on: 'button',
    fromMe: true
}, (async (message, match) => {
    if (message.button && message.button.startsWith("upd") && message.button.includes(message.myjid)) {
     await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    if (commits.total === 0) {
        return await message.client.sendMessage(message.jid, { text:"_Bot up to date_"})

    } else {
        await message.sendReply("_Build started ⏫_")

            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(message.jid, { text:"*Heroku app name/api key wrong ❗*"})

                await new Promise(r => setTimeout(r, 1000));
            }
            git.fetch('upstream', 'main');
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch {console.log('Deploy error catched. Retrying...')}
            try { await git.push('heroku', 'main'); } catch(e){ 
            if (e.message.includes("concurrent")) return await message.sendReply("Your account has reached in-parallel build limit! Please wait for the other app to finish its deploy ❗"); 
            }
            await message.sendReply("_Finished build! Restarting.._")
         }
    }
    }));
Module({pattern: 'updt',use: 'owner', fromMe: true,dontAddCommandList: true, desc: "Updates bot"}, (async (message, match) => {
    await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    if (commits.total === 0) {
        return await message.client.sendMessage(message.jid, { text:"_Bot up to date_"})

    } else {
        await message.client.sendMessage(message.jid, { text:"_Started update.._"})

            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                await message.client.sendMessage(message.jid, { text:"Heroku information wrong!"})

                await new Promise(r => setTimeout(r, 1000));
            }
            git.fetch('upstream', 'main');
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', 'main');

            await message.client.sendMessage(message.jid, { text:"_Successfully updated_"})
           await message.client.sendMessage(message.jid, { text:"_Restarting_"})
            }
}));
