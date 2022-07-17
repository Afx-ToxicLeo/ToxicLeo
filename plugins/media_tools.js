const {
      Module
  } = require('../main');
  const fs = require('fs');
  const ffmpeg = require('fluent-ffmpeg');
  const {
      saveMessage
  } = require('./misc/saveMessage');
  const {getBuffer} = require('abu-bot');
  const {
      trim,
      AVmix,
      trimVideo
  } = require('abu-bot');
  const {
      MODE
  } = require('../config');
  const {
      getString
  } = require('./misc/lang');
  const {
      bass,
      circle,
      rotate,
      findMusic 
  } = require('./misc/misc');
  const Lang = getString('media');
  const fromMe = MODE == 'public' ? false : true
  Module({
      pattern: 'trim ?(.*)',
      fromMe: fromMe,
      desc: Lang.TRIM_DESC,
      usage: Lang.TRIM_USE,
      use: 'edit'
  }, async (message, match) => {
      if (!message.reply_message || (!message.reply_message.video && !message.reply_message.audio)) return await message.sendReply(Lang.TRIM_NEED_REPLY);
      if (message.reply_message.audio) {
          if (match[1] === '' || !match[1].includes(",")) return await message.sendReply(Lang.TRIM_NEED);
          var savedFile = await saveMessage(message.reply_message);
          var trimmed = await trim(savedFile, match[1].split(",")[0], match[1].split(",")[1], './temp/trim.mp3');
          var result = fs.readFileSync('./temp/trim.mp3');
          await message.client.sendMessage(message.jid, {
              audio: result,
              mimetype: 'audio/mp4',
              ptt: false
          }, {
              quoted: message.data
          })
      }
      if (message.reply_message.video) {
          if (match[1] === '' || !match[1].includes(",")) return await message.sendReply(Lang.TRIM_VIDEO_NEED);
          var savedFile = await saveMessage(message.reply_message);
          trimVideo(savedFile, match[1].split(",")[0], match[1].split(",")[1], "./temp/trim.mp4", async function(video) {
              return await message.sendMessage(video, 'video')
          });
      }
  });
  Module({
    pattern: "black",
    fromMe: fromMe,
    desc: "Audio to black video",
    use: 'edit'
}, async (message, match) => {
    if (!fs.existsSync("./temp/avmix")) {
        fs.mkdirSync("./temp/avmix")
    }
    let files = fs.readdirSync("./temp/avmix/")
    if (!message.reply_message || !message.reply_message.audio) return await message.sendMessage("_Need audio!_");
    var savedFile = await saveMessage(message.reply_message);
        await fs.writeFileSync('./temp/avmix/audio.mp3', fs.readFileSync(savedFile));
        await fs.writeFileSync('./temp/avmix/video.mp4', await getBuffer("https://i.imgur.com/TsesS9x.mp4"));
        await message.sendReply("_Processing..._")
        
    AVmix('./temp/avmix/video.mp4', './temp/avmix/audio.mp3', './temp/avmix/mixed.mp4', async function(video) {
        await message.sendMessage(video, 'video');
        await fs.unlinkSync('./temp/avmix/video.mp4');
        await fs.unlinkSync('./temp/avmix/audio.mp3');
        await fs.unlinkSync('./temp/avmix/mixed.mp4');
        return;
    });
});
  Module({
      pattern: "avmix",
      fromMe: fromMe,
      desc: Lang.AVMIX_DESC,
      use: 'edit'
  }, async (message, match) => {
      if (!fs.existsSync("./temp/avmix")) {
          fs.mkdirSync("./temp/avmix")
      }
      let files = fs.readdirSync("./temp/avmix/")
      if ((!message.reply_message && files.length < 2) || (message.reply_message && !message.reply_message.audio && !message.reply_message.video)) return await message.sendMessage(Lang.AVMIX_NEED_FILES);
      if (message.reply_message.audio) {
          var savedFile = await saveMessage(message.reply_message);
          await fs.writeFileSync('./temp/avmix/audio.mp3', fs.readFileSync(savedFile));
          return await message.sendReply(Lang.AVMIX_AUDIO_ADDED)
      }
      if (message.reply_message.video) {
          var savedFile = await saveMessage(message.reply_message);
          await fs.writeFileSync('./temp/avmix/video.mp4', fs.readFileSync(savedFile));
          return await message.sendReply(Lang.AVMIX_VIDEO_ADDED)
      }
      AVmix('./temp/avmix/video.mp4', './temp/avmix/audio.mp3', './temp/avmix/mixed.mp4', async function(video) {
          await message.sendMessage(video, 'video');
          await fs.unlinkSync('./temp/avmix/video.mp4');
          await fs.unlinkSync('./temp/avmix/audio.mp3');
          await fs.unlinkSync('./temp/avmix/mixed.mp4');
          return;
      });
  });
  Module({
    pattern: "vmix ?(.*)",
    fromMe: fromMe,
    desc: "Merges/Joins two videos",
    use: 'edit'
}, async (message, match) => {
    if (!fs.existsSync("./temp/vmix")) {
        fs.mkdirSync("./temp/vmix")
    }
    let files = fs.readdirSync("./temp/vmix/")
    if ((!message.reply_message && files.length < 2) || (message.reply_message && !message.reply_message.video)) return await message.sendMessage("Give me videos");
    if (message.reply_message.video && files.length == 1) {
        var savedFile = await message.reply_message.download();
        await fs.writeFileSync('./temp/vmix/video1.mp4', fs.readFileSync(savedFile));
        return await message.sendReply("*Added video 2. Type .vmix again to process!*")
    }
    if (message.reply_message.video && files.length == 0) {
        var savedFile = await message.reply_message.download();
        await fs.writeFileSync('./temp/vmix/video2.mp4', fs.readFileSync(savedFile));
        return await message.sendReply("*Added video 1*")
    }
      async function merge(files, folder, filename)
{
  return new Promise((resolve, reject) => {
  
      var cmd = ffmpeg({priority: 20}).fps(29.7)
      .on('error', function(err) {
          resolve()
      })
      .on('end', function() {
          resolve(fs.readFileSync(folder + "/" + filename))
      });

      for (var i = 0; i < files.length; i++)
      {
          cmd.input(files[i]);
      }
  
      cmd.mergeToFile(folder + "/" + filename, folder);
  });
}  
     if (files.length === 2){
      await message.sendReply("*Merging videos..*")
      await message.sendMessage(await merge(['./temp/vmix/video1.mp4','./temp/vmix/video2.mp4'],'./temp','merged.mp4'), 'video');
      await fs.unlinkSync('./temp/vmix/video1.mp4');
        await fs.unlinkSync('./temp/vmix/video2.mp4');
        return;  
     }
});
  Module({
      pattern: "slowmo",
      fromMe: fromMe,
      desc: "Video to smooth slow motion",
      use: 'edit'
  }, async (message, match) => {
      if (!message.reply_message || !message.reply_message.video) return await message.sendReply("*Reply to a video*");
      var savedFile = await saveMessage(message.reply_message);
      await message.sendReply("*Motion interpolating and rendering..*");
      ffmpeg(savedFile)
          .videoFilters('minterpolate=fps=120')
          .videoFilters('setpts=4*PTS')
          .noAudio()
          .format('mp4')
          .save('./temp/slowmo.mp4')
          .on('end', async () => {
              return await message.sendMessage(fs.readFileSync('./temp/slowmo.mp4'), 'video')
          });
  });
 Module({
      pattern: "circle",
      fromMe: fromMe,
      desc: "Sticker/photo to circle crop",
      use: 'edit'
  }, async (message, match) => {
      await circle(message);
  });
  Module({
      pattern: "gif",
      fromMe: fromMe,
      desc: "Video to gif with audio"
  }, async (message, match) => {
      if (!message.reply_message || !message.reply_message.video) return await message.sendReply("*Reply to a video*");
      var savedFile = await saveMessage(message.reply_message);
      await message.sendReply("*Rendering..*");
      ffmpeg(savedFile)
          .fps(13)
          .videoBitrate(500)
          .save('./temp/agif.mp4')
          .on('end', async () => {
              return await message.client.sendMessage(message.jid, {
                  video: fs.readFileSync('./temp/agif.mp4'),
                  gifPlayback: true
              });
          });
  });
  Module({
      pattern: "interp ?(.*)",
      fromMe: fromMe,
      desc: "Increases video's frame rate (FPS)",
      use: 'edit'
  }, async (message, match) => {
      if (!message.reply_message || !message.reply_message.video) return await message.sendReply("*Reply to a video*");
      if (match[1] <= 10) return await message.sendMessage('*Low FPS Value ⚠️*\n*Minimun = 10*');
      if (match[1] >= 500) return await message.sendMessage('*High FPS Value ⚠️*\n*Maximum = 500*')
      var savedFile = await saveMessage(message.reply_message);
      await message.sendReply("*Motion interpolating and rendering..*");
      ffmpeg(savedFile)
          .videoFilters(`minterpolate=fps=${match[1]}:mi_mode=mci:me_mode=bidir`)
          .format('mp4')
          .save('./temp/interp.mp4')
          .on('end', async () => {
              return await message.sendMessage(fs.readFileSync('./temp/interp.mp4'), 'video')
          });
  });
