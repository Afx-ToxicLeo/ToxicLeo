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

const {
    Module
} = require('../main');
const {
    getVideo,
    ytdlServer,
    getBuffer
} = require('abu-bot');
const LanguageDetect = require('languagedetect');
const { downloadYT } = require('./misc/yt');
const lngDetector = new LanguageDetect();
Module({
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
Module({
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
Module({
    pattern: 'ytv ?(.*)',
    fromMe: w,
    desc: Lang.YTV_DESC,
    use: 'download'
}, (async (message, match) => {
    await sendYtQualityList(message, match);
}));
Module({
    on: 'button',
    fromMe: w
}, (async (message, match) => {
    await processYtv(message);
}));
Module({
    pattern: 'img ?(.*)',
    fromMe: w,
    desc: Lang.IMG_DESC,
    use: 'search'
}, (async (message, match) => {
    if (!match[1]) return await message.sendReply(Lang.NEED_WORD);
    var count = parseInt(match[1].split(",")[1]) || 5
    var query = match[1].split(",")[0] || match[1];
    try {
        const results = await gis(query);
        await message.sendReply(Lang.IMG.format(results.splice(0, count).length, query))
        for (var i = 0; i < (results.length < count ? results.length : count); i++) {
         var buff = await getBuffer(results[i].url);
         await message.sendMessage(buff, 'image');
        }
    } catch (e) {
        await message.sendReply(e);
    }
}));
Module({
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
Module({
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
Module({
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
Module({
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
Module({
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
    Module({
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
Module({
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
