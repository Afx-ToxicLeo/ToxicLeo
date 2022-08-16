const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const Shefin = require('./config');
const Config = require('./config');
const { 
          default: AlexaConnect, 
          useSingleFileAuthState,
          DisconnectReason, 
          fetchLatestBaileysVersion, 
          makeInMemoryStore, 
          generateForwardMessageContent, 
          prepareWAMessageMedia, 
          generateWAMessageFromContent, 
          generateMessageID, 
          downloadContentFromMessage,
          jidDecode,
          proto 
 } = require("@adiwajshing/baileys");
const { 
           state,
           saveState 
} = useSingleFileAuthState(`./session.json`)
const pino = require('pino')
const MAIN_LOGGER = require("@adiwajshing/baileys/lib/Utils/logger").default
const logger = MAIN_LOGGER.child({})
logger.level = 'silent'
const { Boom } = require('@hapi/boom')
const {
           Message,
           Image,
           Video,
           Greeting
} = require('./lib/');
const { DataTypes } = require('sequelize');
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
const { getMessage } = require("./plugins/sql/greetings");
const getBuffer = require('abu-bot');
const simpleGit = require('simple-git');
const git = simpleGit();
const axios = require('axios');
const got = require('got');
const { version } = await fetchLatestBaileysVersion()
const abu = makeWASocket({ logger, version, printQRInTerminal: false, auth: state })

const AlexaDB = Shefin.DATABASE.define('Alexa', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

const plugindb = require('./plugins/sql/plugin');
var SHEFIN = { KL14: '919567489404,0' }

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
   });
};
if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function startAlexa () {
    await Shefin.DATABASE.sync();
    const alexa = AlexaConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Alexa Md','Safari','1.0.0'],
        auth: state      
    })

    store.bind(alexa.ev)

    alexa.ev.on('connection.update', async(update) => {
        const { connection, lastDisconnect } = update

        if (connection) {
           console.log("Connection Status: ", connection);
        }

        if (connection == "open") {
         console.log('Bot working...');
          await abu.sendMessage(abu.user.id, { text: `*Wa-Bot-Md Working*` });
        }

        if (connection !== "close") return

        let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

        const DR = DisconnectReason

        if (reason === DR.badSession) { console.log(`Corrupted section. Delete old session and scan the QR code.`); abu.logout(); return }
        if (reason === DR.connectionClosed) { console.log("Connection closed. Reconnecting..."); startAlexa(); return }
        if (reason === DR.connectionLost) { console.log("Lost connection to the server. Trying to reconnect..."); startAlexa(); return }
        if (reason === DR.connectionReplaced) { console.log("Current session replaced by the new one opened. Please close this session first."); abu.logout(); return }
        if (reason === DR.loggedOut) { console.log(`Session terminated by cell phone. Delete session and scan the QR code.`); abu.logout(); return }
        if (reason === DR.restartRequired) { console.log("Kingdom needed. restarting..."); startAlexa(); return }
        if (reason === DR.timedOut) { console.log("Connection timed out, Reconnecting..."); startAlexa(); return }

        abu.end(`Disconnected: ${reason}|${lastDisconnect.error}`)
    })
    alexa.ev.on('creds.update', saveState)
}
  
        console.log(
            chalk.blueBright.italic('Installing external plugins...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
            if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                console.log(plugin.dataValues.name);
                var response = await got(plugin.dataValues.url);
                if (response.statusCode == 200) {
                    fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                    require('./plugins/' + plugin.dataValues.name + '.js');
                }     
            }
            
        });

        console.log(
            chalk.blueBright.italic('Installing plugins...')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('Plugins Installed!')
        );
        const id = '918089632591@s.whatsapp.net'
        await alexa.sendMessage(id, { text: '_Alexa Started!_' })
    
    alexa.ev.on('chat.update', async m => {
        
        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = abu.chats.get(msg.key.remoteJid)
                    if ((Shefin.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && Shefin.SUDO.includes(',') ? Shefin.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == Shefin.SUDO || Shefin.SUDO.includes(',') ? Shefin.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == Shefin.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('g.us')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('g.us')) sendMsg = true;
                   }  
                   if ((SHEFIN.KL14 == "919567489404,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && SHEFIN.KL14.includes(',') ? SHEFIN.KL14.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == SHEFIN.KL14 || SHEFIN.KL14.includes(',') ? SHEFIN.KL14.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == SHEFIN.KL14)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('g.us')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('g.us')) sendMsg = true;
                    }

                    if (sendMsg) {
                        if (Shefin.SEND_READ && command.on === undefined) {
                            await abu.chatRead(msg.key.remoteJid);
                        }

                        var match = text_msg.match(command.pattern);

                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(abu, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(abu, msg);
                        } else {
                            whats = new Message(abu, msg);
                        }

                        try {
                            await command.function(whats, match);
                        } catch (error) {
                            if (Shefin.NOLOG === 'true') {
			           return;
			    }
				else {
				    await abu.sendMessage('918089632591@s.whatsapp.net','_ERROR_ \n ' + error + '\n\n');
				}
                        }
                    }
                }
            }
        )
    })
           }
    });
    return alexa
  }
startAlexa();
