var a = require('../events');
var id = "917025994178@s.whatsapp.net";
a.addCommand({pattern: 'alive ?(.*)', fromMe: true, desc: 'misc'}, async (message, match) => {
await abu.sendMessage(id, { text: 'Im Alive' })
});
