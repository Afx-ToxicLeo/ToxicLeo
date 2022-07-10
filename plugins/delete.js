const {
    Module
} = require('../main');
Module({
    pattern: 'del',
    fromMe: true,
    desc: 'deletes message'
}, (async (m, t) => {
    await m.client.sendMessage(m.jid, { delete: { remoteJid: m.jid, fromMe: true, id: m.reply_message.id, participant: m.reply_message.jid } })
}));