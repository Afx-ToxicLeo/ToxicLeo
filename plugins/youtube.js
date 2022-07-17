const {
  Module
} = require('../main');
const {
  MODE,
  AUDIO_DATA,
  BOT_INFO
} = require('../config');
const ffmpeg = require('fluent-ffmpeg');
const {
  getString
} = require('./misc/lang');
const {
  getJson,
  searchYT,
  searchSong
} = require('./misc/misc');
const {
    downloadYT
  } = require('./misc/yt');
const Lang = getString('scrapers');
const fs = require('fs');
const {
  getBuffer,
  ytdlServer,
  getVideo,
  addInfo
} = require('abu-bot');
let jsl = MODE == 'public' ? false : true
const getID = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
const _0x41008c=_0x3ae3;function _0xd4fa(){const _0x5bdefb=['1294408DHqvEu','ei.','pow','rou','pip','Wri','[ER','7BJYJkG','now','inf','ng\x20','[RA','aud','rti','log','492084MTTUKY','Sta','5748gmZdRB','flo','615OmNMVK','GAN','err','70XlcmNR','Byt','.mp','23949jEFBLZ','2735lexahw','\x20MD','cre','990957WWpZMm','end','3889860OYOeFF','14748XQFYtT','ate','nlo','you'];_0xd4fa=function(){return _0x5bdefb;};return _0xd4fa();}(function(_0x39ae56,_0x2065fc){const _0x196875=_0x3ae3,_0x431ef0=_0x39ae56();while(!![]){try{const _0x270c89=-parseInt(_0x196875(0xa2))/0x1+-parseInt(_0x196875(0x9a))/0x2*(-parseInt(_0x196875(0x9c))/0x3)+parseInt(_0x196875(0xa8))/0x4+-parseInt(_0x196875(0xa3))/0x5*(parseInt(_0x196875(0xa9))/0x6)+-parseInt(_0x196875(0x90))/0x7*(-parseInt(_0x196875(0xad))/0x8)+-parseInt(_0x196875(0x98))/0x9+parseInt(_0x196875(0x9f))/0xa*(parseInt(_0x196875(0xa6))/0xb);if(_0x270c89===_0x2065fc)break;else _0x431ef0['push'](_0x431ef0['shift']());}catch(_0x371d20){_0x431ef0['push'](_0x431ef0['shift']());}}}(_0xd4fa,0xe344e));const Innertube=require(_0x41008c(0xac)+'tub'+_0x41008c(0xae)+'js');async function getSong(_0xddf016){return new Promise(async(_0x348af6,_0x289295)=>{const _0x29d4cf=_0x3ae3,_0x2c2939=await new Innertube();function _0x2fb97e(_0x748208){const _0x29cd6e=_0x3ae3;var _0x26bcd3=[_0x29cd6e(0xa0)+'es','KB','MB','GB','TB'];if(_0x748208==0x0)return'0\x20B'+'yte';var _0x470606=parseInt(Math[_0x29cd6e(0x9b)+'or'](Math[_0x29cd6e(0x97)](_0x748208)/Math[_0x29cd6e(0x97)](0x400)));return Math[_0x29cd6e(0xb0)+'nd'](_0x748208/Math[_0x29cd6e(0xaf)](0x400,_0x470606),0x2);}const _0x147b2f=_0x2c2939['dow'+_0x29d4cf(0xab)+'ad'](_0xddf016,{'format':'mp4','quality':'','type':_0x29d4cf(0x95)+'io'});_0x147b2f[_0x29d4cf(0xb1)+'e'](fs[_0x29d4cf(0xa5)+_0x29d4cf(0xaa)+_0x29d4cf(0xb2)+'teS'+'tre'+'am']('./'+_0xddf016+(_0x29d4cf(0xa1)+'4'))),_0x147b2f['on']('sta'+'rt',()=>{const _0x30067b=_0x29d4cf;console[_0x30067b(0x92)+'o'](_0x30067b(0x94)+_0x30067b(0x9d)+'ORK'+_0x30067b(0xa4)+']',_0x30067b(0x99)+_0x30067b(0x96)+_0x30067b(0x93)+_0x30067b(0x91)+'!');}),_0x147b2f['on'](_0x29d4cf(0xa7),()=>{_0x348af6('./'+_0xddf016+('.mp'+'4'));}),_0x147b2f['on'](_0x29d4cf(0x9e)+'or',_0x40a884=>console['err'+'or'](_0x29d4cf(0xb3)+'ROR'+']',_0x40a884));});}function _0x3ae3(_0x561ef7,_0x9f82e9){const _0xd4fa42=_0xd4fa();return _0x3ae3=function(_0x3ae36b,_0x5f5dc8){_0x3ae36b=_0x3ae36b-0x90;let _0x428616=_0xd4fa42[_0x3ae36b];return _0x428616;},_0x3ae3(_0x561ef7,_0x9f82e9);};
Module({
  pattern: 'song ?(.*)',
  fromMe: jsl,
  desc: Lang.SONG_DESC,
  use: 'download'
}, (async (message, match) => {
  if (!match[1]) return message.sendReply(Lang.NEED_TEXT_SONG)
  var link = match[1].match(/\bhttps?:\/\/\S+/gi)
  if (link !== null && getID.test(link[0])) {
      var query = getID.exec(link[0]);
      var {
        thumbnail,title,size
    } = await downloadYT(query[1],'audio');
    await message.sendImageTemplate({url: thumbnail},`*Downloading:* _${title}_`,`Size: ${size}`,[])
    var song = await getSong(query[1]);
      ffmpeg(song)
     .save('./song.mp3')
     .on('end', async () => {
      var song = await addInfo('./song.mp3',title,BOT_INFO.split(";")[0],"Abu metadata",await getBuffer(thumbnail))
      return await message.client.sendMessage(message.jid, {
              audio: song,
              mimetype: 'audio/mpeg'
          }, {
              quoted: message.data
          });

                });         return;
        }
  var myid = message.client.user.id.split("@")[0].split(":")[0]
  let sr = await searchYT(match[1]);
  sr = sr.videos;
  if (sr.length < 1) return await message.sendReply(Lang.NO_RESULT);
  var SongData = []
  for (var i in sr){
    SongData.push({
      title: sr[i].title,
      description: sr[i].artist,
      rowId: "song;" + sr[i].id + ';' + myid
  })
  }
  const sections = [{
      title: Lang.MATCHING_SONGS,
      rows: SongData
  }];
  const listMessage = {
      text: "and "+(sr.length-1)+" more results..",
      footer: "user: " + message.data.pushName,
      title: sr[0].title,
      buttonText: "Select song",
      sections
  }
  await message.client.sendMessage(message.jid, listMessage,{quoted: message.data})
}));
Module({
  pattern: 'ytl ?(.*)',
  fromMe: jsl,
  desc: "Select and download songs from yt (list)",
  use: 'search'
}, (async (message, match) => {
  if (!match[1]) return message.sendReply("*Need words*")
  var myid = message.client.user.id.split("@")[0].split(":")[0]
  let sr = await searchYT(match[1]);
  sr = sr.videos;
  if (sr.length < 1) return await message.sendReply("*No results found!*");
  var videos = [];
  for (var index = 0; index < sr.length; index++) {
      videos.push({
          title: sr[index].title,
          description: sr[index].metadata.duration.accessibility_label,
          rowId: "ytsl;" + sr[index].id + ';' + myid
      });
  }
  const sections = [{
      title: "YouTube search resulrs",
      rows: videos
  }]
  const listMessage = {
      text: "and " + (sr.length - 1) + " more results...",
      footer: "user: " + message.data.pushName,
      title: sr[0].title,
      buttonText: "Select a video",
      sections
  }
  await message.client.sendMessage(message.jid, listMessage,{quoted: message.data})
}));
Module({
  on: 'button',
  fromMe: jsl
}, (async (message, match) => {
  if (message.list && message.list.startsWith("ytsl") && message.list.includes(message.client.user.id.split("@")[0].split(":")[0])) {
  const buttons = [{
                              urlButton: {
                                  displayText: '𝑊𝐴𝑇𝐶𝐻 𝑂𝑁 𝑌𝑂𝑈𝑇𝑈𝐵𝐸',
                                  url: 'https://youtu.be/'+ message.list.split(";")[1]
                              }
                          }, {
                              quickReplyButton: {
                                  displayText: '𝐴𝑈𝐷𝐼𝑂',
                                  id: 'ytsa;' + message.client.user.id.split("@")[0].split(":")[0] + ";" + message.list.split(";")[1]
                              }  
                          }, {
                              quickReplyButton: {
                                  displayText: '𝑉𝐼𝐷𝐸𝑂',
                                  id: 'ytsv;' + message.client.user.id.split("@")[0].split(":")[0] + ";" + message.list.split(";")[1]
                              }
                          }]   
 
      var {
          info,
          thumbnail
      } = await getJson("https://Abu-network.vercel.app/api/youtube/details?video_id=" + message.list.split(";")[1]);
      
      await message.sendImageTemplate(await getBuffer(thumbnail),info,"ᴜsᴇʀ: "+message.senderName,buttons);
  }
  if (message.button && message.button.startsWith("ytsv") && message.button.includes(message.client.user.id.split("@")[0].split(":")[0])) {
          var {
              url,
              thumbnail,
              title
          } = await downloadYT(message.button.split(";")[2]);
          return await message.client.sendMessage(message.jid, {
              video: {
                  url: url
              },
              mimetype: "video/mp4",
              caption: title,
              thumbnail: await getBuffer(thumbnail)
          },{quoted:message.data});
       }
  if (message.button && message.button.startsWith("ytsa") && message.button.includes(message.client.user.id.split("@")[0].split(":")[0])) {
    var {
        thumbnail,title,size
    } = await downloadYT(message.button.split(";")[2],'audio');
    await message.client.sendMessage(message.jid,{image: {url: thumbnail},caption:`*Downloading:* ${'```'+title+'```'} \n *Size:* ${'```'+size+'```'}`})
    var song = await getSong(message.button.split(";")[2]);
          ffmpeg(song)
         .save('./song.mp3')
         .on('end', async () => {
          var song = await addInfo('./song.mp3',title,BOT_INFO.split(";")[0],"Abu metadata",await getBuffer(thumbnail))
          return await message.client.sendMessage(message.jid, {
              audio: song,
              mimetype: 'audio/mpeg'
          }, {
              quoted: message.data
          });
     })};
  if (message.list && message.list.startsWith("song") && message.list.includes(message.client.user.id.split("@")[0].split(":")[0])) {
          var {
              thumbnail,title,size,url
          } = await downloadYT(message.list.split(";")[1],'audio');
          await message.sendImageTemplate({url: thumbnail},`*Downloading:* _${title}_`,`Size: ${size}`,[])
          // Method 1: Via y2mate
          if (url!== "http://app.y2mate.com/download"){
          await fs.writeFileSync('./song.mp3',await getBuffer(url))
          var song_data = await addInfo('./song.mp3',title,BOT_INFO.split(";")[0],"Abu audio downloader",await getBuffer(thumbnail))
          return await message.client.sendMessage(message.jid, {
              audio:song_data,
              mimetype: 'audio/mp4'
          }, {
              quoted: message.data
          });  
        }
          // Method 2: Direct Download from YT
          var song = await getSong(message.list.split(";")[1]);
          ffmpeg(song)
         .save('./song.mp3')
         .on('end', async () => {
          var song = await addInfo('./song.mp3',title,BOT_INFO.split(";")[0],"Abu audio downloader",await getBuffer(thumbnail))
          return await message.client.sendMessage(message.jid, {
              audio:song,
              mimetype: 'audio/mp4'
          }, {
              quoted: message.data
          });
        });
      }
}));
