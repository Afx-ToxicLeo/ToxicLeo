const {
    bot,isAdmin
} = require('../lib/');
bot({
    pattern: 'del',
    fromMe: true,
    desc: 'Deletes message for everyone. Supports admin deletion'
}, (async (m, t) => {
    m.jid = m.quoted.key.remoteJid
    if (!m.reply_message) return;
    if (m.quoted.key.fromMe) return await m.client.sendMessage(m.jid, { delete: m.quoted.key })
    if (!m.quoted.key.fromMe) {
    var admin = await isAdmin(m);
    if (!admin) return await m.reply("_I'm not an admin!_")
    return await m.client.sendMessage(m.jid, { delete: m.quoted.key })
    }
}));
bot({
    pattern: 'reboot',
    fromMe: true,
    desc: 'Restarts process. [Not heroku dynos]'
}, (async (m, t) => {
    await m.reply("_Rebooting.._")
    process.exit(0); 
}));
