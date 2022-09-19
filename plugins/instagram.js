const {
    Jsl
} = require('../lib/');
const {
    Mimetype
} = require('@adiwajshing/baileys');
const fs = require('fs');
const got = require("got");
const axios = require('axios');
const {
    getPost,
    getStalk,
    getStory,
    jslbuffer
} = require('../lib/misc');
var need = "*_Need instagram link!_*";
var downloading = "_*Downloading*_";
var need_acc = "*_Need an instagram username!_*";
var fail = "*_Download failed! Check your link and try again_*";
var need_acc_s = "_Need an instagram username or link!_";
Jsl({
    pattern: 'insta ?(.*)',
    fromMe: true,
    desc: 'Instagram post downloader',
    usage: 'insta link or reply to a link',
    use: 'download'
}, (async (msg, query) => {
     var q = query[1] || msg.reply_message?.text
     if (q && (q.startsWith('l') || q.includes('youtu'))) return;
    if (!q) return await message.reply("*Need instagram link*")
    if (q.includes("stories")) return await message.reply("*Use .story command!*")
    if (q && !q.includes('instagram.com')) return await message.sendMessage(msg.jid, {
        text: need
    }, {
        quoted: msg.data
    })
    var getid = /(?:https?:\/\/)?(?:www\.)?(?:instagram\.com(?:\/.+?)?\/(p|reel|tv)\/)([\w-]+)(?:\/)?(\?.*)?$/
    var url = getid.exec(q)
    if (url != null) {
        try { var res = await downloadGram(url[0]) } catch { return await message.reply("_Broken link! Try another one._") }
        if (res == false) return await message.reply("*Download failed*");
        var quoted = msg.reply_message ? msg.quoted : msg.data
        for (var i in res) {
        await message.sendMessage(msg.jid,{[res[i].includes("mp4")?'video':'image']:{url:res[i]}},{quoted})
        };
    }
}));
