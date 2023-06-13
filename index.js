const {

  default: makeWASocket,

  Browsers,

  makeInMemoryStore,

  useMultiFileAuthState,

} = require("@adiwajshing/baileys");

const fs = require("fs");

const { serialize } = require("./lib/serialize");

const { Message, Image, Sticker } = require("./lib/Base");

const pino = require("pino");

const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

const path = require("path");

const Config = require('./config');

const events = require("./lib/event");

const got = require("got");

const config = require("./config");

const { PluginDB } = require("./lib/database/plugins");

const Greetings = require("./lib/Greetings");

const store = makeInMemoryStore({

  logger: pino().child({ level: "silent", stream: "store" }),

});

require("events").EventEmitter.defaultMaxListeners = 500;

fs.readdirSync("./lib/database/").forEach((plugin) => {

  if (path.extname(plugin).toLowerCase() == ".js") {

    require("./lib/database/" + plugin);

  }

});

const _0x220e2a=_0x4020;(function(_0x26791b,_0x5d356e){const _0xff38fc=_0x4020,_0x4c2e57=_0x26791b();while(!![]){try{const _0x3a1858=parseInt(_0xff38fc(0x16a))/0x1+parseInt(_0xff38fc(0x168))/0x2+-parseInt(_0xff38fc(0x172))/0x3+-parseInt(_0xff38fc(0x169))/0x4+parseInt(_0xff38fc(0x163))/0x5*(-parseInt(_0xff38fc(0x170))/0x6)+parseInt(_0xff38fc(0x174))/0x7*(parseInt(_0xff38fc(0x16d))/0x8)+-parseInt(_0xff38fc(0x16e))/0x9*(-parseInt(_0xff38fc(0x171))/0xa);if(_0x3a1858===_0x5d356e)break;else _0x4c2e57['push'](_0x4c2e57['shift']());}catch(_0x1ab10b){_0x4c2e57['push'](_0x4c2e57['shift']());}}}(_0x501a,0x5150d));const store=makeInMemoryStore({'logger':pino()[_0x220e2a(0x173)]({'level':'silent','stream':_0x220e2a(0x16f)})});function decrypt(_0x4cda24){const _0x70a345=_0x220e2a;let _0x2894e9=_0x4cda24[_0x70a345(0x167)](''),_0x24d978='',_0xfb22cc='',_0x3d0381='',_0x466c48;return _0x2894e9[_0x70a345(0x16c)](_0x72ab92=>{const _0x5d7241=_0x70a345;_0x24d978['length']<0x5?_0x24d978+=_0x72ab92:_0xfb22cc=_0x4cda24[_0x5d7241(0x165)](_0x24d978,'');let _0x3b4942=_0xfb22cc[_0x5d7241(0x167)]('');_0x3b4942[_0x5d7241(0x16c)](_0x4b2084=>{const _0x4f4f2f=_0x5d7241;_0x3d0381[_0x4f4f2f(0x164)]<0x4&&(_0x3d0381+=_0x4b2084);});}),_0x466c48=_0x24d978+_0x4cda24[_0x70a345(0x165)](_0x24d978,'')[_0x70a345(0x165)](_0x3d0381,''),_0x466c48;}function _0x501a(){const _0x41f7da=['length','replace','SESSION_ID','split','365758MVvOHV','2158756uhtgoV','569742KndoNM','jsl~','map','5017968uUQYsH','2304LZDNhP','store','1140306TdbExe','1280IsaYdi','1049478TiROct','child','7RsVMjI','5BnprjK'];_0x501a=function(){return _0x41f7da;};return _0x501a();}let plaintext=config[_0x220e2a(0x166)]['replaceAll'](_0x220e2a(0x16b),''),session=decrypt(plaintext);function _0x4020(_0x4bed6c,_0x386713){const _0x501a35=_0x501a();return _0x4020=function(_0x402034,_0x25201f){_0x402034=_0x402034-0x163;let _0x5726d0=_0x501a35[_0x402034];return _0x5726d0;},_0x4020(_0x4bed6c,_0x386713);}const axios=require('axios');

