//codded by PrinceRudh

const rudh = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const anything = require('../files/rudhra');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;
async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
var pmblock_var = ''
async function blockpm() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        pmblock_var = vars.PM_BLOCK
    });
}
blockpm()
var plk = ''
var plk2 = ''
if (Config.LANG == 'EN') plk = 'sorry chatting in pm is not allowed'
if (Config.LANG == 'EN') plk2 = '.block'
if (Config.LANG == 'ML') plk = 'ക്ഷമിക്കണം PM ൽ ചാറ്റിംഗ് അനുവദനീയമല്ല'
if (Config.LANG == 'ML') plk2 = '.block'
rudh.addCommand({on: 'text', fromMe: false, onlyPm: true , deleteCommand: false}, (async (message, match) => {
    if (pmblock_var == 'true' && message.jid !== '919072790587@s.whatsapp.net') {
        let regex1 = anything
        if (!regex1.test(message.message)) {
           await message.client.sendMessage(message.jid,plk, MessageType.text, {quoted: message.data })
           await message.client.sendMessage(message.jid,plk2, MessageType.text);
        }  
    }
}));
