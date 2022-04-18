/* Copyright (C)  2020  chunkindepadayali

 */

const Raashii = require('../events');

const config = require('../config');

const Heroku = require('heroku-client');

const heroku = new Heroku({

  token: config.HEROKU.API_KEY

});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;

var rashi_desc = ''

var OFF = ''

var ON = ''

if (config.LANG == 'EN') {

  rashi_desc = 'change Auto bio mode'

  OFF = '𝐀𝐮𝐭𝐨 𝐛𝐢𝐨 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐬𝐡𝐮𝐭𝐝𝐨𝐰𝐧𝐞𝐝 \n          𝐩𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭 𝐟𝐞𝐰 𝐦𝐢𝐧𝐮𝐭𝐞 🧚‍♀️'

  ON = '𝐀𝐮𝐭𝐨 𝐛𝐢𝐨 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐨𝐩𝐞𝐧𝐞𝐝 \n          𝐩𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭 𝐟𝐞𝐰 𝐦𝐢𝐧𝐮𝐭𝐞 🧚‍♀️'

}

if (config.LANG == 'ML') {

  rashi_desc = 'Auto bio mode മാറ്റാൻ'

  OFF = '*AUTO BIO OFF ആക്കി💌*'

  ON = '*AUTO BIO ON ആക്കി💌*'

}

Raashii.addCommand({ pattern: 'autobio ?(.*)', fromMe: true, desc: rashi_desc, usage: '.autobio on / off' }, (async (message, match) => {

  if (match[1] == 'off') {

    await heroku.patch(baseURI + '/config-vars', {

      body: {

                        ['AUTO_BİO']: 'false'

      }

    });

    await message.sendMessage(OFF)

  } else if (match[1] == 'on') {

    await heroku.patch(baseURI + '/config-vars', {

      body: {

                        ['AUTO_BİO']: 'true'

      }

    });

    await message.sendMessage(ON)

  }

}));
