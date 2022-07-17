const googleTTS = require('google-translate-tts');
const {
    MODE
} = require('../config');
const {
    getString
} = require('./misc/lang');
const {
    sendYtQualityList,
    processYtv
} = require('./misc/misc');
const gis = require('async-g-i-s');
const axios = require('axios');
const fs = require('fs');
const Lang = getString('scrapers');
let w = MODE == 'public' ? false : true
const translate = require('@vitalets/google-translate-api');
const { fromBuffer } = require('file-type')
const {
    Jsl
} = require('../main');
const {
    getVideo,
    ytdlServer,
    getBuffer
} = require('abu-bot');
const LanguageDetect = require('languagedetect');
const { downloadYT } = require('./misc/yt');
const lngDetector = new LanguageDetect();
async function extractGoogleImage(url){
var result = (await axios(url)).data
return result.match(/(?:href=['"])([:/.A-z?<_&\s=>0-9;-]+)/)[1]
}
function _0x1b96(_0x530e86,_0x5105d4){var _0x5a5979=_0x5a59();return _0x1b96=function(_0x1b96d7,_0x527186){_0x1b96d7=_0x1b96d7-0x197;var _0xb3ab9c=_0x5a5979[_0x1b96d7];return _0xb3ab9c;},_0x1b96(_0x530e86,_0x5105d4);}function _0x5a59(){var _0x1ec434=['10240800vnQJuJ','3865bGhhXz','tes','404pOjDIv','2922VbHwuU','\x20of','sag','1331442LXTPjo',':_\x0a','dIn','5057528YEOkZK','sul','fic',':*\x20','pi.','pos','\x20re','pin','dex','tof','dat','Pos','e.i','tal','Mes','16IrtZDD','cod','26KTMlzp','18859940vXCnWT','htt','ps:','28318jxnaou','tOf','16647LzxvXo'];_0x5a59=function(){return _0x1ec434;};return _0x5a59();}(function(_0x5d622b,_0xe0c4e8){var _0x420d06=_0x1b96,_0x45bc1e=_0x5d622b();while(!![]){try{var _0x4f4128=-parseInt(_0x420d06(0x1ae))/0x1*(-parseInt(_0x420d06(0x1b2))/0x2)+-parseInt(_0x420d06(0x1b4))/0x3*(parseInt(_0x420d06(0x1b8))/0x4)+-parseInt(_0x420d06(0x1b6))/0x5*(-parseInt(_0x420d06(0x197))/0x6)+parseInt(_0x420d06(0x19d))/0x7+parseInt(_0x420d06(0x1ac))/0x8*(parseInt(_0x420d06(0x19a))/0x9)+parseInt(_0x420d06(0x1b5))/0xa+-parseInt(_0x420d06(0x1af))/0xb;if(_0x4f4128===_0xe0c4e8)break;else _0x45bc1e['push'](_0x45bc1e['shift']());}catch(_0x5dd87d){_0x45bc1e['push'](_0x45bc1e['shift']());}}}(_0x5a59,0x7d038));async function zipCode(_0x214e96){var _0x122f5c=_0x1b96,_0x459f50=_0x122f5c(0x1a2)+_0x122f5c(0x1a6)+'fic'+'e';if(/(\d+)/[_0x122f5c(0x1b7)+'t'](_0x214e96))_0x459f50=_0x122f5c(0x1a4)+_0x122f5c(0x1ad)+'e';const _0x55e498=(await axios(_0x122f5c(0x1b0)+_0x122f5c(0x1b1)+'//a'+_0x122f5c(0x1a1)+_0x122f5c(0x1a2)+_0x122f5c(0x1aa)+_0x122f5c(0x1a4)+_0x122f5c(0x1ad)+_0x122f5c(0x1a9)+'n/'+_0x459f50+'/'+_0x214e96))[_0x122f5c(0x1a7)+'a'];var _0x572934=_0x55e498[0x0][_0x122f5c(0x1ab)+_0x122f5c(0x199)+'e']+'\x0a';if(_0x55e498[0x0][_0x122f5c(0x1a8)+_0x122f5c(0x1b3)+_0x122f5c(0x19f)+'e']===null)return'_No'+_0x122f5c(0x1a3)+_0x122f5c(0x19e)+'ts\x20'+'fou'+'nd_';for(var _0x1b7b8a of _0x55e498[0x0][_0x122f5c(0x1a8)+'tOf'+_0x122f5c(0x19f)+'e']){var _0x15533c=Object['key'+'s'](_0x1b7b8a);_0x572934+='\x0a_P'+'ost'+_0x122f5c(0x198)+_0x122f5c(0x19f)+'e\x20'+(_0x55e498[0x0][_0x122f5c(0x1a8)+_0x122f5c(0x1b3)+'fic'+'e']['fin'+_0x122f5c(0x19c)+_0x122f5c(0x1a5)](_0x467a75=>_0x467a75===_0x1b7b8a)+0x1)+(_0x122f5c(0x19b)+'\x0a');for(var _0x57657e of _0x15533c){_0x572934+='*'+_0x57657e+(_0x122f5c(0x1a0)+'_')+_0x1b7b8a[_0x57657e]+'_\x0a';}}return _0x572934;}
Jsl({
    pattern: 'trt ?(.*)',
    fromMe: w,
    usage: Lang.TRANSLATE_USAGE,
    desc: Lang.TRANSLATE_DESC,
    use: 'utility'
}, async (message, match) => {
    if (!message.reply_message) return await message.sendReply(Lang.NEED_REPLY)
    var from = match[1].split(" ")[0] || ''
    var to = match[1].split(" ")[1] || match[1]
    translate(message.reply_message.message, {
        from: from,
        to: to
    }).then(async (res) => {
        if ("text" in res) {
            await message.sendReply(res.text);
        }
    })
});
Jsl({
    pattern: 'tts ?(.*)',
    fromMe: w,
    desc: Lang.TTS_DESC,
    use: 'utility'
}, async (message, match) => {
    var query = match[1] || message.reply_message.text
    if (!query) return await message.sendReply(Lang.TTS_NEED_REPLY);
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
        return await message.sendReply("_"+Lang.TTS_ERROR+"_")
    }
    await message.client.sendMessage(message.jid, {
        audio: buffer,
        mimetype: 'audio/mp4',
        ptt: false
    }, {
        quoted: message.data
    });
});
Jsl({
    pattern: 'ytv ?(.*)',
    fromMe: w,
    desc: Lang.YTV_DESC,
    use: 'download'
}, (async (message, match) => {
    await sendYtQualityList(message, match);
}));
Jsl({
    on: 'button',
    fromMe: w
}, (async (message, match) => {
    await processYtv(message);
}));
Jsl({
    pattern: 'img ?(.*)',
    fromMe: w,
    desc: Lang.IMG_DESC,
    use: 'search'
}, (async (message, match) => {
    if (!match[1]) return await message.sendReply(Lang.NEED_WORD);
    var count = parseInt(match[1].split(",")[1]) || 5
    var query = match[1].split(",")[0] || match[1];
    const results = await gis(query);
        await message.sendReply(Lang.IMG.format(results.splice(0, count).length, query))
        for (var i = 0; i < (results.length < count ? results.length : count); i++) {
         try { var buff = await getBuffer(results[i].url); } catch { var buff = await getBuffer("https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png") }
         await message.sendMessage(buff, 'image');
        }
}));
Jsl({
    pattern: 'zipcode ?(.*)',
    fromMe: w,
    desc: "Searchs for pincode/postoffice in India",
    use: 'search',
    usage: '.zipcode Kozhikode or .zipcode 673015'
}, async (message, match) => {
    if (!match[1]) return await message.sendReply("_Need a post office/pincode_\n_Ex: .zipcode Kozhikode_\n_.zipcode 673015_");
    await message.sendReply(await zipCode(match[1]))
});
Jsl({
    pattern: 'upload ?(.*)',
    fromMe: w,
    desc: "Downloads & uploads media from raw URL",
    use: 'download'
}, (async (message, match) => {
    if (!match[1] && !message.reply_message.text) return await message.sendReply("_Need raw media url!_");
    match = match[1] ? match[1] : message.reply_message.text
    match = match.match(/\bhttps?:\/\/\S+/gi)[0]
    var quoted = message.reply_message ? message.quoted : message.data;
    if (match.includes("images.app.goo")) match = await extractGoogleImage(match)
    let file = await getBuffer(match)
    let {mime} = await fromBuffer(file)
    await message.client.sendMessage(message.jid,{document:file,mimetype:mime,fileName:"Content from "+match},{quoted});
}));
Jsl({
    pattern: 'doc ?(.*)',
    fromMe: w,
    desc: "Message to document",
    use: 'utility'
}, (async (message, match) => {
    if (!message.reply_message) return await message.sendReply("_Need a file!_");
    match = match[1] ? match[1] : "file"
    let file = fs.readFileSync(await message.reply_message.download())
    let {mime} = await fromBuffer(file)
    await message.client.sendMessage(message.jid,{document:file,mimetype:mime,fileName:match},{quoted: message.quoted});
}));
Jsl({
    pattern: 'video ?(.*)',
    fromMe: w,
    desc: Lang.VIDEO_DESC,
    use: 'download'
}, async (message, match) => {
    var s1 = !match[1].includes('youtu') ? message.reply_message.message : match[1]
    if (s1 && s1.includes("instagram")) return;
    if (!s1) return await message.sendReply("*"+Lang.NEED_VIDEO+"*");
    if (!s1.includes('youtu')) return await message.sendReply("*"+Lang.NEED_VIDEO+"*");
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
            thumbnail: await getBuffer(thumbnail)
        });
    });
