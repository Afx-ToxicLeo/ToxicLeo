const {
    Module
} = require('../main');
const Config = require('../config');
const axios = require('axios');
const fs = require('fs');
const Db = require('./sql/plugin');
let {
    getString
} = require('./misc/lang');
let Lang = getString('external_plugin');

Module({
    pattern: 'install ?(.*)',
    fromMe: true,
    use: 'owner',
    desc: Lang.INSTALL_DESC
}, (async (message, match) => {
    match = match[1]!==""?match[1]:message.reply_message.text
    if (!match || !/\bhttps?:\/\/\S+/gi.test(match)) return await message.sendMessage(Lang.NEED_URL)
    let links = match.match(/\bhttps?:\/\/\S+/gi);
    for (let link of links){
    try {
        var url = new URL(link);
    } catch {
        return await message.sendMessage(Lang.INVALID_URL);
    }
    if (url.host === 'gist.github.com') {
        url.host = 'gist.githubusercontent.com';
        url = url.toString() + '/raw'
    } else {
        url = url.toString()
    }
    try {
        var response = await axios(url+"?timestamp="+new Date());
    } catch {
        return await message.sendMessage(Lang.INVALID_URL)
    }
    let plugin_name = /pattern: ["'](.*)["'],/g.exec(response.data)
    plugin_name = plugin_name[1].split(" ")[0]
    fs.writeFileSync('./plugins/' + plugin_name + '.js', response.data);
    try {
        require('./' + plugin_name);
    } catch (e) {
        fs.unlinkSync('/Jsl/Abu/plugins/' + plugin_name + '.js')
        return await message.sendReply(Lang.INVALID_PLUGIN + e);
    }
    await Db.installPlugin(url, plugin_name);
    await message.sendMessage(Lang.INSTALLED.format(plugin_name));
}
}));

Module({
    pattern: 'plugin ?(.*)',
    fromMe: true,
    use: 'owner',
    desc: Lang.PLUGIN_DESC
}, (async (message, match) => {
    var plugins = await Db.PluginDB.findAll();
    if (match[1] !== '') {
        var plugin = plugins.filter(_plugin => _plugin.dataValues.name == match[1])
        try {
            await message.sendReply(plugin.dataValues.name + ": " + plugin.dataValues.url);
        } catch {
            return await message.sendReply(Lang.PLUGIN_NOT_FOUND)
        }
        return;
    }
    var msg = Lang.INSTALLED_PLUGINS;
    var plugins = await Db.PluginDB.findAll();
    if (plugins.length < 1) {
        return await message.sendMessage(Lang.NO_PLUGIN);
    } else {
        plugins.map(
            (plugin) => {
                msg += '*' + plugin.dataValues.name + '* : ' + plugin.dataValues.url + '\n\n';
            }
        );
        return await message.sendReply(msg);
    }
}));

Module({
    pattern: 'remove(?: |$)(.*)',
    fromMe: true,
    use: 'owner',
    desc: Lang.REMOVE_DESC
}, (async (message, match) => {
    if (match[1] === '') return await message.sendMessage(Lang.NEED_PLUGIN);
    var plugin = await Db.PluginDB.findAll({
        where: {
            name: match[1]
        }
    });
    if (plugin.length < 1) {
        return await message.sendMessage(Lang.NO_PLUGIN);
    } else {
        await plugin[0].destroy();
        delete require.cache[require.resolve('./' + match[1] + '.js')]
        fs.unlinkSync('./plugins/' + match[1] + '.js');
    const buttons = [{buttonId: 'restart '+message.myid, buttonText: {displayText: 'Restart'}, type: 1}]
          
          const buttonMessage = {
              text: Lang.DELETED.format(match[1]),
              footer: '_Restart to make effect_',
              buttons: buttons,
              headerType: 1
          }
        await message.client.sendMessage(message.jid,buttonMessage);
    }
}));
