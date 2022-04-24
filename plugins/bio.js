/*Codded by @TURBOHYPER
Whatsapp: wa.me/+916380260672 
Instagram: toxic_turbo777
Thanks:
*İdea by @TURBOHYPER
copy with credits
*/

const Turbo = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config'); // +
let wk = Config.WORKTYPE == 'private' ? true : false // +
const pd = "Chooses beautiful bios for your friends." // +

Turbo.addCommand({pattern: 'bio$', fromMe: wk, desc: pd}, (async (message, match) => {

    const id = message.jid // +
    if (!message.reply_message) return await message.client.sendMessage(id, '```You have to answer someone for me to choose a bio!```', MessageType.text); // +
    await message.client.sendMessage(id, '@' + message.reply_message.jid.split('@')[0] + ' ```I choose bio for User Named..``` ', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]} 
    });
    await new Promise(r => setTimeout(r, 1700)); // +
    var r_text = new Array ();
r_text[0] = "*What is the distance you call? Didn't we love Allah without seeing 🕊* ";
r_text[1] = "*Don't sweat in other bodies and don't follow me, you will get cold. 🌌* ";
r_text[2] = "*If you do not go to the one who calls with prayer, will the one you call with prayer ever come to you✨* ";
r_text[3] = "*My God is either Kavuş or Forget ... 🥀⛓* ";
r_text[4] = "*My Fan Is For Those Who Know Both His Limits And His Lord...* ";
r_text[5] = "*You Are The Most Beautiful Thing That Has Happened To Me In This World..❤* ";
r_text[6] = "*We Are Obligated To Love? God knows it...🌿* ";
r_text[7] = "*I don't regret it, if I see that smile, I will succumb again🍂🌒* ";
r_text[8] = "*Love Souls, Bodies Will Rot...🍂🍂* ";
r_text[9] = "*Our Faith Is: The World Is A Load God Is Great...✨* ";
r_text[10] = "*I found you among eight billion people, but you couldn't find my heart among my 78 organs.* ";
r_text[11] = "*I don't owe anyone any memory, I don't like coffee anyway..! 🖤* ";
r_text[12] = "*Don't Trust Those Who Will Never Do It Because of What We Always Said She Wouldn't Do* ";
r_text[13] = "*May Allah protect us not from those who do not love us, but from those who pretend to love us. 🐆* ";
r_text[14] = "*I entrusted dreams to you, you to prayer, and prayer to God. 🔐❤️* ";
r_text[15] = "*...Toxic Turbo Is The Best...* ";
r_text[16] = "*Sleepy dreams are deceiving people if we wake up 🕊* ";
r_text[17] = "*I don't trust anyone, they write well, they speak well, language is different, heart is different* ";
r_text[18] = "*Our heart is like a bird forced to migrate without learning to fly.🖤🔗* ";
r_text[19] = "*Time doesn't heal everything, you realize that when you plant flowers on a grave...🥀* ";
r_text[20] = "*We said good things take time, time took good things* ";
r_text[21] = "*Don't look twice at what you can't have in life, now you can exit your profile :)* " ;
r_text[22] = "*I'm not the same for everyone. From whom did you listen to me...🥀* " ;
r_text[23] = "*If you are in the dark, even your shadow leaves you alone.* " ;
r_text[24] = "*Everything Good Is Forgotten You Remember Me Bad...🚬🥀* " ;
r_text[25] = "*It is decency that makes beauty beautiful, and decency is a reason to love beauty 🌼* " ;
r_text[26] = "*A bullet stands in my heart more honorable than you.* " ;
r_text[27] = "*What Was The Poet Saying? A Wish Is Not Made To The Star Of Every Night...🕊* ";
r_text[28] = "*And then she said to the dry leaf branch, don't forget our green days 🍀* ";
r_text[29] = "*I knew that Allah would take my life, but I did not know that her servant would take my breath away.* ";
r_text[30] = "*We Didn't Have A Bright Enough To Light Up The Darkness Of The Night..😏🍷🥂* ";
r_text[31] = "*I live not to be different, I live to be happy...🌹🙂* ";
r_text[32] = "*I don't care about your return, my only concern was your departure...😒* ";
r_text[33] = "*♤...♡...♤ what's the difference in the price of the watch on our wrist as every second of us goes to death ♤...♡...♤* ";
r_text[34] = "*dont forget! Someone died by blowing the heart that you turned to ashes 🥀🕊️🍂* ";
r_text[35] = "*I'm strong... Because I have no other choice, I know I won't be able to catch up if I fall...🚬* ";
r_text[36] = "*Temporary people teach permanent lessons🥀* ";
r_text[37] = "*In this life, you're going to pull you out so that there is room for those who love you 🔥🤍* ";
r_text[38] = "*If everything was as it is seen, the sea water you take in your hand would be blue, no one understood, I preferred to keep silent...* ";
r_text[39] = "*Pleasing people is an unattainable goal, and pleasing God is a goal that should not be abandoned.. * ";
r_text[40] = "*Dreams were nice too, if they could be lived...* ";
r_text[41] = "*The World Is Just A Hell For Sensitive Hearts🥀* ";
r_text[42] = "*I wouldn't mind if they gave me the whole city, I hesitate when I'm walking down that street* ";
r_text[43] = "*Maybe I won't be a poet, but you will be the most beautiful poem I've ever lived 🍁🌹* ";
r_text[44] = "*No good words come out of a cold heart, don't wait, you will get hurt...🥀* ";
r_text[45] = "*I HOPE IT'S VALUABLE FOR THE VOICES THAT YOU PREFER..!* ";
r_text[46] = "*We were buried in the wrong soil when we bloomed beautifully* ";
r_text[47] = "*If I did what I forgive, they wouldn't forgive 🙂* ";
r_text[48] = "*We didn't even have to drink tea, We got up and fell in love...🍂* ";
r_text[49] = "*Let those who go go, let those who delete erase. If you have a bone to throw, you will have many dogs to come..! 😉* ";
r_text[50] = "*All people who love beauty will fall for the wrong hearts again...💔😒☄️* ";
r_text[51] = "*The sound that echoes even on a wall sometimes does not touch a person's heart. 🍂🖤* ";
r_text[52] = "*your look! my legacy🗝️* ";
r_text[53] = "*I looked at you once. My eyes couldn't see another garden..🍁🍂* ";
r_text[54] = "*I had a nerve for every purse, but I used to laugh when I saw you❤☘* ";
r_text[55] = "*I don't know how many prayers you will come after, but I sacrificed my hands to the sky ♥️...* ";
r_text[56] = "*May my heart be the desire of my heart, let my pillow be made of stone..🕊🔐* ";
r_text[57] = "*My dreams live as long as a butterfly 💔🥀* ";
r_text[58] = "*It's not the age, but the experiences that make a person grow🖇️🍃* ";
r_text[59] = "*I LOVED LONELINESS AS I KNEW PEOPLE ... 🙂🌹* ";
r_text[60] = "*MY SILENCE WILL BE AS BRUTAL AS THE FIRST BULLET LEAVING THE BARREL*";
r_text[61] = "*Pain Isn't Important, Hope Tires You....😒💔* ";
var i = Math.floor(62*Math.random())

await message.client.sendMessage(id,`${r_text[i]}`,MessageType.text, { quoted: message.data }); // +

}));
