const { FancyRandom, getListFromCommand, getBuffer } = require("abu-bot");
const { Module, commands } = require('../main')
const { MODE } = require('../config');
const config = require('../config');
let w = MODE == 'public' ? false : true

Module({
  pattern: 'ping',
  fromMe: w,
  use: 'utility',
  desc: 'Measures ping'
}, (async (message, match) => {
  const start = new Date().getTime()
  await message.client.sendMessage(message.jid, {
      text: '*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*'
  })
  const end = new Date().getTime()
  await message.client.sendMessage(message.jid, {
      text: '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*'
  }, {
      quoted: message.data
  })
}));
