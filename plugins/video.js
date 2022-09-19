const {
    getString
} = require('../lib/lang/lang');
const Lang = getString('scrapers');
const {
    Jsl
} = require('../lib/');
const {
    getVideo,
    ytdlServer,
    getBuffer
} = require('..lib/misc');
const { downloadYT } = require('./lib/yt');

Jsl({
    pattern: 'video ?(.*)',
    fromMe: w,
    desc: Lang.VIDEO_DESC,
    use: 'downlod'
}, async (message, match,m) => {
    var s1 = !match[1].includes('youtu') ? message.reply_message.message : match[1]
    if (s1 && s1.includes("instagram")) return;
    if (!s1) return await message.reply("*"+Lang.NEED_VIDEO+"*");
    if (!s1.includes('youtu')) return await message.reply("*"+Lang.NEED_VIDEO+"*");
    const getID = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
    var qq = getID.exec(s1)
        var {
            url,
            thumbnail,
            title
        } = await downloadYT(qq[1]);
        return await message.sendMessage(message.jid, {
            video: {
                url: url
            },
            mimetype: "video/mp4",
            caption: title,
            thumbnail: await getBuffer(thumbnail)
        });
    });