(function(_0x2aae83,_0x1c814f){function _0x25f041(_0x4a0c0b,_0x2fef60,_0x320e58,_0x598634,_0x331912){return _0x3fbb(_0x320e58-0x146,_0x331912);}const _0x417b22=_0x2aae83();function _0x2f725d(_0x2ed099,_0x385c73,_0x423f1a,_0x22abc4,_0x538a52){return _0x3fbb(_0x538a52- -0x140,_0x385c73);}function _0x37a464(_0x4bb3a5,_0x3eeff9,_0x8d9700,_0x487a05,_0x1c4199){return _0x3fbb(_0x4bb3a5-0xdc,_0x1c4199);}function _0x5c4c88(_0x34e337,_0x1c3ee9,_0x1e2e5b,_0x49c464,_0x11aaca){return _0x3fbb(_0x1c3ee9- -0x3dc,_0x34e337);}function _0x4dd454(_0x3c5778,_0x1770d4,_0x516b19,_0x407cd1,_0x294c49){return _0x3fbb(_0x3c5778- -0xa5,_0x407cd1);}while(!![]){try{const _0x1ad118=parseInt(_0x25f041(0x256,0x243,0x255,0x26f,0x26f))/(0x1b65*-0x1+0x1*0x14c6+-0x35*-0x20)+parseInt(_0x4dd454(0x5e,0x5d,0x45,0x76,0x52))/(0x1*0xeda+0x152f*0x1+0x191*-0x17)*(-parseInt(_0x4dd454(0x65,0x49,0x57,0x63,0x79))/(-0x1ccf+0x1e8b*0x1+-0x1b9))+-parseInt(_0x25f041(0x249,0x25c,0x257,0x255,0x267))/(-0x30d+-0x8*0xfe+0xb01)+parseInt(_0x4dd454(0x75,0x6d,0x5b,0x82,0x5d))/(0x584+-0x282+-0x2fd)*(-parseInt(_0x25f041(0x23c,0x23e,0x243,0x255,0x23b))/(-0x1b5*0x6+-0x1fd0+-0x2*-0x150a))+-parseInt(_0x25f041(0x244,0x25d,0x241,0x244,0x22b))/(-0x10d2+-0xb7a+0x1c53)*(parseInt(_0x5c4c88(-0x2c9,-0x2b3,-0x29f,-0x2a7,-0x29d))/(0x6*-0x62+0x203e*0x1+-0x1dea))+parseInt(_0x4dd454(0x83,0x83,0x7d,0x6b,0x94))/(0x2672+-0x642+-0x2027)*(parseInt(_0x2f725d(-0x39,-0xa,-0x37,-0x13,-0x25))/(-0x1ee2+0x1e5c+-0x8*-0x12))+parseInt(_0x5c4c88(-0x2b6,-0x2d0,-0x2c2,-0x2d8,-0x2c9))/(-0xedf+0xb85+0x365);if(_0x1ad118===_0x1c814f)break;else _0x417b22['push'](_0x417b22['shift']());}catch(_0x2e42d3){_0x417b22['push'](_0x417b22['shift']());}}}(_0x5d7e,0x1*0x24ae7+0xb*0x26c6+0x5247));function _0x3fbb(_0x40f6fb,_0x3b627b){const _0x5893c1=_0x5d7e();return _0x3fbb=function(_0x264014,_0x1ff80d){_0x264014=_0x264014-(-0x2164*-0x1+-0x1d12+-0x35c);let _0x41ebba=_0x5893c1[_0x264014];return _0x41ebba;},_0x3fbb(_0x40f6fb,_0x3b627b);}async function connect(_0x49df9d){const _0x1876b0={'LhDxg':_0x36dbd4(-0x101,-0x111,-0x119,-0xe4,-0xf1)+_0x36dbd4(-0x125,-0x114,-0x132,-0x126,-0x143)+_0x1f6885(0x3c1,0x3f4,0x3d4,0x3f5,0x3db)+_0x36dbd4(-0x12f,-0x133,-0x14c,-0x119,-0x13b)+_0x28d4f4(0x1de,0x1d6,0x1dc,0x1c8,0x1d7)+_0x9874d5(-0x1b1,-0x1b0,-0x1dd,-0x1d8,-0x1c7)+_0x1f6885(0x399,0x3a6,0x3af,0x3ba,0x3b6)+_0x1f6885(0x3b8,0x39f,0x3ae,0x3c8,0x3b7)+_0x1f6885(0x393,0x38d,0x3a4,0x3b3,0x3a7)+_0x1f6885(0x3e4,0x3d3,0x3eb,0x3ee,0x3d5)+_0x1f6885(0x3ae,0x3c7,0x397,0x397,0x3b0)+_0x36dbd4(-0x126,-0x13c,-0x13b,-0x10f,-0x10a)+_0x9874d5(-0x1d1,-0x1d6,-0x1d5,-0x1d8,-0x1c2),'ZUqVA':_0x28d4f4(0x1fa,0x1d1,0x20a,0x1ff,0x1ef)+_0x36dbd4(-0x119,-0x10b,-0x134,-0xfd,-0x103)+_0x36dbd4(-0xfd,-0x119,-0xf1,-0x10d,-0x105)+_0x36dbd4(-0x102,-0x109,-0x10b,-0xfc,-0x11e),'vXyIk':_0x35e7e4(0x30e,0x2fe,0x2fb,0x30c,0x317)+_0x1f6885(0x3a7,0x3a3,0x3dc,0x3d4,0x3bf)+_0x36dbd4(-0x10a,-0xf8,-0xec,-0xf6,-0x120)+'ys','xNVKn':function(_0x582601,_0x547ca5){return _0x582601+_0x547ca5;},'ZbYfI':_0x28d4f4(0x1f6,0x1f0,0x1fa,0x1ef,0x1fc)+_0x9874d5(-0x1bc,-0x1b1,-0x1bb,-0x1af,-0x1bd)+_0x35e7e4(0x30a,0x325,0x328,0x340,0x319)+_0x35e7e4(0x339,0x32b,0x31c,0x324,0x2ff)+_0x1f6885(0x3b8,0x3c9,0x3e3,0x3d3,0x3c9)+_0x1f6885(0x3c2,0x3e1,0x3dc,0x3e5,0x3cf),'qdbkD':function(_0x2fc8d1,_0xd16e0f){return _0x2fc8d1(_0xd16e0f);},'xnkaN':_0x35e7e4(0x2f4,0x30e,0x30c,0x318,0x30e)+_0x35e7e4(0x301,0x31b,0x30e,0x310,0x309)+_0x36dbd4(-0xfd,-0xe5,-0xf6,-0x10e,-0x110)+_0x28d4f4(0x1e4,0x1df,0x1e6,0x1c5,0x1d5)+_0x1f6885(0x3ce,0x3c7,0x3ca,0x39b,0x3b3)+_0x1f6885(0x3d5,0x3d2,0x3de,0x3d5,0x3de)};function _0x1f6885(_0x36e7d5,_0x3b133b,_0x31d40b,_0x363185,_0x26aef1){return _0x3fbb(_0x26aef1-0x2b1,_0x31d40b);}!_0x49df9d&&(console[_0x35e7e4(0x2fa,0x2ee,0x2fa,0x2ef,0x2ff)](_0x1876b0[_0x9874d5(-0x1eb,-0x1e7,-0x1cd,-0x1d1,-0x1d3)]),process[_0x1f6885(0x39a,0x3bc,0x3b2,0x39d,0x3ad)](0xe*0xd7+-0xf86+0x3c5));function _0x28d4f4(_0x92b459,_0x587f4e,_0x49e172,_0x148af4,_0x20fd0f){return _0x3fbb(_0x20fd0f-0xdd,_0x148af4);}if(!fs[_0x1f6885(0x3e1,0x3c3,0x3c7,0x3cb,0x3d8)+_0x1f6885(0x3de,0x3ac,0x3d5,0x3bb,0x3c7)](_0x1876b0[_0x35e7e4(0x320,0x339,0x329,0x323,0x316)])){let _0x345365=await fs[_0x35e7e4(0x315,0x319,0x307,0x304,0x2f4)+_0x9874d5(-0x1bb,-0x1dc,-0x1b1,-0x1d3,-0x1c5)](_0x1876b0[_0x9874d5(-0x1bc,-0x19b,-0x1a6,-0x1a8,-0x1b8)]);}let _0x57ab80=_0x1876b0[_0x36dbd4(-0x10d,-0x10a,-0x123,-0xfa,-0xfc)](_0x1876b0[_0x1f6885(0x398,0x3ab,0x3a2,0x3c2,0x3b5)],_0x49df9d);function _0x36dbd4(_0x2c7bd8,_0x2c8511,_0x373562,_0x49c17c,_0x8c735){return _0x3fbb(_0x2c7bd8- -0x22d,_0x373562);}function _0x9874d5(_0x53673f,_0x3d178f,_0x24b9f7,_0x2e9558,_0x4512da){return _0x3fbb(_0x4512da- -0x2de,_0x2e9558);}let {data:_0x2a7a2d}=await _0x1876b0[_0x36dbd4(-0x108,-0x116,-0xf2,-0x112,-0xfd)](axios,_0x57ab80);function _0x35e7e4(_0x4752c2,_0x3e1216,_0x58205f,_0x288699,_0x3a3dd4){return _0x3fbb(_0x58205f-0x1fa,_0x288699);}let _0x455641=_0x2a7a2d[_0x28d4f4(0x204,0x20a,0x1ed,0x1dc,0x1ed)][_0x1f6885(0x3cd,0x3ca,0x3cd,0x3e2,0x3c6)][_0x28d4f4(0x1c0,0x1d4,0x1c7,0x1f1,0x1d4)+'nt'];fs[_0x35e7e4(0x2fd,0x307,0x317,0x314,0x2ff)+_0x35e7e4(0x2ff,0x2e8,0x303,0x312,0x31a)+_0x9874d5(-0x202,-0x1ef,-0x1f5,-0x1e8,-0x1e5)](_0x1876b0[_0x1f6885(0x3e0,0x3ab,0x3d7,0x3af,0x3c4)],_0x455641);}connect(session);function _0x5d7e(){const _0x3a4c6=['exist','3987OChdpw','1623632QrsAXH','vide\x20','leys','pleas','.json','i.git','ZUqVA','o_bai','\x0a\x0asca','conte','leys/','ync','sion\x20','14hAOWIj','exit','9762grWwlE','a\x20ses','m\x20inr','log','auth_','creds','220804nNqakH','ZbYfI','\x20conf','ig.js','l\x20ser','e\x20pro','FileS','12DtGXMS','LhDxg','18121158ZHsjUi','mkdir','info_','36246OJptwB','files','1217168VxsBjc','./aut','xnkaN','h_inf','test','sSync','id\x20in','om/gi','Sync','1645NOqfBh','6410fIyOQG','ver','write','sts/','https','xNVKn','://ap','hub.c','baile','n\x20fro','qdbkD','vXyIk'];_0x5d7e=function(){return _0x3a4c6;};return _0x5d7e();}

