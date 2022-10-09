const {
	Module,
	isPublic
} = require('../lib/')

Module({
	pattern: 'mentiontext ?(.*)',
	fromMe: isPublic,
	desc: 'Sends mention text',
	type: 'misc',
}, async (message, match) => {

await message.client.sendMessage(message.chat, { text: `*MENTION :* @${message.sender.split("@")[0]}`, mentions: [message.sender] })

});

Module({
	pattern: 'reaction ?(.*)',
	fromMe: isPublic,
	desc: 'Sends reaction',
	type: 'misc',
}, async (message, match) => {
	const reactionMessage = {
    react: {
        text: "💖", // Your emoji here
        key: message.data.key
    }
}

await message.client.sendMessage(message.chat, reactionMessage)
});

Module({
	pattern: 'temp ?(.*)',
	fromMe: isPublic,
	desc: 'Sends template button video',
	type: 'misc',
}, async (message, match) => {

const templateButtons = [
    {index: 1, urlButton: {displayText: 'GitHub!', url: 'https://github.com/Afx-Abu/Abu-MD'}},
    {index: 2, callButton: {displayText: 'Contact!', phoneNumber: '917025994178'}},
    {index: 3, quickReplyButton: {displayText: 'Menu!', id: '.menu'}},
]

const templateMessage = {
    video: {url: 'https://i.imgur.com/NCifJWe.mp4'},
    caption: "𝑨𝒃𝒖 𝑴𝑫",
    footer: '𝐀𝐁𝐔 𝐌𝐃',
    templateButtons: templateButtons
}

await message.client.sendMessage(message.chat, templateMessage)

})


Module({
	pattern: 'contact ?(.*)',
	fromMe: isPublic,
	desc: 'Sends contact',
	type: 'misc',
}, async (message, match) => {

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Jsl\n'
            + 'ORG:Jsl;\n'
            + 'TEL;type=CELL;type=VOICE;waid=917025994178:+91 7025994178\n'
            + 'END:VCARD'
await message.client.sendMessage(
    message.chat,
    { 
        contacts: { 
            displayName: 'Jeff', 
            contacts: [{ vcard }] 
        }
    }
)

})

Module({
	pattern: 'location ?(.*)',
	fromMe: isPublic,
	desc: 'Sends location',
	type: 'misc',
}, async (message, match) => {

await message.client.sendMessage(
    message.chat, 
    { location: { degreesLatitude: 24.121231, degreesLongitude: 55.1121221 } }
)

})
