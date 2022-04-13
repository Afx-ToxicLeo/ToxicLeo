const Abu = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

let abu = Config.WORKTYPE == 'public' ? false : true
Abu.addCommand({pattern: 'url ?(.*)', fromMe: Abu}, async (message, match) => {

    await message.sendMessage('Use this site to get URL 👇:\n\n https://img-upload-five.vercel.app/')

        });
