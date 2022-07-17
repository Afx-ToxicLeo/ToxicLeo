const {
    Jsl
} = require('../main');
Jsl({
    pattern: 'react ?(.*)',
    fromMe: true,
    use: 'utility'
}, (async (m, t) => {
    let msg = {
        remoteJid: m.reply_message.jid,
        id: m.reply_message.id
    }
    const reactionMessage = {
        react: {
            text: t[1],
            key: msg
        }
    }

    await m.client.sendMessage(m.jid, reactionMessage);
}));