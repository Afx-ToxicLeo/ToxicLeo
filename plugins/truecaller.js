const {find} = require('abu-bot')
const {command, isPrivate } = require('../lib/');
command({pattern: 'true ?(.*)',type: 'search',fromMe: isPrivate}, async (message, query) => {
let user =  (message.mention[0] || message.reply_message?.jid || query[1]).split("@")[0]
if (!user) return await message.reply("_Need number/reply/mention_");
const trueCaller = async (num) => {try { var res = await find(num,'',message.client.user.id) } catch { var res = false }; return res;}
for (let i = 0; i < 6; i++){
    var _result = await trueCaller(user.replace( /^\D| +/g, ''))
    if (i === 5 || _result === false) {
        return await message.reply("_Error, try again!_")
    } else return await message.reply(_result)
}
});
