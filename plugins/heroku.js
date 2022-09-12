const simpleGit = require('simple-git');
const git = simpleGit();
const { Jsl } = require('../lib');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({ token: config.HEROKU_API_KEY })

Jsl({pattern: 'update', fromMe: true, desc: "Updates bot", typr: 'heroku' }, (async (message, match) => {
    await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    var mss = '';
    if (commits.total === 0) {
        mss = "*Bot up to date!*"
        return await message.reply(mss);
    } else {
        var changelog = "_Pending updates:_\n\n";
        for (var i in commits.all){
        changelog += `${(parseInt(i)+1)}• *${commits.all[i].message}*\n`
    }
        mss = changelog;
    }
    return await message.reply(mss)   
}));
Jsl({pattern: 'update now', fromMe: true, type: 'heroku', desc: "Updates bot"}, (async (message, match) => {
    await git.fetch();
    var commits = await git.log(['main' + '..origin/' + 'main']);
    if (commits.total === 0) {
        return await message.reply("_Bot up to date_")

    } else {
        await message.reply("_Started update.._")

            try {
                var app = await heroku.get('/apps/' + config.HEROKU_APP_NAME)
            } catch {
                await message.reply("Heroku information wrong!")

                await new Promise(r => setTimeout(r, 1000));
            }
            git.fetch('upstream', 'main');
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + config.HEROKU_API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('heroku remote ekli'); }
            await git.push('heroku', 'main');

            await message.reply("_Successfully updated_")
           await message.reply("_Restarting_")
            }
}));

