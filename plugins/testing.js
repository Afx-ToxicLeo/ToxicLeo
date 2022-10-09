const {
	Module,
	isPublic
} = require('../lib/')

Module({
	pattern: 'text ?(.*)',
	fromMe: isPublic,
	desc: 'Sends text',
	type: 'misc',
}, async (message, match) => {
	await message.send("*TEXT HERE*")
});

// ------------------------------------------------------------------------------------------------
//              IMAGE SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Module({
	pattern: 'image ?(.*)',
	fromMe: isPublic,
	desc: 'Sends image',
	type: 'misc',
}, async (message, match) => {
	await message.client.sendMessage(message.jid, {image: {url: 'https://i.imgur.com/biqxAoi.jpeg'}, caption: "YOUR CAPTION HERE"})
});

// ------------------------------------------------------------------------------------------------
//              VIDEO SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Module({
	pattern: 'video ?(.*)',
	fromMe: isPublic,
	desc: 'Sends video',
	type: 'misc',
}, async (message, match) => {
	await message.client.sendMessage(message.jid, {video: {url: 'https://i.imgur.com/NCifJWe.mp4'}, caption: "YOUR CAPTION HERE"})
});


// ------------------------------------------------------------------------------------------------
//          MENTION TEXT SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Module({
	pattern: 'mentiontext ?(.*)',
	fromMe: isPublic,
	desc: 'Sends mention text',
	type: 'misc',
}, async (message, match) => {

await message.client.sendMessage(message.jid, { text: `*MENTION :* @${message.sender.split("@")[0]}`, mentions: [message.sender] })

});

// ------------------------------------------------------------------------------------------------
//          REACTION SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

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

await message.client.sendMessage(message.jid, reactionMessage)
});

// ------------------------------------------------------------------------------------------------
//          LIST BUTTON SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Module({
	pattern: 'listbutton ?(.*)',
	fromMe: isPublic,
	desc: 'Sends list button',
	type: 'misc',
}, async (message, match) => {

const sections = [
    {
	title: "Section 1",
	rows: [
	    {title: "Option 1", rowId: "option1"},
	    {title: "Option 2", rowId: "option2", description: "This is a description"}
	]
    },
   {
	title: "Section 2",
	rows: [
	    {title: "Option 3", rowId: "option3"},
	    {title: "Option 4", rowId: "option4", description: "This is a description V2"}
	]
    },
]

const listMessage = {
  text: "This is a list",
  footer: "nice footer, link: https://google.com",
  title: "Amazing boldfaced list title",
  buttonText: "Required, text on the button to view the list",
  sections
}

await message.client.sendMessage(message.jid, listMessage)
})


// ------------------------------------------------------------------------------------------------
//          BUTTON TEXT SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Module({
	pattern: 'buttontext ?(.*)',
	fromMe: isPublic,
	desc: 'Sends button text',
	type: 'misc',
}, async (message, match) => {

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    text: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.jid, buttonMessage)

})


// ------------------------------------------------------------------------------------------------
//          BUTTON IMAGE SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Module({
	pattern: 'buttonimage ?(.*)',
	fromMe: isPublic,
	desc: 'Sends button image',
	type: 'misc',
}, async (message, match) => {

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    image: {url: 'https://i.imgur.com/biqxAoi.jpeg'},
    caption: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.jid, buttonMessage)

})

// ------------------------------------------------------------------------------------------------
//          BUTTON VIDEO SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Module({
	pattern: 'buttonvideo ?(.*)',
	fromMe: isPublic,
	desc: 'Sends button video',
	type: 'misc',
}, async (message, match) => {

const buttons = [
  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},
  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}
]

const buttonMessage = {
    video: {url: 'https://i.imgur.com/NCifJWe.mp4'},
    caption: "Hi it's button message",
    footer: 'Hello World',
    buttons: buttons,
    headerType: 1
}

await message.client.sendMessage(message.jid, buttonMessage)

})

// ------------------------------------------------------------------------------------------------
//          TEMPLATE BUTTON TEXT SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Module({
	pattern: 'templatebuttontext ?(.*)',
	fromMe: isPublic,
	desc: 'Sends template button text',
	type: 'misc',
}, async (message, match) => {

const templateButtons = [
    {index: 1, urlButton: {displayText: '⭐ Star Abu on GitHub!', url: 'https://github.com/Abu/Abu'}},
    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+65 7777 5555'}},
    {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},
]

const templateMessage = {
    text: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: templateButtons
}

await message.client.sendMessage(message.jid, templateMessage)

})

// ------------------------------------------------------------------------------------------------
//          TEMPLATE BUTTON IMAGE SENDER SAMPLE 👇
// ------------------------------------------------------------------------------------------------

Module({
	pattern: 'templatebuttonimage ?(.*)',
	fromMe: isPublic,
	desc: 'Sends template button image',
	type: 'misc',
}, async (message, match) => {

const templateButtons = [
    {index: 1, urlButton: {displayText: 'GitHub!', url: 'https://github.com/Afx-Abu/Abu-MD'}},
    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+91 7025994178'}},
    {index: 3, quickReplyButton: {displayText: 'Menu!', id: '.menu'}},
]

const templateMessage = {
    image: {url: 'https://i.imgur.com/biqxAoi.jpeg'},
    caption: "Hi it's a template message",
    footer: 'Hello World',
    templateButtons: templateButtons
}

await message.client.sendMessage(message.jid, templateMessage)

})

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

await message.client.sendMessage(message.jid, templateMessage)

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
    message.jid,
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
    message.jid, 
    { location: { degreesLatitude: 24.121231, degreesLongitude: 55.1121221 } }
)

})
