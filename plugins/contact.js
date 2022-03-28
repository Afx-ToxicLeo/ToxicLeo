const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'creater ?(.*)', fromMe: false, desc: 'creater number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:ABU-SER [OWNER]\n' // full name
            + 'ORG:ABU-SER;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=917025994178:+91 9074994655\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "ABU-SER [OWNER]", vcard: vcard}, MessageType.contact)
}))
