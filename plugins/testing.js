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
