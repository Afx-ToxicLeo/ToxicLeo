const Abu = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const LOAD_ING = "*ᴛʀʏɪɴɢ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ*"
const UPLOAD_ING = "*✅️ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴄᴏᴍᴘʟᴇᴛᴇᴅ* \n\n *ᴜᴘʟᴏᴀᴅɪɴɢ ɪɴ ᴘʀᴏᴄᴇᴄᴄ...*"
const axios = require('axios')
const Axios = require('axios')



const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true

Abu.addCommand({pattern: 'ytv ?(.*)', fromMe: wk, desc: 'video downloading links from youtube'}, async (message, match) => {
	
const ig = await Axios.get('https://avatars.githubusercontent.com/u/85664936?s=120&v=4', {responseType: 'arraybuffer'})
const options = {}
options.linkPreview = {
               head: "ᴀʙᴜ sᴇʀ",
               body: "© ᴀʙᴜ sᴇʀ ©",
               mediaType: 2, //3 for video
               thumbnail: Buffer.from(ig.data) ,
               sourceUrl: "https://github.com/Afx-Abu/Abu_ser",
                }

	
var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, options);

        const {data} = await axios(`https://api.zeks.me/api/ytplaymp4?apikey=ApiKannappi&q=${match[1]}`)
	
        const { status, result } = data


	const videoBuffer = await axios.get(`${result.url_video}`, {responseType: 'arraybuffer'})

        if(!status) return await message.sendMessage('*𝙽𝙾 𝚃𝙴𝚂𝚄𝙻𝚃 𝙵𝙾𝚄𝙽𝙳🥲*')

	reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, options);

        let msg = '```'
        msg +=  `TITLE :${result.title}\n\n`
        msg +=  `THUMBNAIL :${result.thumbnail}\n\n`
        msg +=  `SOURCE :${result.source}\n\n`
        msg +=  `SIZE :${result.size}\n\n`
        msg +=  `DOWNLOADING LINK :${result.url_video}\n\n`
        msg += '```' 
	 return await message.client.sendMessage(message.jid,Buffer.from(videoBuffer.data), MessageType.video, {mimetype: Mimetype.mp4, ptt: false , caption: msg , thumbnail: Abu.tm_b}); 
});
    

