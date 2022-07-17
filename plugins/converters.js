const {
    Module 
} = require('../main');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {
    getBuffer
} = require('abu-bot');
const Config = require('../config');
const {
    MODE,
    STICKER_DATA
} = require('../config');
const {
    getString
} = require('./misc/lang');
const {
    bass,
    sticker,
    addExif
} = require('./misc/misc');
const Lang = getString('converters');
let w = MODE == 'public' ? false : true
Module({
    pattern: 'sticker ?(.*)',
    use: 'edit',
    fromMe: w,
    desc: Lang.STICKER_DESC
}, (async (message, match) => {
    if (message.reply_message === false) return await message.sendMessage(Lang.STICKER_NEED_REPLY)
    var savedFile = await message.reply_message.download();
    var exif = {
        author: STICKER_DATA.split(";")[1] || "",
        packname: message.senderName,
        categories: STICKER_DATA.split(";")[2] || "😂",
        android: "https://github.com/Afx-Abu/Abu-MD/",
        ios: "https://github.com/Afx-Abu/Abu-MD/"
    }
    if (message.reply_message.image === true) {
        return await message.client.sendMessage(message.jid,{sticker: fs.readFileSync(await addExif(await sticker(savedFile),exif))},{quoted: message.quoted})
     } else {
        return await message.client.sendMessage(message.jid,{sticker:fs.readFileSync(await addExif(await sticker(savedFile,'video'),exif))},{quoted: message.quoted})
    }
}));
Module({
    pattern: 'mp3 ?(.*)',
    fromMe: w,
    use: 'edit',
    desc: Lang.MP3_DESC
}, (async (message, match) => {
    if (message.reply_message === false) return await message.sendReply(Lang.MP3_NEED_REPLY)
    var savedFile = await message.reply_message.download();
    ffmpeg(savedFile)
        .save('./temp/tomp3.mp3')
        .on('end', async () => {
            await message.client.sendMessage(message.jid, {
                audio: fs.readFileSync('./temp/tomp3.mp3'),
                mimetype: 'audio/mp4',
                ptt: false
            }, {
                quoted: message.quoted
            })
        });
}));
Module({
    pattern: 'bass ?(.*)',
    fromMe: w,
    use: 'edit',
    desc: Lang.BASS_DESC
}, (async (message, match) => {
    if (message.reply_message === false) return await message.sendReply(Lang.BASS_NEED_REPLY)
    var savedFile = await message.reply_message.download();
    bass(savedFile, match[1], async function(audio) {
        await message.client.sendMessage(message.jid, {
            audio: audio,
            mimetype: 'audio/mp4',
            ptt: false
        }, {
            quoted: message.data
        })
    });
}));
Module({
    pattern: 'photo ?(.*)',
    fromMe: w,
    use: 'edit',
    desc: Lang.PHOTO_DESC
}, (async (message, match) => {
    if (message.reply_message === false) return await message.sendMessage(Lang.PHOTO_NEED_REPLY)
        var savedFile = await message.reply_message.download();
        ffmpeg(savedFile)
            .fromFormat('webp_pipe')
            .save('output.png')
            .on('end', async () => {
                await message.sendReply(fs.readFileSync('output.png'), 'image');
            });

}));
Module({
    pattern: 'attp ?(.*)',
    fromMe: w,
    use: 'utility',
    desc: "Text to animated sticker"
}, (async (message, match) => {
    if (match[1] == '') return await message.sendMessage("*Need text*")
    try { var result = await getBuffer("https://api.xteam.xyz/attp?file&text="+encodeURI(match[1]))
    return await message.sendReply(result,'sticker');
    } catch {var result = await getBuffer("https://raganork-api.herokuapp.com/api/attp?text="+encodeURI(match[1] +"&apikey=with_love_Afx-Abu"))} 
    fs.writeFile("attp.mp4",result,async (e)=>{
        var exif = {
            author: STICKER_DATA.split(";")[1] || "",
            packname: message.senderName,
            categories: STICKER_DATA.split(";")[2] || "😂",
            android: "https://github.com/Afx-Abu/Abu-MD/",
            ios: "https://github.com/Afx-Abu/Abu-MD/"
        }
        await message.sendMessage(fs.readFileSync(await addExif(await sticker("attp.mp4",'video'),exif)),'sticker')
    })
}));
