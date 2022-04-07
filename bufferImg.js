// # BUFFER - TEST

const Abu = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let wk = Config.WORKTYPE == 'public' ? false : true

Abu.addCommand({pattern: 'test ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
const AbuBuffer = await axios.get(config.THUMBNAIL, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(AbuBuffer.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

// ©2021 BY SHADOW