Module({
      pattern: "find ?(.*)",
      fromMe: fromMe,
      desc: "Finds music name. Like Shazam",
      usage: ".find reply to a music",
      use: 'search'
  }, async (message, match) => {
      if (!message.reply_message || !message.reply_message.audio) return await message.sendReply("*Reply to a music*");
      if (message.reply_message.duration > 60) return await message.sendMessage('*Audio too large! Use .trim command and cut the audio to < 60*');
      var savedFile = await saveMessage(message.reply_message);
      try { var data = await findMusic(fs.readFileSync(savedFile)); } catch { return await message.sendReply("*No matching results found!*"); }
      try { var itest = data.title } catch { return await message.sendReply("*No matching results found!*"); }
      var templateButtons = [];
  if ("youtube" in data.external_metadata){
templateButtons.push(
    {index: 1, urlButton: {displayText: 'YouTube ▶️', url: 'https://youtu.be/'+data.external_metadata?.youtube?.vid}}
)}
if ("spotify" in data.external_metadata){
templateButtons.push(
    {index: 2, urlButton: {displayText: 'Spotify ▶️', url: 'https://open.spotify.com/track/'+data.external_metadata?.spotify?.track?.id}}
)}
function getDuration(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
const templateMessage = {
    text:  `*Title:* ${data.title}
*Artists:* ${data.artists?.map(e => e.name + " ")}
*Released on:* ${data.release_date}
*Duration:* ${getDuration(data.duration_ms)}
*Album:* ${data.album?.name}
*Genres:* ${data.genres?.map(e => e.name + " ")}
*Label:* ${data.label}`,
    footer: '🎼 Listen to full music on:',
    templateButtons: templateButtons
}
await message.client.sendMessage(message.jid, templateMessage)
  });
  Module({pattern: "rotate ?(.*)",fromMe: fromMe}, async (message, match) => {
    if (!match[1] || !message.reply_message || !message.reply_message.video) return await message.sendReply("*Reply to a video*\n*.rotate left|right|flip*");        
    var file = await message.reply_message.download();
    var angle = "1"
    if (match[1] === "left") angle = "2" 
    if (match[1] === "flip") angle = "3" 
    await message.sendReply(fs.readFileSync(await rotate(file,angle)),'video')
});
