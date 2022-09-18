const simpleGit = require('simple-git');
const git = simpleGit();
const { Jsl } = require('../lib');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({ token: config.HEROKU_API_KEY })
const baseURI = '/apps/' + config.HEROKU_APP_NAME

Jsl(
  {
    pattern: 'restart',
    fromMe: true,
    desc: 'Restart the bot',
    type: 'heroku',
  },
  async (message, match) => {
    await message.send(`_Restarting_`)
    await heroku.delete(baseURI + '/dynos').catch(async (error) => {
    await message.send(`HEROKU : ${error.body.message}`);})
  }
);

Jsl(
  {
    pattern: 'shutdown',
    fromMe: true,
    desc: 'Shutdown the bot.',
    type: 'heroku',
  },
  async (message, match) => {
    await heroku.get(baseURI + '/formation').then(async (formation) => {
    await message.send(`_Shuttind down._`)
    await heroku.patch(baseURI + '/formation/' + formation[0].id, { body: { quantity: 0 }, }) }).catch(async (error) => {
    await message.send(`HEROKU : ${error.body.message}`);})
  }
);

Jsl(
  {
    pattern: "update$",
    fromMe: true,
    desc: "Check new updates.",
    type: "heroku",
  },
  }, (async (message, match) => {
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
);

Jsl(
  {
    pattern: "update now$",
    fromMe: true,
    desc: "Update the bot.",
    type: "heroku",
  },
  async (message, match) => {
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
      "https://", "https://api:" + config.HEROKU_API_KEY + "@")            
  try {
      await git.addRemote('heroku', git_url);
  } catch {
      console.log('heroku remote ekli'); }
      await git.push('heroku', 'main');
      await message.reply("_Successfully updated_")
      await message.reply("_Restarting_")
      }
   }
);

