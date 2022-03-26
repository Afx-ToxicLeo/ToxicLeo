// # BUFFER - TEST

const Shadow = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let wk = Config.WORKTYPE == 'public' ? false : true

Shadow.addCommand({pattern: 'test ?(.*)', fromMe: wk, dontAddCommandList: true }, (async (message, match) => {
const ShadowBuffer = await axios.get(`https://i.imgur.com/3oiVAaC.jpeg`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(ShadowBuffer.data), MessageType.image, {mimetype: Mimetype.jpg })

}));

// ©2021 BY SHADOW
