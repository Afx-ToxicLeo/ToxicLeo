const { proto, delay, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs-extra')
const {unlink } = require ('fs').promises
const axios = require('axios')
const {
  writeExifImg,
  writeExifVid,
writeExifWebp,
  imageToWebp,
  videoToWebp,
} = require("../lib/exif");
const moment = require('moment-timezone')
const { sizeFormatter } = require('human-readable')
const Config = require('../config')
const util = require('util')
const jimp = require('jimp')
const { defaultMaxListeners } = require('stream')
const child_process = require('child_process')
const ffmpeg = require('fluent-ffmpeg')

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)
const sleep =  (ms) =>{
    return new Promise((resolve) =>{ setTimeout (resolve, ms)})

    } 
exports.unixTimestampSeconds = unixTimestampSeconds

exports.generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch; // attach epoch if provided
    return tag;
}

exports.processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
} 
exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

exports.fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " d, " : " d, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " h, " : " h, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " m, " : " m, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.clockString = function(seconds) {
    let h = isNaN(seconds) ? '--' : Math.floor(seconds % (3600 * 24) / 3600)
    let m = isNaN(seconds) ? '--' : Math.floor(seconds % 3600 / 60)
    let s = isNaN(seconds) ? '--' : Math.floor(seconds % 60)
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
}

exports.formatDate = (n, locale = 'id') => {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
}



exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

exports.jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

function format(...args) {
	return util.format(...args)
}

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp)
		if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await jimp_1.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG)
	}
}

exports.bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

exports.getSizeMedia = (path) => {
    return new Promise((resolve, reject) => {
        if (/http/.test(path)) {
            axios.get(path)
            .then((res) => {
                let length = parseInt(res.headers['content-length'])
                let size = exports.bytesToSize(length, 3)
                if(!isNaN(length)) resolve(size)
            })
        } else if (Buffer.isBuffer(path)) {
            let length = Buffer.byteLength(path)
            let size = exports.bytesToSize(length, 3)
            if(!isNaN(length)) resolve(size)
        } else {
            reject('error gatau apah')
        }
    })
}

exports.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.GIFBufferToVideoBuffer = async (image) => {

        const filename = `${Math.random().toString(36)}`
                await fs.writeFileSync(`./${filename}.gif`, image)
                         child_process.exec(
                                    `ffmpeg -i ./${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./${filename}.mp4`
                                            ) 
      await sleep(8000)

        var buffer5  =  await  fs.readFileSync(`./${filename}.mp4`)
        Promise.all([unlink(`./${filename}.mp4`), unlink(`./${filename}.gif`)])
        return buffer5
                       }
/**
 * Serialize Message
 * @param {WAConnection} conn 
 * @param {Object} m 
 * @param {store} store 
 */
