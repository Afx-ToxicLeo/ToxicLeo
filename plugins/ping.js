const { Module } = require('../lib')
Module({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Jsl, abu) => {
        var inital = new Date().getTime();
        await abu.reply('_```Testing Bot Speed```_');
        var final = new Date().getTime();
        return await abu.reply('*Response in' + (final - inital) + ' ms*');
    }
);
