/* # Exclusively from Shadow
 */

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

//list
const NEED_WORD = "*You Must Enter a Word*"

if (Config.WORKTYPE == 'private') {
  
  Asena.addCommand({pattern: 'sed ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=e228d999bd914b35bffb7546&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALL})

  }));
}

else if (Config.WORKTYPE == 'public') {

  Asena.addCommand({pattern: 'sed ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/ephoto1/wetglass?apikey=e228d999bd914b35bffb7546&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.ALL})

  }));

}