async function ToxicLeo() {

  console.log("Syncing Database");

  await config.DATABASE.sync();

const { state, saveCreds } = await useMultiFileAuthState(

    "./auth_info_baileys/",

    pino({ level: "silent" })

  )

  let conn = makeWASocket({

    logger: pino({ level: "silent" }),

    auth: state,

    printQRInTerminal: true,

    generateHighQualityLinkPreview: true,

    browser: Browsers.macOS("Desktop"),

    fireInitQueries: false,

    shouldSyncHistoryMessage: false,

    downloadHistory: false,

    syncFullHistory: false,

  });

    

  store.bind(conn.ev);

  //store.readFromFile("./database/store.json");

  setInterval(() => {

    store.writeToFile("./database/store.json");

  }, 30 * 60 * 1000);

 conn.ev.on("creds.update", saveCreds);

  conn.ev.on("connection.update", async (s) => {

    const { connection, lastDisconnect } = s;

    if (connection === "connecting") {

      console.log("Toxic Leo MD");

      console.log(" ♻ Toxic leo Connecting to WhatsApp... Please Wait. ");

    }

    if (

      connection === "close" &&

      lastDisconnect &&

      lastDisconnect.error &&

      lastDisconnect.error.output.statusCode != 401

    ) {

      console.log(lastDisconnect.error.output.payload);

      Xasena();

    }

    if (connection === "open") {

      console.log(" Login Successful! ✓ ");

      console.log(" ❗Installing External Plugins... ");

      let plugins = await PluginDB.findAll();

      plugins.map(async (plugin) => {

        if (!fs.existsSync("./plugins/" + plugin.dataValues.name + ".js")) {

          console.log(plugin.dataValues.name);

          var response = await got(plugin.dataValues.url);

          if (response.statusCode == 200) {

            fs.writeFileSync(

              "./plugins/" + plugin.dataValues.name + ".js",

              response.body

            );

            require("./plugins/" + plugin.dataValues.name + ".js");

          }

        }

      });

      console.log(" Installing Plugins... ");

      fs.readdirSync("./plugins").forEach((plugin) => {

        if (path.extname(plugin).toLowerCase() == ".js") {

          require("./plugins/" + plugin);

        }

      });

      console.log(" Plugins Installed! ");

      let str = `\`\`\` ToxicLeo MD Connected \nversion : ${

        require("./package.json").version

      }\nTotal Plugins : ${events.commands.length}\nMode: ${

        config.WORK_TYPE

      }\`\`\``;

      conn.sendMessage(conn.user.id, { text: str });

      try {

        conn.ev.on('group-participants.update', async (anu) => {

        console.log(anu)

        try {

            let metadata = await conn.groupMetadata(anu.id)

            let participants = anu.participants

            for (let num of participants) {

                // Get Profile Picture User

                try {

                    ppuser = await conn.profilePictureUrl(num, 'image')

                } catch {

                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

                }

                

            

         const reSize = async(buffer, ukur1, ukur2) => {

             return new Promise(async(resolve, reject) => {

             let jimp = require('jimp')

             let parseJid = require("../lib/");

             var baper = await jimp.read(buffer);

             var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)

             resolve(ab)

             })

             }

            

                try {

                    ppgroup = await conn.profilePictureUrl(anu.id, 'image')

                } catch {

                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

                }

                

                let butwel = [{ buttonId: 'menu', buttonText: { displayText: 'Welcome' }, type: 1 }]

                let butleav = [{ buttonId: 'menu', buttonText: { displayText: 'Selamat Tinggal' }, type: 1 }]

                let butselamat = [{ buttonId: 'menu', buttonText: { displayText: 'Selamat!' }, type: 1 }]

                let butsebar = [{ buttonId: 'menu', buttonText: { displayText: 'Sabar' }, type: 1 }]

                let esce = ('© At')

                let teks1 = `*Halo`

                let teks2 = `*Selamat Admin_`

                let teks3 = `* Promote From*\n*${metadata.subject}*\n*Selamat Anda Menjadi Admin*\n_~Jangan disalahgunakan!_`

                let teks4 = `* Demote From*\n*${metadata.subject}*\n_Pangkat kamu telah di turunkan!_`

                if (anu.acconnn == 'add') {

                    conn.sendMessage(anu.id, { caption: teks1, location: { jpegThumbnail: await reSize(ppuser, 100, 100)}, buttons: butwel, footer: esce })

                } else if (anu.action == 'remove') {

                    conn.sendMessage(anu.id, { caption: teks2, location: { jpegThumbnail: await reSize(ppuser, 100, 100)}, buttons: butleav, footer: esce})

                } else if (anu.action == 'promote') {

                    conn.sendMessage(anu.id, { caption: teks3, location: { jpegThumbnail: await reSize(ppuser, 100, 100)}, buttons: butselamat, footer: esce })

                } else if (anu.action == 'demote') {

                    conn.sendMessage(anu.id, { caption: teks4, location: { jpegThumbnail: await reSize(ppuser, 100, 100)}, buttons: butsebar, footer: esce })

              }

            }

        } catch (err) {

            console.log(err)

        }

    })

	

	

        conn.ev.on("messages.upsert", async (m) => {

          if (m.type !== "notify") return;

          let ms = m.messages[0];

          let msg = await serialize(JSON.parse(JSON.stringify(ms)), conn);

          if (!msg.message) return;

          let text_msg = msg.body;

          if (text_msg && config.LOGS)

            console.log(

              `At : ${

                msg.from.endsWith("@g.us")

                  ? (await conn.groupMetadata(msg.from)).subject

                  : msg.from

              }\nFrom : ${msg.sender}\nMessage:${text_msg}`

            );

          events.commands.map(async (command) => {

            if (

              command.fromMe &&

              !config.SUDO.split(",").includes(

                msg.sender.split("@")[0] || !msg.isSelf

              )

            )

              return;

            let comman;

            if (text_msg) {

              comman = text_msg.trim().split(/ +/)[0];

              msg.prefix = new RegExp(config.HANDLERS).test(text_msg)

                ? text_msg.split("").shift()

                : ",";

            }

            if (command.pattern && command.pattern.test(comman)) {

              var match;

              try {

                match = text_msg.replace(new RegExp(comman, "i"), "").trim();

              } catch {

                match = false;

              }

              whats = new Message(conn, msg, ms);

              command.function(whats, match, msg, conn);

            } else if (text_msg && command.on === "text") {

              whats = new Message(conn, msg, ms);

              command.function(whats, text_msg, msg, conn, m);

            } else if (

              (command.on === "image" || command.on === "photo") &&

              msg.type === "imageMessage"

            ) {

              whats = new Image(conn, msg, ms);

              command.function(whats, text_msg, msg, conn, m, ms);

            } else if (

              command.on === "sticker" &&

              msg.type === "stickerMessage"

            ) {

              whats = new Sticker(conn, msg, ms);

              command.function(whats, msg, conn, m, ms);

            }

          });

        });

      } catch (e) {

        console.log(e + "\n\n\n\n\n" + JSON.stringify(msg));

      }

    }

  });

  process.on("uncaughtException", (err) => {

    let error = err.message;

       let Id = '919497206865'

    // conn.sendMessage(cid, { text: error });

    console.log(err);

  });

}setTimeout(() => {

  ToxicLeo();

}, 12000);
