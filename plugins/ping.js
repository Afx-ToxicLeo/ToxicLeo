const { FancyRandom, getListFromCommand, getBuffer } = require("abu-bot");
const { Module, commands } = require('../events.js')
const { MODE } = require('../config');
const config = require('../config');
let w = MODE == 'public' ? false : true

Module({
  pattern: 'ping',
  fromMe: w,
  use: 'utility',
  desc: 'Measures ping'
}, (async (abu, match) => {
  const start = new Date().getTime()
  await abu.client.sendabu(abu.jid, {
      text: '*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*'
  })
  const end = new Date().getTime()
  await abu.client.sendabu(abu.jid, {
      text: '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*'
  }, {
      quoted: abu.data
  })
}));
