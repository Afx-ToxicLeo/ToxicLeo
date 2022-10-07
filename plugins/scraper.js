const googleTTS = require('google-translate-tts');
const {
    getString
} = require('../lib/misc/lang');
const {
    getJson,bot, isPublic
} = require('../lib/');
const gis = require('async-g-i-s');
const axios = require('axios');
const fs = require('fs');
const Lang = getString('scrapers');
const translate = require('@vitalets/google-translate-api');
const { fromBuffer } = require('file-type')
const {
    getVideo,
    ytdlServer,
    jslbuffer
} = require('abu-bot');
const LanguageDetect = require('languagedetect');
const { downloadYT } = require('../lib/misc/yt');
const lngDetector = new LanguageDetect();
async function extractGoogleImage(url){
var result = (await axios(url)).data
return result.match(/(?:href=['"])([:/.A-z?<_&\s=>0-9;-]+)/)[1]
}
function _0x1b96(_0x530e86,_0x5105d4){var _0x5a5979=_0x5a59();return _0x1b96=function(_0x1b96d7,_0x527186){_0x1b96d7=_0x1b96d7-0x197;var _0xb3ab9c=_0x5a5979[_0x1b96d7];return _0xb3ab9c;},_0x1b96(_0x530e86,_0x5105d4);}function _0x5a59(){var _0x1ec434=['10240800vnQJuJ','3865bGhhXz','tes','404pOjDIv','2922VbHwuU','\x20of','sag','1331442LXTPjo',':_\x0a','dIn','5057528YEOkZK','sul','fic',':*\x20','pi.','pos','\x20re','pin','dex','tof','dat','Pos','e.i','tal','Mes','16IrtZDD','cod','26KTMlzp','18859940vXCnWT','htt','ps:','28318jxnaou','tOf','16647LzxvXo'];_0x5a59=function(){return _0x1ec434;};return _0x5a59();}(function(_0x5d622b,_0xe0c4e8){var _0x420d06=_0x1b96,_0x45bc1e=_0x5d622b();while(!![]){try{var _0x4f4128=-parseInt(_0x420d06(0x1ae))/0x1*(-parseInt(_0x420d06(0x1b2))/0x2)+-parseInt(_0x420d06(0x1b4))/0x3*(parseInt(_0x420d06(0x1b8))/0x4)+-parseInt(_0x420d06(0x1b6))/0x5*(-parseInt(_0x420d06(0x197))/0x6)+parseInt(_0x420d06(0x19d))/0x7+parseInt(_0x420d06(0x1ac))/0x8*(parseInt(_0x420d06(0x19a))/0x9)+parseInt(_0x420d06(0x1b5))/0xa+-parseInt(_0x420d06(0x1af))/0xb;if(_0x4f4128===_0xe0c4e8)break;else _0x45bc1e['push'](_0x45bc1e['shift']());}catch(_0x5dd87d){_0x45bc1e['push'](_0x45bc1e['shift']());}}}(_0x5a59,0x7d038));async function zipCode(_0x214e96){var _0x122f5c=_0x1b96,_0x459f50=_0x122f5c(0x1a2)+_0x122f5c(0x1a6)+'fic'+'e';if(/(\d+)/[_0x122f5c(0x1b7)+'t'](_0x214e96))_0x459f50=_0x122f5c(0x1a4)+_0x122f5c(0x1ad)+'e';const _0x55e498=(await axios(_0x122f5c(0x1b0)+_0x122f5c(0x1b1)+'//a'+_0x122f5c(0x1a1)+_0x122f5c(0x1a2)+_0x122f5c(0x1aa)+_0x122f5c(0x1a4)+_0x122f5c(0x1ad)+_0x122f5c(0x1a9)+'n/'+_0x459f50+'/'+_0x214e96))[_0x122f5c(0x1a7)+'a'];var _0x572934=_0x55e498[0x0][_0x122f5c(0x1ab)+_0x122f5c(0x199)+'e']+'\x0a';if(_0x55e498[0x0][_0x122f5c(0x1a8)+_0x122f5c(0x1b3)+_0x122f5c(0x19f)+'e']===null)return'_No'+_0x122f5c(0x1a3)+_0x122f5c(0x19e)+'ts\x20'+'fou'+'nd_';for(var _0x1b7b8a of _0x55e498[0x0][_0x122f5c(0x1a8)+'tOf'+_0x122f5c(0x19f)+'e']){var _0x15533c=Object['key'+'s'](_0x1b7b8a);_0x572934+='\x0a_P'+'ost'+_0x122f5c(0x198)+_0x122f5c(0x19f)+'e\x20'+(_0x55e498[0x0][_0x122f5c(0x1a8)+_0x122f5c(0x1b3)+'fic'+'e']['fin'+_0x122f5c(0x19c)+_0x122f5c(0x1a5)](_0x467a75=>_0x467a75===_0x1b7b8a)+0x1)+(_0x122f5c(0x19b)+'\x0a');for(var _0x57657e of _0x15533c){_0x572934+='*'+_0x57657e+(_0x122f5c(0x1a0)+'_')+_0x1b7b8a[_0x57657e]+'_\x0a';}}return _0x572934;}
bot({
    pattern: 'trt ?(.*)',
    fromMe: isPublic,
    usage: Lang.TRANSLATE_USAGE,
    desc: Lang.TRANSLATE_DESC,
    type: 'utility'
}, async (message, match) => {
    if (!message.reply_message) return await message.reply(Lang.NEED_REPLY)
    var from = match[1].split(" ")[0] || ''
    var to = match[1].split(" ")[1] || match[1]
    translate(message.reply_message.message, {
        from: from,
        to: to
    }).then(async (res) => {
        if ("text" in res) {
            await message.reply(res.text);
        }
    })
});
bot({
    pattern: 'tts ?(.*)',
    fromMe: isPublic,
    desc: Lang.TTS_DESC,
    type: 'utility'
}, async (message, match) => {
    var query = match[1] || message.reply_message.text
    if (!query) return await message.reply(Lang.TTS_NEED_REPLY);
    query = query.replace("tts","")
    var lng = 'en';
    if (/[^\x00-\x7F]+/.test(query)) lng = 'ml';
    let
        LANG = lng,
        ttsMessage = query,
        SPEED = 1.0
    if (langMatch = query.match("\\{([a-z]{2})\\}")) {
        LANG = langMatch[1]
        ttsMessage = ttsMessage.replace(langMatch[0], "")
    }
    if (speedMatch = query.match("\\{([0].[0-9]+)\\}")) {
        SPEED = parseFloat(speedMatch[1])
        ttsMessage = ttsMessage.replace(speedMatch[0], "")
    }
    try {
        var buffer = await googleTTS.synthesize({
            text: ttsMessage,
            voice: LANG
        });
    } catch {
        return await message.reply("_"+Lang.TTS_ERROR+"_")
    }
    await message.client.sendMessage(message.jid, {
        audio: buffer,
        mimetype: 'audio/mp4',
        ptt: false
    }, {
        quoted: message.data
    });
});
bot({
    pattern: 'image ?(.*)',
    fromMe: isPublic,
    desc: Lang.IMG_DESC,
    type: 'search'
}, (async (message, match) => {
    if (!match[1]) return await message.reply(Lang.NEED_WORD);
    var count = parseInt(match[1].split(",")[1]) || 5
    var query = match[1].split(",")[0] || match[1];
    const results = await gis(query);
        await message.reply(Lang.IMG.format(results.splice(0, count).length, query))
        for (var i = 0; i < (results.length < count ? results.length : count); i++) {
         try { var buff = await jslbuffer(results[i].url); } catch { var buff = await jslbuffer("https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png") }
         await message.send(buff, 'image');
        }
}));
bot({
    pattern: 'zipcode ?(.*)',
    fromMe: isPublic,
    desc: "Searchs for pincode/postoffice in India",
    type: 'search',
    usage: '.zipcode Kozhikode or .zipcode 673015'
}, async (message, match) => {
    if (!match[1]) return await message.reply("_Need a post office/pincode_\n_Ex: .zipcode Kozhikode_\n_.zipcode 673015_");
    await message.reply(await zipCode(match[1]))
});
bot({
    pattern: 'upload ?(.*)',
    fromMe: isPublic,
    desc: "Downloads & uploads media from raw URL",
    type: 'download'
}, (async (message, match) => {
    if (!match[1] && !message.reply_message.text) return await message.reply("_Need raw media url!_");
    match = match[1] ? match[1] : message.reply_message.text
    match = match.match(/\bhttps?:\/\/\S+/gi)[0]
    var quoted = message.reply_message ? message.quoted : message.data;
    if (match.includes("images.app.goo")) match = await extractGoogleImage(match)
    let file = await jslbuffer(match)
    let {mime} = await fromBuffer(file)
    await message.client.sendMessage(message.jid,{document:file,mimetype:mime,fileName:"Content from "+match},{quoted});
}));
bot({
    pattern: 'doc ?(.*)',
    fromMe: isPublic,
    desc: "Message to document",
    type: 'utility'
}, (async (message, match) => {
    if (!message.reply_message) return await message.reply("_Need a file!_");
    match = match[1] ? match[1] : "file"
    let file = fs.readFileSync(await message.reply_message.download())
    let {mime} = await fromBuffer(file)
    await message.client.sendMessage(message.jid,{document:file,mimetype:mime,fileName:match},{quoted: message.quoted});
}));
bot({
    pattern: 'hackernews ?(.*)',
    fromMe: isPublic,
    desc: "Hacker news articles",
    type: 'utility'
}, (async (message, match) => {
    let json = await getJson("https://raganork-network.vercel.app/api/news/hackernews")
    var msg = "*Hacker news*\n\n";
    for (let news of json){
    msg+= `${"```"+news.title+"```"}\n*Score:* _${news.score}_\n*Published:* _${news.time}_\n*Link:* _${news.url}_\n\n`
    }
    await message.client.sendMessage(message.jid,{image:{url:"https://jayclotype.com/wp-content/uploads/2019/06/hacker_news-1000x525-1.jpg"},caption:msg},{quoted: message.data});
}));
bot({
    pattern: 'video ?(.*)',
    fromMe: isPublic,
    desc: Lang.VIDEO_DESC,
    type: 'download'
}, async (message, match) => {
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
        return await message.client.sendMessage(message.jid, {
            video: {
                url: url
            },
            mimetype: "video/mp4",
            caption: title,
            thumbnail: await jslbuffer(thumbnail)
        },{quoted:message.data});
    });

bot({
    pattern: 'mediafire ?(.*)',
    fromMe: isPublic,
    desc: "Mediafire Download Link",
    type: 'utility'
}, async (message, match) => {
    if (!match[1]) return await message.reply("*Need url*");
    var {link,title,size} = (await axios("https://raganork-network.vercel.app/api/mediafire?url="+match[1])).data
    var mediaFire = [{
        urlButton: {
            displayText: 'Download',
            url: link
        }
    }]
   var header = "_File:_ "+title+"\n _Size:_ "+size+"\n _Click this button to download_"
return await message.sendImageTemplate(await jslbuffer("https://play-lh.googletypercontent.com/Br7DFOmd9GCUmXdyTnPVqNj_klusX0OEx6MrElu8Avl2KJ7wbsS7dBdci293o7vF4fk"),header,"Mediafire Downloader",mediaFire)
});
bot({
    pattern: 'ss ?(.*)',
    fromMe: isPublic,
    desc: "Web Screenshot",
    type: 'utility'
}, async (message, match) => {
    var url = match[1] || message.reply_message.text
    if (!url || !/\bhttps?:\/\/\S+/gi.test(url)) return await message.reply("*Need url*");
    await message.send("*Taking screenshot...*");
    return await message.reply(await jslbuffer("https://shot.screenshotapi.net/screenshot?&url="+url.match(/\bhttps?:\/\/\S+/gi)[0]+"&fresh=true&output=image&file_type=png&wait_for_event=load"),'image')
});
});
    bot({
        pattern: 'detectlang$',
        fromMe: isPublic,
        desc: Lang.DLANG_DESC,
        type: 'utility'
    }, async (message, match) => {
    
    if (!message.reply_message) return await message.send(Lang.NEED_REPLY)
    const msg = message.reply_message.text
    var ldet = lngDetector.detect(msg)
    async function upperfirstLetter(letter) {
        return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
    }
    var cls1 = await upperfirstLetter(ldet[0][0])
    var cls2 = ldet[0][1].toString()
    var cls3 = await upperfirstLetter(ldet[1][0])
    var cls4 = ldet[1][1].toString()
    var cls5 = await upperfirstLetter(ldet[2][0])
    var cls6 = ldet[2][1].toString()
    var cls7 = await upperfirstLetter(ldet[3][0])
    var cls8 = ldet[3][1].toString()
    const res_1 = '*' + Lang.DLANG_INPUT + '* ' + '_' + msg + '_ \n'
    const res_2 = '*' + Lang.DLANG_CLOSER + '* ' + '_' + cls1 + '_\n*' + Lang.DLANG_SIMI + '* ' + '_' + cls2 + '_ \n\n'
    const res_3 = '```[ ' + Lang.DLANG_OTHER + ' ]```\n\n'
    const res_4 = '#2 *' + Lang.DLANG_LANG + '* ' + '_' + cls3 + '_\n*' + Lang.DLANG_SIMI + '* ' + '_' + cls4 + '_ \n'
    const res_5 = '#3 *' + Lang.DLANG_LANG + '* ' + '_' + cls5 + '_\n*' + Lang.DLANG_SIMI + '* ' + '_' + cls6 + '_ \n'
    const res_6 = '#4 *' + Lang.DLANG_LANG + '* ' + '_' + cls7 + '_\n*' + Lang.DLANG_SIMI + '* ' + '_' + cls8 + '_'
    const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
    await message.reply(rep_7);
});
bot({
    pattern: 'movie (.*)',
    fromMe: isPublic,
    desc: "Movie search",
    type: 'search'
}, async (message, match) => {
    if (match[1] === '') return await message.reply('_Need a movie name!_');
	var {data} = await axios(`http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`);
	if (data.Response != 'True') return await message.reply("_"+data.Error+"_");
	let msg = '';
	msg += '_Title_     : *' + data.Title + '*\n\n';
	msg += '_Year_      : *' + data.Year + '*\n\n';
	msg += '_Rated_     : *' + data.Rated + '*\n\n';
	msg += '_Released_  : *' + data.Released + '*\n\n';
	msg += '_Runtime_   : *' + data.Runtime + '*\n\n';
	msg += '_Genre_     : *' + data.Genre + '*\n\n';
	msg += '_Director_  : *' + data.Director + '*\n\n';
	msg += '_Writer_    : *' + data.Writer + '*\n\n';
	msg += '_Actors_    : *' + data.Actors + '*\n\n';
	msg += '_Plot_      : *' + data.Plot + '*\n\n';
	msg += '_Language_  : *' + data.Language + '*\n\n';
	msg += '_Country_   : *' + data.Country + '*\n\n';
	msg += '_Awards_    : *' + data.Awards + '*\n\n';
	msg += '_BoxOffice_ : *' + data.BoxOffice + '*\n\n';
	msg += '_Production_: *' + data.Production + '*\n\n';
	msg += '_imdbRating_: *' + data.imdbRating + '*\n\n';
	msg += '_imdbVotes_ : *' + data.imdbVotes;
    var posterApi = (await axios(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${data.Title}`)).data
    var poster = posterApi.total_results !== 0 ? "https://image.tmdb.org/t/p/w500/"+posterApi.results[0].poster_path : data.Poster
    return await message.client.sendMessage(message.jid,{image: {url: poster}, caption:msg},{quoted: message.data})
});
