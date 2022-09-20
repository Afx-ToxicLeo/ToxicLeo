const Jsl = require('../lib/utils');
const Config = require('../config');
const { FancyRandom,jslbuffer } = require('../lib/misc');
const { MessageType } = require('@adiwajshing/baileys');
const { getString } = require('./lib/lang/lang');
const Lang = getString('_abu');

Jsl({pattern: 'assist ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
        var img = await jslbuffer('https://i.imgur.com/r9DvPpx.jpeg')
        var CMD_HELP = '';
        if (match[1] === '') {
            Jsl.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + Lang.EXAMPLE + ': ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  command.desc + ' \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  command.warn + '\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  command.desc + ' \n' + Lang.EXAMPLE + ': ' + command.usage + '\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  command.desc + ' \n' + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  command.usage + '\n' + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' +  command.desc + ' \n' + Lang.EXAMPLE + ': ' + command.usage + '\n' + Lang.WARN + ': ' + command.warn + '\n\n'
                    }
                }
            );
            var msg_cmd = FancyRandom(CMD_HELP,Config.SESSION)
           await message.sendMessage(CMD_HELP, {
      quoted: {
        key: {
          participant: "0@s.whatsapp.net",
          remoteJid: "status@broadcast",
        },
        message: {
          orderMessage: {
            itemCount: 123,
            itemCoun: 404,
            surface: 404,
            message: `© ᴀʙᴜ-ᴍᴅ`,
            orderTitle: "B",
            thumbnail: img,
            sellerJid: "0@s.whatsapp.net",
          },
        },
      },
    });
  }
);
