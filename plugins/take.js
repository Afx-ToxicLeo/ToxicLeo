let {
    saveMessage
} = require('./misc/saveMessage');
const {
    sticker,
    addExif
} = require('./misc/misc');
let {
    Module
} = require('../main');
let {
    TAKE_KEY,
    STICKER_DATA,
    MODE,
    HEROKU,
    AUDIO_DATA,
    BOT_INFO
} = require('../config');
let {
    addInfo,
    getBuffer,
    stickercrop,
    webp2mp4
} = require('alexa-bot');
let a = MODE == 'public' ? false : true;
let ffmpeg = require('fluent-ffmpeg');
let fs = require('fs');
const h = require('heroku-client');
const he = new h({
    token: HEROKU.API_KEY
});
let ur = '/apps/' + HEROKU.APP_NAME;
Module({
    pattern: 'take ?(.*)',
    fromMe: a,
    use: 'edit',
    desc: 'Changes sticker/audio pack & author name. Title, artist, thumbnail etc.'
}, (async (m, match) => {
    if (!m.reply_message.data.quotedMessage) return await m.sendMessage('_Reply to an audio or a sticker_')
    var audiomsg = m.reply_message.audio;
    var stickermsg = m.reply_message.sticker;
    var q = await saveMessage(m.reply_message);
    if (stickermsg) {
        if (match[1]!=="") {
        var exif = {
            author: match[1].includes(";")?match[1].split(";")[1]:"",
            packname: match[1].includes(";")?match[1].split(";")[0]:match[1],
            categories: STICKER_DATA.split(";")[2] || "😂",
            android: "https://github.com/Afx-Abu/Abu-MD/",
            ios: "https://github.com/Afx-Abu/Abu-MD/"
        } }
        else {
            var exif = {
                author: STICKER_DATA.split(";")[1] || "",
                packname: STICKER_DATA.split(";")[0] || "",
                categories: STICKER_DATA.split(";")[2] || "😂",
                android: "https://github.com/Afx-Abu/Abu-MD/",
                ios: "https://github.com/Afx-Abu/Abu-MD/"
            }
        }
        return await m.client.sendMessage(m.jid,{sticker: fs.readFileSync(await addExif(q,exif))},{quoted:m.quoted})
    }
    if (!stickermsg && audiomsg) {
                let inf = match[1] !== '' ? match[1] : AUDIO_DATA
                var spl = inf.split(';')
                var image = spl[2]?await getBuffer(spl[2]): BOT_INFO.split(";")[3]
                var res = await addInfo(q,spl[0],spl[1]?spl[1]:AUDIO_DATA.split(";")[1], 'Abu Engine', image)
                await m.client.sendMessage(m.jid, {
                    audio: res,
                    mimetype: 'audio/mp4',
                }, {
                    quoted: m.quoted,
                    ptt: false
                });
    }
    if (!audiomsg && !stickermsg) return await m.client.sendMessage(m.jid, {
        text: '_Reply to an audio or a sticker_'
    }, {
        quoted: m.data
    })
}));
Module({
    pattern: 'mp4 ?(.*)',
    fromMe: a,
    desc: 'Converts animated sticker to video'
}, (async (m, t) => {
    if (m.reply_message.sticker) {
        var q = await saveMessage(m.reply_message);
        try {
            var result = await webp2mp4(q)
        } catch {
            return await m.sendReply("*Failed*")
        }
        await m.client.sendMessage(
            m.jid,
            {
            video: {
            url: result
            }
        }, {quoted:m.quoted});
    } else return await m.sendReply('_Reply to an animated sticker!_');
}));