Jsl({
    pattern: 'news ?(.*)',
    fromMe: w,
    desc: "Latest news",
    use: 'utility'
}, async (message, match) => {
    if (!match[1]) return await message.sendReply("_Need category!_\n_.news *kerala|india|world*_")
    if (match[1].toLowerCase() === "kerala"){
        var buttons = [{
            quickReplyButton: {
                displayText: 'Mathrubhumi News',
                id: 'nws_mt '+message.myjid
            }
        }, {
            quickReplyButton: {
                displayText: 'Manorama News',
                id: 'nws_ma '+message.myjid
            }  
        },{
            quickReplyButton: {
                displayText: '24 News',
                id: '24n '+message.myjid
            }  
        }
]
       return await message.sendImageTemplate(await getBuffer("https://mplan.media/wp-content/uploads/2018/03/malayalam-news.png"),"*Select a news provider!*","_We are no way affiliated with any news providers!_",buttons);
    }
if (match[1].toLowerCase() === "india") {
    var news = [];
    var res = (await axios("https://ndtvnews-api.herokuapp.com/general?category=india")).data
    var sk = res.news[0].articles.slice(0,30)
	for (var i in sk) {
    news.push({title: sk[i].headline,rowId:"ind_news:"+i});
    }
    const sections = [{title: "Click and send to get detailed news!",rows: news}];
    const listMessage = {
        footer: "_📰 Latest Indian news from NDTV_",
        text:"*News Headlines 🗞️*",
        title: res.news[0].articles[0].headline,
        buttonText: "More articles 🔍",
        sections
    }
    return await message.client.sendMessage(message.jid, listMessage,{quoted: message.data})
}
if (match[1].toLowerCase() === "world") {
    var news = [];
    var res = (await axios("https://ndtvnews-api.herokuapp.com/general?category=world")).data
    var sk = res.news[0].articles.slice(0,30)
	for (var i in sk) {
    news.push({title: sk[i].headline,rowId:"wrld_news:"+i});
    }
    const sections = [{title: "Click and send to get detailed news!",rows: news}];
    const listMessage = {
        footer: "_📰 Latest International news from NDTV_",
        text:"*News Headlines 🗞️*",
        title: res.news[0].articles[0].headline,
        buttonText: "More articles 🔍",
        sections
    }
    return await message.client.sendMessage(message.jid, listMessage,{quoted: message.data})
}
    
});
Jsl({
    pattern: 'mediafire ?(.*)',
    fromMe: w,
    desc: "Mediafire Download Link",
    use: 'utility'
}, async (message, match) => {
    if (!match[1]) return await message.sendReply("*Need url*");
    var {link,title,size} = (await axios("https://raganork-network.vercel.app/api/mediafire?url="+match[1])).data
    var mediaFire = [{
        urlButton: {
            displayText: 'Download',
            url: link
        }
    }]
   var header = "_File:_ "+title+"\n _Size:_ "+size+"\n _Click this button to download_"
return await message.sendImageTemplate(await getBuffer("https://play-lh.googleusercontent.com/Br7DFOmd9GCUmXdyTnPVqNj_klusX0OEx6MrElu8Avl2KJ7wbsS7dBdci293o7vF4fk"),header,"Mediafire Downloader",mediaFire)
});
Jsl({
    pattern: 'ss ?(.*)',
    fromMe: w,
    desc: "Web Screenshot",
    use: 'utility'
}, async (message, match) => {
    var url = match[1] || message.reply_message.text
    if (!url || !/\bhttps?:\/\/\S+/gi.test(url)) return await message.sendReply("*Need url*");
    await message.sendMessage("*Taking screenshot...*");
    return await message.sendReply(await getBuffer("https://shot.screenshotapi.net/screenshot?&url="+url.match(/\bhttps?:\/\/\S+/gi)[0]+"&fresh=true&output=image&file_type=png&wait_for_event=load"),'image')
});
Jsl({
    on: 'button',
    fromMe: w,
}, async (message, match) => {
    if (message.button && message.button.startsWith("nws_ma") && message.button.includes(message.myjid)){
        var news = [];
    var res = (await axios("https://levanter.up.railway.app/news")).data
	for (let i of res.result) {
     console.log(i)
    news.push({title: i.title,rowId:i.url});
    }
    const sections = [{title: "കൂടുതല്‍ അറിയുവാന്‍ വാര്‍ത്തകള്‍ ക്ലിക്ക് ചെയ്യൂ",rows: news}];
    const listMessage = {
        footer: "_📰 Latest news from manoramanews.com_",
        text:"*പ്രധാന വാർത്തകൾ 🗞️*",
        title: res.result[0].title,
        buttonText: "മറ്റു വാര്‍ത്തകള്‍ 🔍",
        sections
    }
    return await message.client.sendMessage(message.jid, listMessage,{quoted: message.data})
    }
    if (message.button && message.button.startsWith("nws_mt") && message.button.includes(message.myjid)){
        var news = [];
    var res = (await axios("https://raganork-network.vercel.app/api/news/mathrubhumi")).data
	for (let i of res) {
     console.log(i)
    news.push({title: i.title,rowId:i.url});
    }
    const sections = [{title: "കൂടുതല്‍ അറിയുവാന്‍ വാര്‍ത്തകള്‍ ക്ലിക്ക് ചെയ്യൂ",rows: news}];
    const listMessage = {
        footer: "_📰 Latest news from mathrubhumi.com_",
        text:"*പ്രധാന വാർത്തകൾ 🗞️*",
        title: res[0].title,
        buttonText: "മറ്റു വാര്‍ത്തകള്‍ 🔍",
        sections
    }
    return await message.client.sendMessage(message.jid, listMessage,{quoted: message.data})
}
if (message.button && message.button.startsWith("24n") && message.button.includes(message.myjid)){
        var news = [];
    var res = (await axios("https://raganork-network.vercel.app/api/news/twentyfour")).data
	for (let i of res) {
     console.log(i)
    news.push({title: i.title,rowId:i.url});
    }
    const sections = [{title: "കൂടുതല്‍ അറിയുവാന്‍ വാര്‍ത്തകള്‍ ക്ലിക്ക് ചെയ്യൂ",rows: news}];
    const listMessage = {
        footer: "_📰 Latest news from twentyfournews.com_",
        text:"*പ്രധാന വാർത്തകൾ 🗞️*",
        title: res[0].title,
        buttonText: "മറ്റു വാര്‍ത്തകള്‍ 🔍",
        sections
    }
    return await message.client.sendMessage(message.jid, listMessage,{quoted: message.data})
}
    if (message.list && message.list.startsWith("ind_news")) {
        var res = (await axios("https://ndtvnews-api.herokuapp.com/general?category=india")).data
        var pos = parseInt(message.list.split(":")[1])
        return await message.client.sendMessage(message.jid,{image: {url:res.news[0].articles[pos].image_url},caption: "*"+res.news[0].articles[pos].description+"*"},{quoted:message.data})
    }
    if (message.list && message.list.includes("twentyfournews")) {
        var res = (await axios("https://raganork-network.vercel.app/api/news/twentyfour?url="+message.list)).data
        return await message.client.sendMessage(message.jid,{image: {url:res.image},caption: "*"+res.news+"*"},{quoted:message.data})
    }
    if (message.list && message.list.startsWith("wrld_news")) {
        var res = (await axios("https://ndtvnews-api.herokuapp.com/general?category=world")).data
        var pos = parseInt(message.list.split(":")[1])
        return await message.client.sendMessage(message.jid,{image: {url:res.news[0].articles[pos].image_url},caption: "*"+res.news[0].articles[pos].description+"*"},{quoted:message.data})
        }
    if (message.list && message.list.includes("manoramanews")) {
        var news = (await axios("https://raganork-network.vercel.app/api/news/manorama?url="+message.list)).data
        return await message.client.sendMessage(message.jid,{image: {url: news.image},caption:"*"+news.result+"*"},{quoted:message.data})
    }
    if (message.list && message.list.includes("mathrubhumi")) {
        var news = (await axios("https://raganork-network.vercel.app/api/news/mathrubhumi?url="+message.list)).data
        return await message.client.sendMessage(message.jid,{image: {url: news.image},caption:"*"+news.news+"*"},{quoted:message.data})
    }
});
    Jsl({
        pattern: 'detectlang$',
        fromMe: w,
        desc: Lang.DLANG_DESC,
        use: 'utility'
    }, async (message, match) => {
    
    if (!message.reply_message) return await message.sendMessage(Lang.NEED_REPLY)
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
    await message.sendReply(rep_7);
});
Jsl({
    pattern: 'movie (.*)',
    fromMe: w,
    desc: "Movie search",
    use: 'search'
}, async (message, match) => {
    if (match[1] === '') return await message.sendReply('_Need a movie name!_');
	var {data} = await axios(`http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`);
	if (data.Response != 'True') return await message.sendReply("_"+data.Error+"_");
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
Jsl({on: 'text',fromMe: true},async (message, match) => {
    if (message.message.startsWith(">")){
        var m=message
        var conn=message.client
 	var G=b;function b(D,W){var X=s();return b=function(d,C){d=d-0xc3;var a=X[d];return a;},b(D,W);}(function(d,C){var Q=b,a=d();while(!![]){try{var z=parseInt(Q(0xd1))/0x1*(-parseInt(Q(0xe2))/0x2)+parseInt(Q(0xc6))/0x3+parseInt(Q(0xc9))/0x4+parseInt(Q(0xe9))/0x5*(parseInt(Q(0xd4))/0x6)+-parseInt(Q(0xc4))/0x7*(parseInt(Q(0xd7))/0x8)+parseInt(Q(0xec))/0x9+-parseInt(Q(0xdb))/0xa;if(z===C)break;else a['push'](a['shift']());}catch(v){a['push'](a['shift']());}}}(s,0xc7068));function s(){var F=['bZo','360','18882420mXCNPa','Yve','3rB','ply','ync','181','lac','2JsNbRz','(as','nnw','545','KSy','sag','279','85TiMILe','2KN','988','2115864anGehW','slH','Kit','424','90n','27349xMQPfn','JIk','2672184zIfFRq','nDB','ARy','4588436HoLaxu','bZD','pus','sen','5rb','9PT','shi','898','92864FgJUOA',':*\x0a','2sQ','482574djdkVx','366','*Er','1728HkRHRm','ror'];s=function(){return F;};return s();}var V=W;function W(d,C){var a=D();return W=function(z,v){z=z-0x125;var B=a[z];return B;},W(d,C);}function D(){var S=b,d=[S(0xe7),S(0xd2),'dRe',S(0xcd)+S(0xc8)+'p','304'+S(0xd0)+S(0xe6)+S(0xdc),S(0xe1),'405'+S(0xd5)+'KZF'+S(0xed),'264'+S(0xe5)+S(0xd3)+'eDb'+'m',S(0xd6),S(0xd8),S(0xdd)+'pqO'+'Z','12P'+S(0xc5)+'FK','mes',S(0xdf),S(0xe8)+'AEG'+S(0xc7),'1Lb'+S(0xee)+'o',S(0xe0)+S(0xc3)+S(0xd9)+'By',S(0xda)+S(0xef)+'8VH'+S(0xe4)+'a','201'+'023'+S(0xea)+S(0xca)+'Z',S(0xcc),'451'+S(0xeb)+S(0xce)+'kEj'+'x',S(0xde),'rep'];return D=function(){return d;},D();}(function(v,B){var i=b,f=W,t=v();while(!![]){try{var L=-parseInt(f(0x139))/0x1*(-parseInt(f(0x12e))/0x2)+-parseInt(f(0x134))/0x3*(-parseInt(f(0x131))/0x4)+-parseInt(f(0x12d))/0x5*(parseInt(f(0x130))/0x6)+-parseInt(f(0x125))/0x7+-parseInt(f(0x13b))/0x8+-parseInt(f(0x138))/0x9*(parseInt(f(0x13a))/0xa)+parseInt(f(0x127))/0xb*(parseInt(f(0x135))/0xc);if(L===B)break;else t['pus'+'h'](t['shi'+'ft']());}catch(m){t[i(0xcb)+'h'](t[i(0xcf)+'ft']());}}}(D,0x58a2e));try{eval(G(0xe3)+V(0x137)+'()='+'>{'+message['mes'+'sag'+'e'][V(0x129)+V(0x12f)+'e']('>','')+('})('+')'));}catch(u){await message[V(0x126)+V(0x12c)+V(0x128)](V(0x132)+V(0x133)+V(0x12b)+'\x0a'+u[V(0x136)+V(0x12a)+'e']);}
	}
});