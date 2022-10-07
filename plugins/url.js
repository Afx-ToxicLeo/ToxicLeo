const {MODE,IMGBB_KEY} = require('../config');
async function webpUpload(file){
    return new Promise(async (resolve)=>{
    const webpupload = require("imgbb-uploader");
    for (let key of IMGBB_KEY){
    const options = {apiKey: key,imagePath: file};
    var res = await webpupload(options)
    if (res.url) return resolve(res.url);
    }
});
}
const {bot,isPublic} = require('../lib/');const ffmpeg = require('fluent-ffmpeg');
const {upload} = require('abu-bot');
bot({pattern: 'url ?(.*)', fromMe: isPublic,type: 'utility', desc:'Uploads image to imgur.com'},async (m) => { 
if (m.reply_message.sticker){
    return await m.client.sendMessage(m.jid,{text:"_"+(await webpUpload(await m.reply_message.download()))+"_"},{quoted: m.quoted})
}
else if (m.reply_message.audio){
    if (m.reply_message.duration > 90) return await m.client.sendMessage(m.jid,{text:'_Audio too large. Try below 90 seconds!_'},{quoted: m.quoted});
    var q = await m.reply_message.download();
    await m.sendReply("_Converting to video & uploading..._")
    ffmpeg(q).outputOptions(["-y", "-filter_complex", "[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]", "-map", "[vid]", "-map 0:a"]).save('output.mp4').on('end', async () => {
    try { var res = await upload('output.mp4'); } catch {return await m.client.sendMessage(m.jid,{text:"_Failed to upload file!_"},{quoted: m.quoted});}
    return await m.client.sendMessage(m.jid,{text:"_"+res.link+"_"},{quoted: m.quoted});
});
}
else if (m.reply_message.image || m.reply_message.video){
try { await m.client.sendMessage(m.jid,{text:"_"+(await upload(await m.reply_message.download())).link+"_"},{quoted: m.quoted}) } catch {return await m.client.sendMessage(m.jid,{text:"_Failed to upload file!_"},{quoted: m.quoted});}
}
else return await m.sendReply("_Reply to image|video|audio|sticker_");
});
