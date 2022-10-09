const {
	Module,
	parsedJid,
	getBuffer
} = require("../lib/");

const url1 = 'https://i.imgur.com/0I0KONy.jpeg'
const url2 = 'https://i.imgur.com/kxwRM1c.jpg'

Module({
	pattern: 'mforward ?(.*)',
	fromMe: true,
	type: 'misc'
}, async (message, text,mach) => {
	if (!message.reply_message) return await message.reply('*Reply to a message*')
	if (!text) return await message.reply('_Give me a jid_\n*Example .mforward jid1 jid2 jid3 jid4 ...*')
	const image1 = await getBuffer(url1)
	const image2 = await getBuffer(url2)
	const options = {}
	options.contextInfo = {
		forwardingScore: 5, // change it to 999 for many times forwarded
		isForwarded: false,
	}

	options.linkPreview = {
		title: 'ᴀʙᴜ sᴇʀ',
		body: 'ᴍᴀᴅᴇ ʙʏ ᴀʙᴜ 💜',
		mediaType: 2,
		thumbnail: image2,
		mediaUrl: '', // insta link for video 
		sourceUrl: 'https://github.com/Afx-Abu',
		showAdAttribution: true
	}

        options.filesize = 9999999999999;

	options.quoted = {
		key: {
			fromMe: false,
			participant: '0@s.whatsapp.net',
			remoteJid: 'status@broadcast',
		},
		message: {
			imageMessage: {
				jpegThumbnail: image2,
				caption: '𝘔𝘈𝘋𝘌 𝘉𝘠 𝘈𝘉𝘜 💜',
			},
		},
	}

	if (/audio/.test(message.mine)) {
		options.duration = 2000001355
		options.ptt = true // delete this if not need audio as voice always
	}

	for (let jid of parsedJid(text)) {
		await message.sendMessage(jid, message.quoted_message, options)
	}
});
