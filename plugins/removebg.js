const {Module} = require('../main');
const {MODE,RBG_KEY} = require('../config');
const w = MODE == 'public' ? false : true
const fs = require('fs');
const got = require('got');
const FormData = require('form-data');
const stream = require('stream');
const {promisify} = require('util');
const pipeline = promisify(stream.pipeline);
const {saveMessage} = require('./misc/saveMessage');
Module({pattern: 'removebg ?(.*)', fromMe: w,use: 'edit', desc: "Removes image background"}, (async (message, match) => {    
if (message.reply_message === false || message.reply_message.image === false) return await message.sendMessage("*Reply to a photo*");
if (!RBG_KEY) return await message.sendReply("_Get an API key from *https://remove.bg*_\n_Set var *RBG_KEY*_");
        var location = await saveMessage(message.reply_message);
        var form = new FormData();
        form.append('image_file', fs.createReadStream(location));
        form.append('size', 'auto');
        var rbg = await got.stream.post('https://api.remove.bg/v1.0/removebg', {
            body: form,
            headers: {'X-Api-Key': RBG_KEY}
        }); 
        await pipeline(
		    rbg,
		    fs.createWriteStream('rbg.png')
        );
        await message.sendReply(fs.readFileSync('rbg.png'),'image');
    }));
