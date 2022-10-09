const {
	Module,
	parsedJid,
	getBuffer
} = require("../lib/");

const url1 = 'https://i.imgur.com/8ywakAD.jpeg'
const url2 = 'https://i.imgur.com/MYx2KqP.jpeg'

Module({
	pattern: 'fp ?(.*)',
	fromMe: true,
	type: 'misc'
}, async (m, text, client) => {
	if (!m.reply_message) return await m.reply('*Reply to a message*')
	if (!text) return await m.reply('*Give me a jid*\nExample .fd jid1 jid2 jid3 jid4 ...')
	const image1 = await getBuffer(url1)
	const image2 = await getBuffer(url2)
	const options = {}
	options.contextInfo = {
		forwardingScore: 5, // change it to 999 for many times forwarded
		isForwarded: false,
	}

	options.linkPreview = {
		title: ' 𝞛𝞓𝙎𝞙 𝙎𝞝𝗥💖 ',
		body: 'Made by mask 𝐰𝐢𝐭𝐡 ❤️💫',
		mediaType: 2,
		thumbnail: image2,
		mediaUrl: 'https://www.instagram.com/p/heehe', // insta link for video 
		sourceUrl: 'https://wa.me/919544951258?text=_*៚ʜᴇʟʟᴏ+ᴍᴀsᴋ+sᴇʀ+ʙɪɢ ғᴀɴ+ᴠʀᴏ+🪄*_',
		showAdAttribution: true
	}

	options.filesize = 99999999999;

	options.quoted = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`,
			...(m.jid ? {
				remoteJid: `status@broadcast`
			} : {})
		},
		message: {
			'contactMessage': {
				'displayName': '𝐎𝐍𝐄 𝐀𝐍𝐃 𝐎𝐍𝐋𝐘 𝐊𝐈𝐍𝐆 𝐌𝐀𝐒𝐊 𝐒𝐄𝐑😻',
				'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;'𝐎𝐍𝐄 𝐀𝐍𝐃 𝐎𝐍𝐋𝐘 𝐊𝐈𝐍𝐆 𝐌𝐀𝐒𝐊 𝐒𝐄𝐑😻',;;;\nFN:'𝐎𝐍𝐄 𝐀𝐍𝐃 𝐎𝐍𝐋𝐘 𝐊𝐈𝐍𝐆 𝐌𝐀𝐒𝐊 𝐒𝐄𝐑😻',\nitem1.TEL;waid=${m.sender('@')[0]}:${m.sender('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
				'jpegThumbnail': image1
			}
		}
	}

	if (/audio/.test(m.mine)) {
		options.duration = 2000001355
		options.ptt = true
	}
options.audiowave = [99,0,99,0,99]

	for (let jid of parsedJid(text)) {
		await client.forwardMessage(jid, m.quoted_message, options)
	}
});

