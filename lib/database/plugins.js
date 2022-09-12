const config = require('../../config');
const { DataTypes } = require('sequelize');

const PluginDB = config.DATABASE.define('Plugin', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

async function installPlugin(adres, file) {
    var Plugin = await PluginDB.findAll({
        where: {url: adres}
    });

    if (Plugin.length >= 1) {
        return await Plugin[0].update({ url: adres, name: file });
    } else {
        return await PluginDB.create({ url: adres, name: file });
    }
}

async function getPlugin(adres, file) {
    var Plugin = await PluginDB.findAll({
        where: {url: adres}
    });

    if (Plugin.length >= 1) {
        return false;
    } else {
        return Plugin[0].dataValues;
    }
}

module.exports = { PluginDB: PluginDB, installPlugin: installPlugin, getPlugin: getPlugin };
