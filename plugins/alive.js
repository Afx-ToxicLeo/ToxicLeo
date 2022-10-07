const {
  Module,
  isPublic
} = require('../lib/')
const {
  ALIVE
} = require('../config');
const config = require('../config');
const {
  parseAlive
} = require('../lib/misc/utils');
Module({
  pattern: 'alive',
  fromMe: isPublic,
  desc: 'Is bot alive?'
}, (async (message, match) => {
  await parseAlive(message, ALIVE)
}))