exports.smsg = (conn, abu, store) => {
    if (!abu) return abu
    let M = proto.WebMessageInfo
    if (abu.key) {
        abu.id = abu.key.id
        abu.isBot = abu.id.startsWith('BAES') && abu.id.length === 16
	abu.isBaileys = abu.id.startsWith('BAE5') && abu.id.length === 16
        abu.chat = abu.key.remoteJid
        abu.fromMe = abu.key.fromMe
        abu.isGroup = abu.chat.endsWith('@g.us')
        abu.sender = conn.decodeJid(abu.fromMe && conn.user.id || abu.participant || abu.key.participant || abu.chat || '')
        if (abu.isGroup) abu.participant = conn.decodeJid(abu.key.participant) || ''
    }
    if (abu.message) {
        abu.mtype = getContentType(abu.message)
        abu.msg = (abu.mtype == 'viewOnceMessage' ? abu.message[abu.mtype].message[getContentType(abu.message[abu.mtype].message)] : abu.message[abu.mtype])
        try{
	abu.body = (abu.mtype === 'conversation') ? abu.message.conversation : (abu.mtype == 'imageMessage') ? abu.message.imageMessage.caption : (abu.mtype == 'videoMessage') ? abu.message.videoMessage.caption : (abu.mtype == 'extendedTextMessage') ? abu.message.extendedTextMessage.text : (abu.mtype == 'buttonsResponseMessage') ? abu.message.buttonsResponseMessage.selectedButtonId : (abu.mtype == 'listResponseMessage') ? abu.message.listResponseMessage.singleSelectReply.selectedRowId : (abu.mtype == 'templateButtonReplyMessage') ? abu.message.templateButtonReplyMessage.selectedId : (abu.mtype === 'messageContextInfo') ? (abu.message.buttonsResponseMessage?.selectedButtonId || abu.message.listResponseMessage?.singleSelectReply.selectedRowId || abu.text) : '';
	} catch {
	abu.body = false	
	}
	let quoted = abu.quoted = abu.msg.contextInfo ? abu.msg.contextInfo.quotedMessage : null
        abu.mentionedJid = abu.msg.contextInfo ? abu.msg.contextInfo.mentionedJid : []
        if (abu.quoted) {
            let type = getContentType(quoted)
			abu.quoted = abu.quoted[type]
            if (['productMessage'].includes(type)) {
				type = getContentType(abu.quoted)
				abu.quoted = abu.quoted[type]
			}
            if (typeof abu.quoted === 'string') abu.quoted = {
				text: abu.quoted
			}
            abu.quoted.mtype = type
            abu.quoted.id = abu.msg.contextInfo.stanzaId
			abu.quoted.chat = abu.msg.contextInfo.remoteJid || abu.chat
            abu.quoted.isBot = abu.quoted.id ? abu.quoted.id.startsWith('BAES') && abu.quoted.id.length === 16 : false
	    abu.quoted.isBaileys = abu.quoted.id ? abu.quoted.id.startsWith('BAE5') && abu.quoted.id.length === 16 : false
			abu.quoted.sender = conn.decodeJid(abu.msg.contextInfo.participant)
			abu.quoted.fromMe = abu.quoted.sender === (conn.user && conn.user.id)
            abu.quoted.text = abu.quoted.text || abu.quoted.caption || abu.quoted.conversation || abu.quoted.contentText || abu.quoted.selectedDisplayText || abu.quoted.title || ''
			abu.quoted.mentionedJid = abu.msg.contextInfo ? abu.msg.contextInfo.mentionedJid : []
            abu.getQuotedObj = abu.getQuotedMessage = async () => {
			if (!abu.quoted.id) return false
			let q = await store.loadMessage(abu.chat, abu.quoted.id, conn)
 			return exports.smsg(conn, q, store)
            }
            let vM = abu.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: abu.quoted.chat,
                    fromMe: abu.quoted.fromMe,
                    id: abu.quoted.id
                },
                message: quoted,
                ...(abu.isGroup ? { participant: abu.quoted.sender } : {})
            })
            /**
             * 
             * @returns 
             */
             let { chat, fromMe, id } = abu.quoted;
			const key = {
				remoteJid: abu.chat,
				fromMe: false,
				id: abu.quoted.id,
				participant: abu.quoted.sender
			}
            abu.quoted.delete = async() => await conn.sendMessage(abu.chat, { delete: key })

	   /**
		* 
		* @param {*} jid 
		* @param {*} forceForward 
		* @param {*} options 
		* @returns 
	   */
            abu.forwardMessage = (jid, forceForward = true, options = {}) => conn.copyNForward(jid, vM, forceForward,{contextInfo: {isForwarded: false}}, options)

            /**
              *
              * @returns
            */
            abu.quoted.download = () => conn.downloadMediaMessage(abu.quoted)
        }
    }
    if (abu.msg.url) abu.download = () => conn.downloadMediaMessage(abu.msg)
    abu.text = abu.msg.text || abu.msg.caption || abu.message.conversation || abu.msg.contentText || abu.msg.selectedDisplayText || abu.msg.title || ''
    /**
	* Reply to this message
	* @param {String|Object} text 
	* @param {String|false} chatId 
	* @param {Object} options 
	*/

       /**
	* Copy this message
	*/
	abu.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
	/**
	 * 
	 * @param {*} jid 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */
	abu.copyNForward = (jid = abu.chat, forceForward = false, options = {}) => conn.copyNForward(jid, abu, forceForward, options)
	abu.sticker = (stik, id = abu.chat, option = { mentions: [abu.sender] }) => conn.sendMessage(id, { sticker: stik, contextInfo: { mentionedJid: option.mentions } }, { quoted: abu })
	abu.replyimg = (img, teks, id = abu.chat, option = { mentions: [abu.sender] }) => conn.sendMessage(id, { image: img, caption: teks, contextInfo: { mentionedJid: option.mentions } }, { quoted: abu })
        abu.imgurl = (img, teks, id = abu.chat, option = { mentions: [abu.sender] }) => conn.sendMessage(id, { image: {url: img }, caption: teks, contextInfo: { mentionedJid: option.mentions } }, { quoted: abu })
	abu.reply = async (content,opt = { packname: "Secktor", author: "SamPandey001" }, type = "text")  => {
      switch (type.toLowerCase()) {
        case "text":{
          return await conn.sendMessage( abu.chat, {  text: content }, { quoted:abu });
                     }
        break;
      case "image": {
          if (Buffer.isBuffer(content)) {
            return await conn.sendMessage(abu.chat, { image: content, ...opt },  { ...opt } );
          } else if (isUrl(content)) {
            return conn.sendMessage( abu.chat, { image: { url: content }, ...opt },{ ...opt }  );
          }
        }
        break;
      case "video": {
        if (Buffer.isBuffer(content)) {
          return await conn.sendMessage(abu.chat,  { video: content, ...opt },  { ...opt }   );
        } else if (isUrl(content)) {
          return await conn.sendMessage( abu.chat,  { video: { url: content }, ...opt },  { ...opt }  );
        }
      }
      case "audio": {
          if (Buffer.isBuffer(content)) {
            return await conn.sendMessage( abu.chat, { audio: content, ...opt }, { ...opt } );
          } else if (isUrl(content)) {
            return await conn.sendMessage( abu.chat, { audio: { url: content }, ...opt }, { ...opt });
          }
        }
        break;
      case "template":
        let optional = await generateWAMessage(abu.chat, content, opt);
        let message = { viewOnceMessage: { message: { ...optional.message,},   },};
        await conn.relayMessage(abu.chat, message, { messageId: optional.key.id,});
        break;
      case "sticker":{
	  let { data, mime } = await conn.getFile(content);
          if (mime == "image/webp") {
          let buff = await writeExifWebp(data, opt);
            await conn.sendMessage(abu.chat, { sticker: { url: buff }, ...opt }, opt );
          } else {
            mime = await mime.split("/")[0];
            if (mime === "video") {
              await conn.sendImageAsSticker(abu.chat, content, opt);
            } else if (mime === "image") {
              await conn.sendImageAsSticker(abu.chat, content, opt);
            }
          }
        }
        break;
    }
  }
	abu.senddoc = (doc,type, id = abu.chat, option = { mentions: [abu.sender], filename: Config.ownername, mimetype: type,
	externalAdRepl: {
							title: Config.ownername,
							body: ' ',
							thumbnailUrl: ``,
							thumbnail: log0,
							mediaType: 1,
							mediaUrl: '',
							sourceUrl: gurl,
						} }) => conn.sendMessage(id, { document: doc, mimetype: option.mimetype, fileName: option.filename, contextInfo: {
	  externalAdReply: option.externalAdRepl,
	  mentionedJid: option.mentions } }, { quoted: abu })
	
  	abu.sendcontact = (name, info, number) => {
		var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + name + '\n' + 'ORG:' + info + ';\n' + 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n' + 'END:VCARD'
		conn.sendMessage(abu.chat, { contacts: { displayName: name, contacts: [{ vcard }] } }, { quoted: abu })
	}
	abu.react = (emoji) => conn.sendMessage(abu.chat, { react: { text: emoji, key: abu.key } })

    return abu
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
