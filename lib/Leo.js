const fs = require('fs');
const got = require('got');
const axios = require('axios');
const Config = require('../config');
const maker = require("mumaker");
let N_T = "Need Text."
let T_L = "Text is too long."
let T_L_1 = "First text is too long."
let T_L_2 = "Secand text is too long."
let T_W = "Can use two words"
const ll ="*```Enter a word```"
const Ln = "Free Fire logo maker"
const codee = "*_anime1 to anime16"
const code = "*_50 ff LOGO PACK_*\n\n*🧞‍♂️.ff01 : Makes ff logo*\n\n🧞‍♂️.ff02 : Makes ff logo**\n\n*🧞‍♂️.ff03 : Makes ff logo*\n\n🧞‍♂️.ff04 : Makes ff logo*\n\n🧞‍♂️.ff5 : Makes ff logo*\n\n🧞‍♂️.ff6 : Makes ff logo*\n\n🧞‍♂️.ff07 : Makes ff logo*\n\n🧞‍♂️.ff08 : Makes ff logo*\n\n🧞‍♂️.ff09 : Makes ff logo*\n\n🧞‍♂️.ff10 : Makes ff logo*\n\n🧞‍♂️.ff12 : Makes ff logo*\n\n🧞‍♂️.ff13 : Makes ff logo*\n\n🧞‍♂️.ff14 : Makes ff logo*\n\n🧞‍♂️.ff15 : Makes ff logo*\n\n🧞‍♂️.ff16 : Makes ff logo*\n\n🧞‍♂️.ff17 : Makes ff logo*\n\n🧞‍♂️.ff18 : Makes ff logo*\n\n🧞‍♂️.ff19 : Makes ff logo*\n\n🧞‍♂️.ff20 : Makes ff logo*\n\n🧞‍♂️.ff21 : Makes ff logo*\n\n🧞‍♂️.ff22 : Makes ff logo*\n\n🧞‍♂️.ff23 : Makes ff logo*\n\n🧞‍♂️.ff24 : Makes ff logo*\n\n🧞‍♂️.ff25 : Makes ff logo*\n\n🧞‍♂️.ff26 : Makes ff logo*\n\n🧞‍♂️.ff27 : Makes ff logo*\n\n🧞‍♂️.ff28 : Makes ff logo*\n\n🧞‍♂️.ff29 : Makes ff logo*\n\n🧞‍♂️.ff30 : Makes ff logo*\n\n🧞‍♂️.ff31 : Makes ff logo*\n\n🧞‍♂️.ff32 : Makes ff logo*\n\n🧞‍♂️.ff33 : Makes ff logo*\n\n🧞‍♂️.ff34 : Makes ff logo*\n\n🧞‍♂️.ff35 : Makes ff logo*\n\n🧞‍♂️.ff36 : Makes ff logo*\n\n🧞‍♂️.ff37 : Makes ff logo*\n\n🧞‍♂️.ff38 : Makes ff logo*\n\n🧞‍♂️.ff39 : Makes ff logo*\n\n🧞‍♂️.ff40 : Makes ff logo*\n\n🧞‍♂️.ff41 : Makes ff logo*\n\n🧞‍♂️.ff42 : Makes ff logo*\n\n🧞‍♂️.ff43 : Makes ff logo*\n\n🧞‍♂️.ff44 : Makes ff logo*\n\n🧞‍♂️.ff45 : Makes ff logo*\n\n🧞‍♂️.ff46 : Makes ff logo*\n\n🧞‍♂️.ff47 : Makes ff logo*\n\n🧞‍♂️.ff48 : Makes ff logo*\n\n🧞‍♂️.ff49 : Makes ff logo*\n\n🧞‍♂️.ff50 : Makes ff logo*\n\n"
let fileName = "GneratedMeme"
let {memGen} = require('whatsapp-bot-pack');

function add(num1,num2){
let result = -(-num1 - num2)
data = num1+"+"+num2+"="+result;
return data;
};

function subtract(num1,num2){
let result = num1 - num2
data = num1+"-"+num2+"="+result;
return data;
};

function multiply(num1,num2){
let result = num1*num2
data = num1+"×"+num2+"=+"+result;
return data;
};

function division(num1,num2){
let result =( num1 / num2)
data = num1+"÷"+num2+"="+result;
return data;
};

function qrcode(text){
           return `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`;
};

function base64e(text){
           return btoa(text);
}

function base64d(text){
           return atob(text);
}

function age(dob) { 
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms); 
  
    return "your age is : "+Math.abs(age_dt.getUTCFullYear() - 1970);
}
function anime(){
    let r_text = new Array();
    r_text[0] = "https://i.ibb.co/FwPP04q/images.jpg";
    r_text[1] = "https://i.ibb.co/GH2tWJ4/images-1.jpg";
    r_text[2] = "https://i.ibb.co/Mf79pVH/download.jpg";
    r_text[3] = "https://i.ibb.co/b11BDWH/images-2.jpg";
    r_text[4] = "https://i.ibb.co/7v1m94x/images-3.jpg";
    r_text[5] = "https://i.ibb.co/vdKJxNX/images-4.jpg";
    r_text[6] = "https://i.ibb.co/cvKvyzR/images-5.jpg";
    r_text[7] = "https://i.ibb.co/WWRt8vZ/images-6.jpg";
    r_text[8] = "https://i.ibb.co/m8Xg7Gj/images-7.jpg";
    r_text[9] = "https://i.ibb.co/FDYQHzB/images-8.jpg";
    r_text[10] = "https://i.ibb.co/fFTNXcy/images-9.jpg";
    r_text[11] = "https://i.ibb.co/rygwb0Q/images-10.jpg";
    r_text[12] = "https://i.ibb.co/ts8y9rC/images-11.jpg";
    r_text[13] = "https://i.ibb.co/VMHd02c/images-12.jpg";
    r_text[14] = "https://i.ibb.co/D1j3Np6/images-13.jpg";
    r_text[15] = "https://i.ibb.co/qWnhqVf/images-14.jpg";
    r_text[16] = "https://i.ibb.co/J7tr09N/images-15.jpg";
    r_text[17] = "https://i.ibb.co/NVhyQ1V/images-16.jpg";
    r_text[18] = "https://i.ibb.co/PcV78Mv/images-17.jpg";
    r_text[19] = "https://i.ibb.co/hYFY5PZ/images-18.jpg";
    r_text[20] = "https://i.ibb.co/n0vd5yR/images-19.jpg";
    r_text[21] = "https://i.ibb.co/hybc9KX/images-20.jpg";
    r_text[22] = "https://i.ibb.co/6JW0sL7/images-21.jpg";
    r_text[23] = "https://i.ibb.co/8MX592D/images-22.jpg";
    r_text[24] = "https://i.ibb.co/gPtrHPW/images-23.jpg";
    r_text[25] = "https://i.ibb.co/mGtWXyW/images-24.jpg";
    r_text[26] = "https://i.ibb.co/HD4rrbn/images-25.jpg";
    r_text[27] = "https://i.ibb.co/8mG4Xht/images-26.jpg";
    r_text[28] = "https://i.ibb.co/yF8qzgQ/images-27.jpg";
    r_text[29] = "https://i.ibb.co/vvhTtL9/images-28.jpg";
    r_text[30] = "https://i.ibb.co/x8WZS1G/images-29.jpg";
    r_text[31] = "https://i.ibb.co/hsb9c1N/images-30.jpg";
    r_text[32] = "https://i.ibb.co/tQ2r1d1/images-31.jpg";
    r_text[33] = "https://i.ibb.co/5Mr70MY/images-32.jpg";
    r_text[34] = "https://i.ibb.co/340nk6r/images-33.jpg";
    r_text[35] = "https://i.ibb.co/3yWYZ9X/images-34.jpg";
    r_text[36] = "https://i.ibb.co/59G5Gpc/images-35.jpg";
    r_text[37] = "https://i.ibb.co/j48QYXt/images-36.jpg";
    r_text[38] = "https://i.ibb.co/Nx2FHGB/images-37.jpg";
    r_text[39] = "https://i.ibb.co/7tc4Hph/images-38.jpg";
    r_text[40] = "https://i.ibb.co/jkKc78B/images-39.jpg";
    r_text[41] = "https://i.ibb.co/RTqRWn7/images-40.jpg";
    r_text[42] = "https://i.ibb.co/kS6LW3q/images.jpg";
    r_text[43] = "https://i.ibb.co/THdY0MS/images-1.jpg";
    r_text[44] = "https://i.ibb.co/n0P7KVt/images-2.jpg";
    r_text[45] = "https://i.ibb.co/MnZn5Tx/images-3.jpg";
    r_text[46] = "https://i.ibb.co/SVwMXrG/images-4.jpg";
    r_text[47] = "https://i.ibb.co/2jZb1mc/images-5.jpg";
    r_text[48] = "https://i.ibb.co/sPhWTxD/images-7.jpg";
    r_text[49] = "https://i.ibb.co/pjcFyzr/images-6.jpg";
    r_text[50] = "https://i.ibb.co/XFSmcfj/images-9.jpg";
    r_text[51] = "https://i.ibb.co/TM8Qxt9/images-8.jpg";
    r_text[52] = "https://i.ibb.co/f9RQ30f/images-10.jpg";
    r_text[53] = "https://i.ibb.co/9ZRBQHP/images-11.jpg";
    r_text[54] = "https://i.ibb.co/Sm9PmLT/images-12.jpg";
    r_text[55] = "https://i.ibb.co/B2BzjdR/images-13.jpg";
    r_text[56] = "https://i.ibb.co/HB8kDqr/images-14.jpg";
    r_text[57] = "https://i.ibb.co/r6HXkC6/images-15.jpg";
    r_text[58] = "https://i.ibb.co/6BMF531/images-16.jpg";
    r_text[59] = "https://i.ibb.co/47b8YYW/images-17.jpg";
    r_text[60] = "https://i.ibb.co/bzZ66dN/images-18.jpg";
    r_text[61] = "https://i.ibb.co/kmKGSJ1/images-19.jpg";
    r_text[62] = "https://i.ibb.co/nDfrfgd/images-20.jpg";
    r_text[63] = "https://i.ibb.co/bXf8Tj1/images-21.jpg";
    r_text[64] = "https://i.ibb.co/4pQxm7k/images-22.jpg";
    r_text[65] = "https://i.ibb.co/ngLqQdh/images-23.jpg";
    r_text[66] = "https://i.ibb.co/Y3RtBPB/images-24.jpg";
    r_text[67] = "https://i.ibb.co/0y2vDZ8/images-25.jpg";
    r_text[68] = "https://i.ibb.co/0Gzdx1d/images-26.jpg";
    r_text[69] = "https://i.ibb.co/54wVtm8/images-27.jpg";
    r_text[70] = "https://i.ibb.co/bQkJTZm/images-28.jpg";
    r_text[71] = "https://i.ibb.co/hCNMWqG/images-29.jpg";
    r_text[72] = "https://i.ibb.co/qDphPx9/images-30.jpg";
    r_text[73] = "https://i.ibb.co/M8jRW8N/IMG-20210410-WA0308.png";
    r_text[74] = "https://i.ibb.co/k1nmStf/IMG-20210410-WA0309.jpg";
    r_text[75] = "https://i.ibb.co/Ks5pgsB/IMG-20210410-WA0310.jpg";
    r_text[76] = "https://i.ibb.co/0YNzZxQ/IMG-20210410-WA0317.jpg";
    r_text[77] = "https://i.ibb.co/T0KbLFN/IMG-20210410-WA0318.jpg";
    r_text[78] = "https://i.ibb.co/wgQWTKy/IMG-20210410-WA0319.jpg";

    let i = Math.floor(79*Math.random())
    return r_text[i]
}


function ffpack(){
   return code
  };

async function ff1(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/ecf60ef31d7e75c2620fd.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff2(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/db68993a2656b4748a16a.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff3(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/4cc2fe3ca2a712d3b14cc.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff4(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/0a25356767c7833bbd9ca.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff5(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/33eb446f4132e76a2fd58.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff6(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/2f7de65a46ed366a63676.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
async function ff7(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/e5f8d6f2e9f9000ebe3d9.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff8(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/6090aadefff57762e8b35.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff9(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/6ad8890337f9f2ea3b92a.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff10(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/244312383300b34f99bcc.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff11(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/b670c4eca0fafdb88a7f0.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff12(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/95a088f7b0453d4d82b7a.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff13(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/fd7500684c9ae986befc3.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff14(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/1e962653c4412f5271844.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff15(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/24483aa07e99edad88b4c.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff16(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/129a6861e1efdfd0f7bca.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff17(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/deab8459bd6d06b4f9421.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff18(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/696f93289f32687d3b4f7.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff19(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/f0145f46dff1ed493e62b.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff20(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/f577262bce9b3733402ea.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff21(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/099f8580a45433eb6688c.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff22(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/a1fe3fe9e295c24256ede.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff23(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/2056e2cdd3a30971da0a6.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff24(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/c730c8c57cfccb7756dc4.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
async function ff25(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/d3749dfe51e3f13012e8e.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff26(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/f376a881b40c1e994d75d.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff27(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/1d307457e0778ae9b0d44.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
   async function ff28(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/bf886fc083f66fb404ff1.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff29(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/d60199bc191c261497813.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff30(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/a4c9fa2db7598d876345b.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff31(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/0c87d73846b138193b203.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff32(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/c41f0c5ec4a3874dfd7fe.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff33(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/8c082e45671f2726c4010.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff34(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/dd660681c36a3126c590f.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff35(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/6c1412d523455abb2677a.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff36(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/a421f4d85a38545be4926.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff37(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/f0568921ca66fc0b01b83.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff38(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/816aaa82629bfa202f3d4.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff39(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/91ec01a9b6375b414803c.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff40(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/5e0c5e4999b8aa21c021f.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff41(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/0a9ae825b02db2cc591bb.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff42(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/0df898e2ad77b8f69f91c.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
async function ff43(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/e354930c0989a3077485e.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff44(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/816aaa82629bfa202f3d4.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff45(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/bc64365aa73d60de3dcfd.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
 async function ff46(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/b82196ba630383df9da76.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
  async function ff47(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/8013933a6603cf2d75f94.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
async function ff48(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/4cd1004d8c8f3a800138f.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}

 async function ff49(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/7e99ffe44f490fd5ba4bf.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}

async function ff50(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/816aaa82629bfa202f3d4.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}

function animepack(){

return codee
 
 }
 
async function an1(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/24e13243ac6d00a34b54c.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
    
async function an2(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/866958cf4f68ebf179f31.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
        
async function an3(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/ad5fb1e028efc3a2aacd1.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
        
async function an4(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/99aba189708b7946a2613.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
        
async function an5(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/a8c84aeec0cf5607c383f.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
        
async function an6(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/62099f53c76e000118007.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}

async function an7(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/f3301e400a1b90847fed4.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
        
async function an8(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/8f6a01ead21040c6681ff.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
           });
    });
}
        
async function an9(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/79af43d68f786bafc82d8.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
      });
    });
}
        
async function an10(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/7d6adafc332ec19864364.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
        });
    });
}
        
async function an11(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/d4542b688fb1fe8908453.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
     });
   });
}
        
async function an12(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/fc861fc4f1b0ef3b1631c.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
     });
  });
}

async function an13(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/1ddf5eab3b01e62bc56ea.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
     });
  });
}
        
async function an14(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/3331055329b4faa1db1fc.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
     });
  });
}
        
async function an15(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/07fa6f51c56c3e295fbeb.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
     });
  });
}
        
async function an16(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/07fa6f51c56c3e295fbeb.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
     });
  });
}      
        
async function an17(text){
return new Promise(async(resolve,reject) => {
        let options = {
    imageURL: 'https://telegra.ph/file/3dd0947d35bdd83aaf3e1.jpg', // URL of image
    topText: '', // optionel
    top_Pos : 10,//optionel
    bottomText : text, // bottom text of meme
    bot_Pos : 135,//optionel
    fileName: fileName, //optionel
}

memGen(options, async(res, error) => {
    let ttinullimage = fs.readFileSync(res.fileName);
    await resolve(ttinullimage)
     });
  });
}
 
function bts(){
    let r_text = new Array();
        r_text[0] = "https://i.pinimg.com/originals/70/a3/6e/70a36ef5cdfc32d7fbc37694a3f0d143.jpg";
        r_text[1] = "https://i.pinimg.com/originals/b9/84/d9/b984d909ce4bc24791c7751185bd3a37.jpg";
        r_text[2] = "https://i.pinimg.com/736x/63/fb/79/63fb7998f262ff38c51918b7650d2bb8.jpg";
        r_text[3] = "https://i.pinimg.com/originals/70/22/f7/7022f75ac0116c7b5ee792e808d99d69.jpg";
        r_text[4] = "https://i.pinimg.com/736x/a2/93/36/a2933650339024a3b5a122ea43abaf70.jpg";
        r_text[5] = "https://i.pinimg.com/originals/22/9c/c0/229cc000b3a602846463efa7e39fec1a.jpg";
        r_text[6] = "https://i.pinimg.com/736x/68/e9/08/68e9083ae7718d9e40aa77e930c56b11.jpg";
        r_text[7] = "https://i.pinimg.com/736x/3d/ae/83/3dae83584e9ff8a9e3079cec425bcb24.jpg";
        r_text[8] = "https://i.pinimg.com/originals/73/a9/2b/73a92be0bf242fa6e4980a1a7ff8685b.jpg";
        r_text[9] = "https://i.pinimg.com/736x/08/41/ee/0841eeb67c9886583f014c2326748196.jpg";
        r_text[10] = "https://i.pinimg.com/736x/f7/f2/eb/f7f2eb2bc31eca220b5d8b513282a921.jpg";
        r_text[11] = "https://i.pinimg.com/originals/2e/74/92/2e7492cf7f7a0843bddc839ec3fb4bde.jpg";
        r_text[12] = "https://i.pinimg.com/originals/19/4a/73/194a730cf87eec18db8a58138ad4b346.jpg";
        r_text[13] = "https://i.pinimg.com/736x/ae/ba/64/aeba640176351406c67281e0db5a8366.jpg";
        r_text[14] = "https://i.pinimg.com/736x/9b/92/f3/9b92f381e1c47060fda405c3c1d9bb5e.jpg";
        r_text[15] = "https://i.pinimg.com/originals/8f/4e/fe/8f4efe6476dee95bf219920f77244c9e.jpg";
        r_text[16] = "https://i.pinimg.com/originals/19/ee/b5/19eeb51de08641fcab88de1baf17d2cd.jpg";
        r_text[17] = "https://i.pinimg.com/originals/2c/97/4a/2c974ac16c266f95e46a770c99dc4cca.jpg";
        r_text[18] = "https://i.pinimg.com/474x/ec/02/0f/ec020f210be666608f6e021e5e0678af.jpg";
        r_text[19] = "https://i.pinimg.com/originals/6f/73/c9/6f73c9adb73a828098075094cea44147.jpg";
        r_text[20] = "https://i.pinimg.com/originals/97/03/b7/9703b7d55d6a005b4d71fbc987f85dc1.jpg";
        r_text[21] = "https://i.pinimg.com/originals/05/6e/cb/056ecb9ed1a7f072f97ddd3be3589a3c.jpg";
        r_text[22] = "https://i.pinimg.com/736x/2d/68/01/2d680149d52bc55a0b769a4ff3ad8d8b.jpg";
        r_text[23] = "https://i.pinimg.com/736x/fd/ae/4b/fdae4bec62a46b8521474fb71a2d4b98.jpg";
        r_text[24] = "https://i.pinimg.com/736x/ef/4a/ec/ef4aeca0298bd2864b5f61cb7a96d5a3.jpg";
        r_text[25] = "https://i.pinimg.com/736x/42/70/84/427084505b5c3bfb641b0b94496094de.jpg";
        r_text[26] = "https://i.pinimg.com/originals/db/d0/3f/dbd03f8837b64a1f2fad117f637391f3.jpg";
        r_text[27] = "https://i.pinimg.com/originals/7c/ed/51/7ced51d33a936a0c81c5c1b8856e8ea1.jpg";
        r_text[28] = "https://i.pinimg.com/originals/fd/48/24/fd48244f2935118b270114f58ebd96d.jpg";
        r_text[29] = "https://i.pinimg.com/736x/20/27/98/20279826c5c57369e310a211cb84ccb9.jpg";
        r_text[30] = "https://i.pinimg.com/originals/ca/8f/2e/ca8f2ef0a088d0cb6b99f59081c583ac.jpg";
        r_text[31] = "https://i.pinimg.com/736x/80/58/bf/8058bffb012fab49202ecd95451ede5.jpg";
        r_text[32] = "https://i.pinimg.com/550x/9b/2c/02/9b2c021f43b116f056eb761f227f5223.jpg";
        r_text[33] = "https://i.pinimg.com/736x/47/76/cc/4776cccfc82e54a2d883182c22a2112a.jpg";
        r_text[34] = "https://i.pinimg.com/736x/1c/93/0c/1c930c32a7872f9c77c3285270f14510.jpg";
        r_text[35] = "https://i.pinimg.com/736x/ea/97/e2/ea97e2b9a0e0fcece2d2b621797cf125.jpg";
        r_text[36] = "https://media.vogue.co.jp/photos/5f1e5e0c4e92e139851de634/master/w_1280,c_limit/MOKE_BTS_VOGUE%20Japa2972M_Q.jpg";
        r_text[37] = "https://i.pinimg.com/originals/24/54/00/2454007c5e79fd1efb1b6f226ea0ea2f.jpg";
        r_text[38] = "https://i.pinimg.com/736x/3e/5d/02/3e5d02282beafc3ce7738465c1e254d4.jpg";
        r_text[39] = "https://i.pinimg.com/originals/ef/ec/65/efec65bc3738f255e105b58040226c06.jpg";
        r_text[40] = "https://i.pinimg.com/736x/df/2b/47/df2b47a0a997027f737f0c730a9f2c2.jpg";
        r_text[41] = "https://i.pinimg.com/originals/7f/20/1d/7f201dea8189c75d5b019f48a17a139b.jpg";
        r_text[42] = "https://i.pinimg.com/736x/f8/b4/0d/f8b40dde17211ef08e9e17968690bb1d.jpg";
        r_text[43] = "https://i.pinimg.com/736x/b0/0/74/b00746f52549684f77de9822d9ad319.jpg";
        r_text[44] = "https://i.pinimg.com/736x/28/b1/0e/28b10e73a71c2c1009e9d58835fa2216.jpg";
        r_text[45] = "https://i.pinimg.com/736x/00/fd/7c/00fd7c981e7bae7ac68584c4b2283d3a.jpg";
        r_text[46] = "https://i.pinimg.com/originals/5c/35/75/5c3570db80e3697540a4ec1c42ac4e9.jpg";
        r_text[47] = "https://i.pinimg.com/736x/a6/fa/8f/a6fa8f772e52140ccb62ae1017d9b33.jpg";
        r_text[48] = "https://i.pinimg.com/originals/af/44/ca/af44cad6187daf0f12e7cd08d107a236.jpg";
        r_text[49] = "https://i.pinimg.com/originals/0/70/f4/070f456784aab7c289150dd6f27f5df.jpg";
        r_text[50] = "https://i.pinimg.com/736x/18/5e/60/185e6031af523a25f83acdf15ec11a5d.jpg";
        r_text[51] = "https://i.pinimg.com/236x/8f/93/60/8f9360c8d3cc907634c12a75b5168819.jpg";
        r_text[52] = "https://i.pinimg.com/736x/11/b6/ea/11b6ea7b59027950b5cbcbc83589c81f.jpg";
        r_text[53] = "https://i.pinimg.com/736x/e2/fa/f8/e2faf8a4ef078f45de1aa6797398d630.jpg";
        r_text[54] = "https://i.pinimg.com/originals/2d/e1/d9/2de1d99f283d03aa11bd1f863ede8146.jpg";
        r_text[55] = "https://i.pinimg.com/736x/ca/31/50/ca315072d5d95d2c6aead68d742cb460.jpg";
        r_text[56] = "https://i.pinimg.com/736x/82/41/06/82410675c00e1c8e62fca8e125a8431f.jpg";
        r_text[57] = "https://i.pinimg.com/474x/2c/dd/5b/2cdd5bd8c35ebcf8f96d5e11e8b75851.jpg";
        r_text[58] = "https://i.pinimg.com/736x/51/ca/c7/51cac7ad1659566e636093aab1dc416a.jpg";
        r_text[59] = "https://i.pinimg.com/550x/a5/e2/37/a5e2377d328461b9c9683ad7c2229e01.jpg";
        r_text[60] = "https://i.pinimg.com/736x/86/36/0b/86360b460bec54463966de8e7ec1a964.jpg";
        r_text[61] = "https://i.pinimg.com/736x/40/3a/f7/403af74c0c8b5967cbcd51f4b705bfed.jpg";
        r_text[62] = "https://i.pinimg.com/236x/96/89/0a/96890a2368db9315ac96b91adfec40e.jpg";
        r_text[63] = "https://i.pinimg.com/originals/aa/d7/d8/aad7d805a586ebd87e10f55e2a8635d.jpg";
        r_text[64] = "https://i.pinimg.com/736x/67/ff/1d/67ff1dcfe0e9a365b51ec3add06c02e6.jpg";
        r_text[65] = "https://i.pinimg.com/originals/41/4f/13/414f13e97fd81bf1afcbbe7ba121b818.jpg";
        r_text[66] = "https://i.pinimg.com/originals/f2/05/1e/f2051e061e9e740207d93ac78449ac97.jpg";
        r_text[67] = "https://i.pinimg.com/236x/f9/6b/06/f96b0608618f26d8850207a1e989ed2f.jpg";
        r_text[68] = "https://i.pinimg.com/736x/8c/5c/ea/8c5cead342afce7f34dc3a60dd85d917.jpg";
        r_text[69] = "https://i.pinimg.com/736x/64/15/d3/6415d3ec9735ab1fc112a8a07b6d59ab.jpg";
        r_text[70] = "https://i.pinimg.com/originals/a9/66/bb/a966bbfee865517113e4c438e2591a08.jpg";
        r_text[71] = "https://i.pinimg.com/236x/82/18/91/8218914d72876abc41a196e35d80698f.jpg";
        r_text[72] = "https://i.pinimg.com/236x/6f/03/9c/6f039cf3cef5f668b6dff0db9e310609.jpg";
        r_text[73] = "https://i.pinimg.com/736x/93/3c/a3/933ca3450d94986f2b2024dbcbf5dcd6.jpg";
        r_text[74] = "https://i.pinimg.com/236x/32/b0/a4/32b0a42b50741043e6fc6cc4cd8df23.jpg";
        r_text[75] = "https://i.pinimg.com/236x/77/5a/08/775a08d33ff520185b2dd7cea7959bf5.jpg";
        r_text[76] = "https://i.pinimg.com/736x/84/a6/28/84a6282551fef6c1b63793f830f5ddf5.jpg";
        r_text[77] = "https://i.pinimg.com/736x/ee/60/69/ee6069d32f1a921b2d157eb7ad7a0088.jpg";
        r_text[78] = "https://i.pinimg.com/736x/7d/79/3a/7d793aa0f9545597892771623b445d6a.jpg";
        r_text[79] = "https://i.pinimg.com/originals/33/ab/d5/33abd50670d2e2d158bae1eabd4d7b0a.jpg";
        r_text[80] = "https://i.pinimg.com/originals/90/60/e6/9060e632afb86b3cf40818d5f6175f4d.jpg";
        r_text[81] = "https://i.pinimg.com/736x/2a/44/87/2a4487cd9626411a5807e580fe391d14.jpg";
        r_text[82] = "https://i.pinimg.com/originals/2c/f7/96/2cf7962fc4df38c41b1a9188751c4c87.jpg";
        r_text[83] = "https://i.pinimg.com/236x/dc/bf/4b/dcbf4b890a1f617143ca1446cf4b16f5.jpg";
        r_text[84] = "https://i.pinimg.com/originals/02/1f/f6/021ff69c6c6e0d427ca0181fa93383af.jpg";
        r_text[85] = "https://i.pinimg.com/originals/8c/f4/62/8cf46233fa59e68faf104a9b9fa9cec.jpg";
        r_text[86] = "https://i.pinimg.com/originals/77/82/e7/7782e7f820e9c08c36f4560f03685cdd.jpg";
        r_text[87] = "https://i.pinimg.com/736x/57/45/25/57452520cc20bb8cc1cff7a463cd9a86.jpg";
        r_text[88] = "https://i.pinimg.com/236x/33/a2/cd/33a2cd697b0dd21dd2224323874bd56a.jpg";
        r_text[89] = "https://i.pinimg.com/236x/f9/d4/82/f9d4822169bdaaa6ad2df79c837638e4.jpg";
        r_text[90] = "https://i.pinimg.com/736x/8b/20/8c/8b208cb2680d3d964791d54ea33765c7.jpg";
        r_text[91] = "https://i.pinimg.com/564x/4c/aa/28/4caa28b4dc6d4f7aafbefdc995ea9eb1.jpg";
        r_text[92] = "https://i.pinimg.com/736x/0d/b7/10/0db710df783cdb39cc28375635af3ef3.jpg";
        r_text[93] = "https://i.pinimg.com/originals/90/31/33/90313395483a44def992668f8dbaf261.jpg";
        r_text[94] = "https://i.pinimg.com/originals/f1/bf/31/f1bf31f28c44992b3e493aadb33686b6.jpg";
        r_text[95] = "https://i.pinimg.com/originals/20/b5/24/20b524c3856db15cd36885012637685a.jpg";
        r_text[96] = "https://i.pinimg.com/564x/20/ab/45/20ab400716bd724c477fdeb4235ccb4.jpg";
        r_text[97] = "https://i.pinimg.com/474x/1c/a4/e4/1ca4e434df6d9e06cfb65cdab35a2ab0.jpg";
        r_text[98] = "https://i.pinimg.com/736x/2a/68/db/2a68db13897fbeece65b5af9abff226d.jpg";
        r_text[99] = "https://i.pinimg.com/236x/b3/c6/88/b3c688a8401c2916564c37d8b6c913e0.jpg";
        let i = Math.floor(r_text.length * Math.random());
      return r_text[i]
    };

function robote(){
let r_text = new Array();
        r_text[0] = "https://i.pinimg.com/originals/9c/21/95/9c2195094a81095f87e83cb5534ee121.jpg";
        r_text[1] = "https://i.pinimg.com/originals/4b/5f/d3/4b5fd341ed56b734a5de24945fcd1c36.jpg";
        r_text[2] = "https://i.pinimg.com/originals/f6/d7/ef/f6d7ef4b5b015be7cf607e2087c0a244.jpg";
        r_text[3] = "https://i.pinimg.com/originals/38/12/cf/3812cfe5d066ea80e0227b8cc7923173.jpg";
        r_text[4] = "https://i.pinimg.com/550x/01/bb/fd/01bbfd6e7bca84e452e2c36e3ef614d9.jpg";
        r_text[5] = "https://i.pinimg.com/originals/a1/e8/7c/a1e87c4263b2d9aa5f3a16dfa8ba3733.jpg";
        r_text[6] = "https://i.pinimg.com/originals/2a/2a/1d/2a2a1dd7d1b7d0cd65ad2bba079ed6ff.jpg";
        r_text[7] = "https://i.pinimg.com/736x/85/f4/fa/85f4fa697deba57ea80278d93a084282--robot-crafts-monster-crafts.jpg";
        r_text[8] = "https://i.pinimg.com/736x/5a/3b/3c/5a3b3c453bba2c3a286da9304d225ff9.jpg";
        r_text[9] = "https://i.pinimg.com/originals/50/78/69/507869d9023258dbd99849f7d92e2430.jpg";
        r_text[10] = "https://i.pinimg.com/736x/5b/b8/8f/5bb88f82c8e114e6a1fea8b49cda66a4.jpg";
        r_text[11] = "https://i.pinimg.com/originals/32/80/56/3280569e7598196ae196020076b97396.jpg";
        r_text[12] = "https://i.pinimg.com/originals/dc/59/32/dc5932f422992b22e16b6677ab4f96b2.jpg";
        r_text[13] = "https://i.pinimg.com/originals/17/f6/8e/17f68e401b36b8b87346557940a40970.jpg";
        r_text[14] = "https://i.pinimg.com/474x/b4/9d/6a/b49d6a281e9ad34e0672ba24a316c897.jpg";
        r_text[15] = "https://i.pinimg.com/736x/d3/87/1f/d3871fb68bb5c11b3585aa3e61d6b7b3.jpg";
        r_text[16] = "https://i.pinimg.com/736x/23/02/a6/2302a6e8b6b96823116d21e6797aba48.jpg";
        r_text[17] = "https://i.pinimg.com/474x/04/c7/85/04c785ac33a88313dea8104ce773dfc1--robot-nursery-monster-art.jpg";
        r_text[18] = "https://i.pinimg.com/originals/25/a5/60/25a56033a1b7415d3443542a80cb19e0.jpg";
        r_text[19] = "https://i.pinimg.com/originals/d8/9a/a3/d89aa36a837837505067d098193366d3.jpg";
        r_text[20] = "https://i.pinimg.com/474x/7d/2d/82/7d2d82344f750072083a176a1b368b77.jpg";
        r_text[21] = "https://i.pinimg.com/236x/33/8f/b6/338fb61e03efa24865330bb67583164d--colonel-steampunk.jpg";
        r_text[22] = "https://i.pinimg.com/originals/ee/28/e5/ee28e574b6e2379e96b5c028a41529ec.jpg";
        r_text[23] = "https://i.pinimg.com/736x/d4/42/73/d44273f7bb30d26e9e88c765665cee84--robots-vector-illustrations.jpg";
        r_text[24] = "https://i.pinimg.com/550x/7b/22/bf/7b22bf522c893afbd1d9ea67402e41a8.jpg";
        r_text[25] = "https://i.pinimg.com/736x/6c/31/a2/6c31a20cd0db762bc45850eab731b829--future-timeline-robot-technology.jpg";
        r_text[26] = "https://i.pinimg.com/736x/1e/ce/27/1ece279dad2cac89bde9b0dde4e4fb07.jpg";
        r_text[27] = "https://i.pinimg.com/originals/d3/33/3f/d3333fc913a33c7d3bde8ee006dc1323.jpg";
        r_text[28] = "https://i.pinimg.com/originals/64/47/5f/64475feec3a445a30e0419afc6336a4f.jpg";
        r_text[29] = "https://i.pinimg.com/736x/c7/75/e9/c775e99bc713afe42be4dff216b4eb7b.jpg";
        r_text[30] = "https://i.pinimg.com/736x/77/0f/9e/770f9e073422e9ce8544e827ffffa0b8--composition-robot.jpg";
        r_text[31] = "https://i.pinimg.com/236x/d3/fc/d9/d3fcd971947260ce06f312578b4ff95a.jpg";
        r_text[32] = "https://i.pinimg.com/originals/6e/9a/e7/6e9ae727e837f56ca3ea3d7287f9adb3.jpg";
        r_text[33] = "https://i.pinimg.com/736x/ab/29/c9/ab29c9c5024317d077cb0dae818b31df.jpg";
        r_text[34] = "https://i.pinimg.com/originals/cf/29/8e/cf298e98423028490309e1e655d31f30.jpg";
        r_text[35] = "https://i.pinimg.com/736x/29/5c/87/295c87dbbc13497e549bff787b5e5f3d--robot-factory-robot-costumes.jpg";
        r_text[36] = "https://i.pinimg.com/originals/88/fc/c3/88fcc32cc87022c217b25b5d1b95a2f9.jpg";
        r_text[37] = "https://i.pinimg.com/474x/f5/2f/d4/f52fd4074ead0534e24d2d7bd1ef517e.jpg";
        r_text[38] = "https://i.pinimg.com/550x/1f/b6/39/1fb63955205039095ab2f229c2b8cf95.jpg";
        r_text[39] = "https://i.pinimg.com/550x/ee/7a/7e/ee7a7eebb42c7ef8974f3016dfedcd41.jpg";
        r_text[40] = "https://i.pinimg.com/originals/e8/4e/12/e84e122fa26248896aa44257483e2f80.jpg";
        r_text[41] = "https://i.pinimg.com/474x/95/e8/3f/95e83f7bf3d369cd2953a0460f525767--robot-design-artworks.jpg";
        r_text[42] = "https://i.pinimg.com/originals/aa/c0/16/aac0168240b6516bffc2b56b7c1c6152.jpg";
        r_text[43] = "https://i.ytimg.com/vi/QcBeDbs8n9k/maxresdefault.jpg";
        r_text[44] = "https://i.pinimg.com/736x/67/c6/40/67c640c7825ac1c39d727e130368ec95--industrial-robots-mechanical-design.jpg";
        r_text[45] = "https://i.pinimg.com/736x/65/92/49/65924949b26b3fce7987bdb8fa1c780b--robot-crafts-kids-crafts.jpg";
        r_text[46] = "https://i.pinimg.com/236x/73/26/da/7326da9c91417e33e988cef384d21091.jpg";
        r_text[47] = "https://i.pinimg.com/originals/39/dc/37/39dc37b10a2e247c2752a9fc6d3ea293.jpg";
        r_text[48] = "https://i.pinimg.com/736x/1d/b0/98/1db098340f279198c19ac4204030c589--scifi-robot-droid.jpg";
        r_text[49] = "https://i.pinimg.com/originals/c9/60/e2/c960e2309931c6e7a54b7f52eabc8150.jpg";
        r_text[50] = "https://i.pinimg.com/originals/77/82/e5/7782e5a7b92de812ce2e4602e36bd46b.jpg";
        r_text[51] = "https://i.pinimg.com/originals/4d/4b/97/4d4b97f6ddc9b95edd18267a975d61d5.jpg";
        r_text[52] = "https://i.pinimg.com/736x/59/a7/97/59a797be6d213ffcf48e3d8c3c5d96a0.jpg";
        r_text[53] = "https://i.pinimg.com/736x/82/12/4b/82124b3a242a7d3c432062fbb35362c7--black-holes-world-maps.jpg";
        r_text[54] = "https://i.pinimg.com/originals/45/61/76/45617618e70ea3f77d13aef04fb42ecf.jpg";
        r_text[55] = "https://i.pinimg.com/originals/ff/f9/c2/fff9c28fba1fb7943cad962e4ef39e34.jpg";
        r_text[56] = "https://i.pinimg.com/550x/2a/34/9b/2a349b12b182cfa08f73d13f5ae93843.jpg";
        r_text[57] = "https://i.pinimg.com/originals/cf/34/43/cf3443cf4c5377cc4127bbc563bf30e2.jpg";
        r_text[58] = "https://i.pinimg.com/originals/21/16/cf/2116cf8f9809081b142ba3fc859fc158.jpg";
        r_text[59] = "https://i.pinimg.com/736x/93/85/d7/9385d74864ba3e45f756db72b35a1dca.jpg";
        r_text[60] = "https://i.pinimg.com/originals/f2/8b/27/f28b27d794943a06f3ab419d8efc2220.jpg";
        r_text[61] = "https://i.pinimg.com/736x/fc/00/b4/fc00b4155ae2820a46ef71ee43c7f722.jpg";
        r_text[62] = "https://i.pinimg.com/originals/39/32/e6/3932e67dba14cc611fbb52fbc98eaec4.jpg";
        r_text[63] = "https://i.pinimg.com/originals/c8/bf/6d/c8bf6df9ae40d93f4bfa708156a303e6.jpg";
        r_text[64] = "https://i.pinimg.com/originals/e7/a1/e0/e7a1e06f95a540b3104a6063b389ea48.jpg";
        r_text[65] = "http://media-cache-ec0.pinimg.com/736x/f0/fc/da/f0fcda5702f95aa27d06490751befb5a.jpg";
        r_text[66] = "https://i.pinimg.com/474x/ca/57/e4/ca57e448fa5fc0e7539a3607bea8aa75.jpg";
        r_text[67] = "https://i.pinimg.com/originals/d7/fb/dc/d7fbdcbbe8e4f12bce0b74ff5d4ebf15.jpg";
        r_text[68] = "https://i.pinimg.com/550x/8a/bc/8c/8abc8c4315aa971bdc2eee3d6ba624e7.jpg";
        r_text[69] = "https://i.pinimg.com/originals/0c/00/63/0c00639f06f111f259d0eb4977e01152.jpg";
        r_text[70] = "https://i.pinimg.com/474x/f9/9c/51/f99c5164246f5178291f917474c7e602.jpg";
        r_text[71] = "https://i.pinimg.com/736x/7e/b3/98/7eb398be4bb028cb8fd09d88a5079af4.jpg";
        r_text[72] = "https://i.pinimg.com/originals/df/ee/35/dfee3528d8f7fbbac6f52dcce55145c4.jpg";
        r_text[73] = "https://i.pinimg.com/736x/88/fa/46/88fa4688d99912665c4a93f4eb4c0dea.jpg";
        r_text[74] = "https://i.pinimg.com/564x/b1/2f/4f/b12f4f42613754a94646e9b974fd0e8c.jpg";
        r_text[75] = "https://i.pinimg.com/736x/ce/73/2a/ce732a50181fe67e2b8bb34e433c75ac--shadow-runner-cyborg.jpg";
        r_text[76] = "https://i.pinimg.com/originals/99/2f/a1/992fa10c805859c6ec976dd30c8bb75e.jpg";
        r_text[77] = "https://i.pinimg.com/236x/00/4d/65/004d655e8394780f2fcc93204d8aeeca.jpg";
        r_text[78] = "https://i.pinimg.com/originals/5f/49/9f/5f499fe27c15a598588fe9a8db8a328a.jpg";
        r_text[79] = "https://i.pinimg.com/originals/7b/c7/ac/7bc7ac275d8f64b55fbce3297f86edba.jpg";
        r_text[80] = "https://i.pinimg.com/474x/ed/e7/38/ede73801a8524253ee67fae14c0c9235--steampunk-robots-steampunk-design.jpg";
        r_text[81] = "https://i.pinimg.com/originals/7f/6c/af/7f6caf084fb4778a9285a9b559ec9d57.jpg";
        r_text[82] = "https://i.pinimg.com/474x/da/c8/1a/dac81aee7b8eddf5a4ae8f03b3683048--robot-illustration-robot-art.jpg";
        r_text[83] = "https://i.pinimg.com/originals/7c/74/9a/7c749a0056099e78e4c5f0d0fbb3c4a5.jpg";
        r_text[84] = "https://i.pinimg.com/736x/45/05/a9/4505a928bfb20bc4e78292f268e8ff92--d-models-robots.jpg";
        r_text[85] = "https://i.pinimg.com/originals/9b/4b/c6/9b4bc6f8ff8d8a37462c98e8de855c37.jpg";
        r_text[86] = "https://i.pinimg.com/736x/93/66/76/936676e9952ece996281b596ee00f253.jpg";
        r_text[87] = "https://i.pinimg.com/564x/3c/33/46/3c33463117826aeeeec0190c8806d067.jpg";
        r_text[88] = "https://i.pinimg.com/originals/bc/62/a0/bc62a0b7c2a64bbb841c254f0ff756e5.jpg";
        r_text[89] = "https://i.pinimg.com/736x/7d/ac/d6/7dacd608db5915c723acc0eb8e94b86a.jpg";
        r_text[90] = "https://i.pinimg.com/originals/38/fe/df/38fedf2b514ad6919fab261c211df951.jpg";
        r_text[91] = "https://i.pinimg.com/originals/78/18/53/781853c649e1b7e20bd284f6cde03413.jpg";
        r_text[92] = "https://i.pinimg.com/originals/5d/c7/93/5dc793a4623d4fc2f5a6695e5a78ade5.jpg";
        r_text[93] = "https://i.pinimg.com/originals/94/62/b7/9462b70e9952b2fa93b053226afd3a78.jpg";
        r_text[94] = "https://i.pinimg.com/736x/4a/2c/66/4a2c660c3fbece9d1d9473b2ca5ac084--paranoid-android-android-robot.jpg";
        r_text[95] = "https://i.pinimg.com/originals/fc/38/3a/fc383a9d594071a1caa40163a00dbaed.jpg";
        r_text[96] = "https://i.pinimg.com/originals/1f/a3/96/1fa3960afe0e415bfafb3a3043e9853e.jpg";
        r_text[97] = "https://i.pinimg.com/736x/e3/ab/a8/e3aba8138b70adc314f61b87b7a49913.jpg";
        r_text[98] = "https://i.pinimg.com/736x/00/9d/0e/009d0e1ce95b33dde7afda7649ee14d3.jpg";
        r_text[99] = "https://i.pinimg.com/736x/cf/ac/5d/cfac5db28a9f7e5a1625fbf39916293f.jpg";
        let i = Math.floor(r_text.length * Math.random());
    return r_text[i]
}
function spiderman(){
let r_text = new Array();
        r_text[0] = "https://i.pinimg.com/564x/d1/27/21/d127216f9af87428658d5d2db7411692.jpg";
        r_text[1] = "https://i.pinimg.com/736x/02/7c/a3/027ca34442c7420f4072da7ddc7334da.jpg";
        r_text[2] = "https://i.pinimg.com/736x/46/b5/b5/46b5b55f07f2b0b2ca71b719be8ed1a4.jpg";
        r_text[3] = "https://i.pinimg.com/originals/98/7c/97/987c97efbeedb56231887f837ac43715.jpg";
        r_text[4] = "https://i.pinimg.com/originals/70/53/5e/70535eefd00556de72bb3baa1341e274.jpg";
        r_text[5] = "https://i.pinimg.com/originals/a6/fe/4a/a6fe4aea6f81681d87c7e9b83475a75c.jpg";
        r_text[6] = "https://i.pinimg.com/originals/1c/b4/4e/1cb44ecf7d63157b15da2c0dbbd660af.jpg";
        r_text[7] = "https://i.pinimg.com/736x/c5/04/06/c50406fb8d4e0a253489eb896cc87b9a.jpg";
        r_text[8] = "https://i.pinimg.com/originals/4f/a2/e1/4fa2e1e8bf0ad7f9e6179334934cd535.jpg";
        r_text[9] = "https://i.pinimg.com/originals/32/92/5e/32925e3718ee000e49c79f06f6c4389e.jpg";
        r_text[10] = "https://i.pinimg.com/originals/b5/4b/9a/b54b9a1e5d50a0786d41a1e11454b8ac.jpg";
        r_text[11] = "https://i.pinimg.com/736x/59/14/fc/5914fc56350ab1c40b9a378356bd8e77.jpg";
        r_text[12] = "https://i.pinimg.com/originals/73/21/38/732138bf0cce033ead2c8a812cf055ab.jpg";
        r_text[13] = "https://i.pinimg.com/originals/b3/84/9f/b3849fee1da6f272119c4aaa725535e7.jpg";
        r_text[14] = "https://i.pinimg.com/originals/08/19/36/081936dcc9e270602e0c28a1da1ff8bf.jpg";
        r_text[15] = "https://i.pinimg.com/736x/02/b5/e6/02b5e662d0e42a00016f2edc04f078f2.jpg";
        r_text[16] = "https://i.pinimg.com/originals/fe/9a/32/fe9a3220e97c33f30c32502789be9cfe.jpg";
        r_text[17] = "https://i.pinimg.com/550x/09/af/5c/09af5c9573fe0d2f37b82bfaf9178944.jpg";
        r_text[18] = "https://i.pinimg.com/736x/84/56/a2/8456a279854434d77e5ebfebddd3ed8f.jpg";
        r_text[19] = "https://i.pinimg.com/474x/44/5f/64/445f641412e7ca6cefd318c23ce52c61.jpg";
        r_text[20] = "https://i.pinimg.com/736x/67/e6/70/67e670ad4d0f86eaeacd511f41985333.jpg";
        r_text[21] = "https://i.pinimg.com/originals/3e/16/bf/3e16bff253abb380070095370ef15ae5.jpg";
        r_text[22] = "https://i.pinimg.com/736x/e4/c6/d7/e4c6d7c1367205fce407e043dff73fb2.jpg";
        r_text[23] = "https://i.pinimg.com/736x/46/81/3d/46813d33492bba5c27bb52cd4dfcfe0b.jpg";
        r_text[24] = "https://i.pinimg.com/originals/05/04/7f/05047ff3429128feaa2b20d983170a4b.jpg";
        r_text[25] = "https://i.pinimg.com/originals/d7/f0/fe/d7f0fe8ade495be5c63cd23ea8e56e74.jpg";
        r_text[26] = "https://i.pinimg.com/originals/69/2b/16/692b16c1bd8990d67770dbafea9ede15.jpg";
        r_text[27] = "https://i.pinimg.com/736x/bf/cc/37/bfcc3755c4c6425c4b2770cfff41df42.jpg";
        r_text[28] = "https://i.pinimg.com/736x/d7/b1/65/d7b16568a538a405f407548ea80b3cb6.jpg";
        r_text[29] = "https://i.pinimg.com/originals/cc/af/78/ccaf78003ded97daf5aaa99b5e09cd3b.jpg";
        r_text[30] = "https://i.pinimg.com/736x/d5/9f/ab/d59fabfdce39ccbf4ec69b25775005fe.jpg";
        r_text[31] = "https://i.pinimg.com/originals/9a/0f/6a/9a0f6ada71346ae40c837a1f8271bcfc.jpg";
        r_text[32] = "https://i.pinimg.com/originals/79/72/36/7972367cea49d2bcbfb9c90d5f16590f.jpg";
        r_text[33] = "https://i.pinimg.com/736x/c1/68/e6/c168e66aef606889dcd954728217b790.jpg";
        r_text[34] = "https://i.pinimg.com/474x/1a/13/15/1a13158705297c7e0a7d875e452ffbd3.jpg";
        r_text[35] = "https://i.pinimg.com/736x/56/d6/d9/56d6d910af3c4e39c61a38f8566aa39c.jpg";
        r_text[36] = "https://i.pinimg.com/736x/c8/7b/b4/c87bb4f13f03cb64815435215495204a--spider-verse-spider-man.jpg";
        r_text[37] = "https://i.pinimg.com/736x/b8/d0/4e/b8d04ec6adc8d77bd9ee4a6a8c1feae9.jpg";
        r_text[38] = "https://i.pinimg.com/originals/5a/2d/1d/5a2d1d360c686cb9f2c477800bef10e5.jpg";
        r_text[39] = "https://i.pinimg.com/originals/9c/82/98/9c82984aab67e6a3ebab531285789ba5.jpg";
        r_text[40] = "https://i.pinimg.com/474x/2b/e5/6b/2be56ba4f96c230a49d35b4676a840e5.jpg";
        r_text[41] = "https://i.pinimg.com/736x/52/be/4f/52be4f65b477c79bf31aa1fad0f88b27.jpg";
        r_text[42] = "https://i.pinimg.com/originals/3f/74/8a/3f748a9cf8578c313dfbfe2c67805aaf.jpg";
        r_text[43] = "https://i.pinimg.com/736x/2c/11/7c/2c117cbded848a9ec6822cb72bdb3737.jpg";
        r_text[44] = "https://i.pinimg.com/736x/af/8b/f5/af8bf54be1c9e01bb7b98b60d1c18fc3.jpg";
        r_text[45] = "https://i.pinimg.com/originals/57/61/a6/5761a6e3ab06db8d383c5fe5929a3fa4.jpg";
        r_text[46] = "https://i.pinimg.com/originals/82/05/fc/8205fc13eb2f776de9b58a1b57e74127.jpg";
        r_text[47] = "https://i.pinimg.com/originals/20/b4/a6/20b4a656bca62f5c44ce9832bc8ecc3b.jpg";
        r_text[48] = "https://i.pinimg.com/originals/78/44/c9/7844c95e8ab70327fb9ac6390e5c9488.jpg";
        r_text[49] = "https://i.pinimg.com/550x/99/0d/a1/990da1024f8609e027329821d3de3378.jpg";
        r_text[50] = "https://i.pinimg.com/originals/74/2b/63/742b63b56ed5d4a46bb61fde1704d2b8.jpg";
        r_text[51] = "https://i.pinimg.com/474x/b7/f9/ca/b7f9ca58135b349e96b56f54cd2fb356.jpg";
        r_text[52] = "https://i.pinimg.com/236x/c1/32/c7/c132c7cb4f6f0d716dfc845632ba1a03.jpg";
        r_text[53] = "https://i.pinimg.com/originals/f0/db/37/f0db379610558f920fd7ecdd56e01346.jpg";
        r_text[54] = "https://i.pinimg.com/736x/d8/3c/90/d83c9039f442a839c8c2faf448dd12cd.jpg";
        r_text[55] = "https://i.pinimg.com/736x/b8/9b/dc/b89bdca2d1de9a370e639547da3c304a.jpg";
        r_text[56] = "https://i.pinimg.com/originals/b2/57/6c/b2576c34fbf52190a9899e685af4c178.jpg";
        r_text[57] = "https://i.pinimg.com/originals/cb/74/08/cb7408be98dc0056a766146ac98e53b1.jpg";
        r_text[58] = "https://i.pinimg.com/736x/db/4c/57/db4c5701f7c4d86740a6314ec2f71bec.jpg";
        r_text[59] = "https://i.pinimg.com/originals/12/cc/a4/12cca47d718ccfde35273c9f938404e8.jpg";
        r_text[60] = "https://i.pinimg.com/236x/a5/c6/88/a5c688f485925226c14a246935cf2e71.jpg";
        r_text[61] = "https://i.pinimg.com/originals/2b/56/19/2b56198430b3fa4196d2676408fcfbc7.jpg";
        r_text[62] = "https://i.pinimg.com/originals/ff/75/62/ff7562bddb3cef84eb85582acbbc342f.jpg";
        r_text[63] = "https://i.pinimg.com/originals/a3/98/55/a39855541f9de5cfb4b1d34e98777a2b.jpg";
        r_text[64] = "https://i.pinimg.com/originals/32/28/8a/32288adcdc0ded674aa15b93c4b9b66d.jpg";
        r_text[65] = "https://i.pinimg.com/736x/26/01/b0/2601b0b802479f9de0ebd24cc870fc50.jpg";
        r_text[66] = "https://i.pinimg.com/736x/9c/93/16/9c9316d504c6315646695d2f78fcc050.jpg";
        r_text[67] = "https://i.pinimg.com/474x/73/e8/db/73e8db4bdf62e05f1083bb796ddc1723.jpg";
        r_text[68] = "https://i.pinimg.com/originals/f3/f2/b8/f3f2b8521295a4ba5b1ce7b1cab0317e.jpg";
        r_text[69] = "https://i.pinimg.com/474x/e8/05/ee/e805ee08fc8ae23f108eb4aecf82d61b.jpg";
        r_text[70] = "https://i.pinimg.com/736x/eb/ed/b4/ebedb48cf72bb7f7c3dbd6d1c1a6432a.jpg";
        r_text[71] = "https://i.pinimg.com/474x/d5/b3/18/d5b318d0a46b85241ef27a5900f25039.jpg";
        r_text[72] = "https://i.pinimg.com/236x/ef/b7/f9/efb7f91c079be0a588f8e124d20a017d.jpg";
        r_text[73] = "https://i.pinimg.com/736x/5d/01/4d/5d014da6aa1a8e3830c25de3114f1398.jpg";
        r_text[74] = "https://i.pinimg.com/564x/b1/f2/55/b1f2559ef0f743e01c30760402fc4155.jpg";
        r_text[75] = "https://i.pinimg.com/originals/73/c7/a3/73c7a316bb5de28ebff30f428d884ec6.jpg";
        r_text[76] = "https://i.pinimg.com/736x/d6/3d/ce/d63dcec5d000bb5d4aa64714e07567e2--spiderman-batman.jpg";
        r_text[77] = "https://i.pinimg.com/564x/3c/75/e3/3c75e338c14d73025b062e082b6a168f.jpg";
        r_text[78] = "https://i.pinimg.com/736x/a7/5a/d0/a75ad0e369f99d9263720a6e934320d5.jpg";
        r_text[79] = "https://i.pinimg.com/550x/af/77/3d/af773d4d25e067afa3fe1df7f9fbba9a.jpg";
        r_text[80] = "https://i.pinimg.com/736x/fe/b8/dc/feb8dcf0e28a6af11e536bcd6fc9e4e9.jpg";
        r_text[81] = "https://i.pinimg.com/originals/38/1a/7c/381a7cb2bd11059e19aedd0e6ef49c52.jpg";
        r_text[82] = "https://i.pinimg.com/736x/53/a7/65/53a765cc34feb40a7769a8068ed455b8.jpg";
        r_text[83] = "https://i.pinimg.com/736x/84/4a/a9/844aa984aa4e6f620239babbfc4256e7.jpg";
        r_text[84] = "https://i.pinimg.com/originals/35/48/61/354861151d80cb7b7ebd901cc1891aa9.jpg";
        r_text[85] = "https://i.pinimg.com/736x/c7/bc/a6/c7bca61a6b1a26bea057c6939c8f9295.jpg";
        r_text[86] = "https://i.pinimg.com/736x/df/7f/d6/df7fd67662e268479c7b274597a9a999.jpg";
        r_text[87] = "https://i.pinimg.com/736x/95/2a/67/952a671d7b38748d17c9bcac8df19fe8.jpg";
        r_text[88] = "https://i.pinimg.com/originals/4a/41/b9/4a41b9a93e9d1412a9e5608ad70ba20a.jpg";
        r_text[89] = "https://i.pinimg.com/originals/a6/d5/71/a6d571ac5f04e849fd9f6eb719f67925.jpg";
        r_text[90] = "https://i.pinimg.com/474x/5c/a4/fc/5ca4fcd5908bae7cb3a683727c1dca7f.jpg";
        r_text[91] = "https://i.pinimg.com/564x/55/b5/5c/55b55c7995d849739049dc1b79b1deb8.jpg";
        r_text[92] = "https://i.pinimg.com/736x/97/be/75/97be75d2f2ccb5edb4c7a5cb546a1508.jpg";
        r_text[93] = "https://i.pinimg.com/736x/c8/df/6e/c8df6edc83561a0c2aa02bbc8b160d4a.jpg";
        r_text[94] = "https://i.pinimg.com/originals/7f/65/64/7f6564d6c67c8d0335e147cb650956c4.jpg";
        r_text[95] = "https://i.pinimg.com/originals/62/8b/ae/628bae90490cba8ca968234ae287008f.jpg";
        r_text[96] = "https://i.pinimg.com/736x/09/2d/4e/092d4edbd0a5c0304f51370f931771e1.jpg";
        r_text[97] = "https://i.pinimg.com/736x/ea/2e/a9/ea2ea93b426da0007aee4893f164afa3--spiderman-film-spiderman-pictures.jpg";
        r_text[98] = "https://i.pinimg.com/236x/5d/32/5e/5d325e97838d03670fd498dd5970677d--spiderman-spiderman-amazing-spiderman.jpg";
        r_text[99] = "https://i.pinimg.com/736x/08/e6/35/08e6353d844a20b86a6fb2ac7f3f220e.jpg";
        let i = Math.floor(r_text.length * Math.random());
    return r_text[i]
}

function tentacion(){
let r_text = new Array();
        r_text[0] = "https://i.pinimg.com/736x/87/2c/d2/872cd2b5983006f0fc011124e7920529.jpg";
        r_text[1] = "https://i.pinimg.com/736x/2b/1d/e1/2b1de1f3936371d1743bd6c943e5399b.jpg";
        r_text[2] = "https://i.pinimg.com/originals/a6/03/f5/a603f514edd470c47fa8067c363c62c4.jpg";
        r_text[3] = "https://i.pinimg.com/736x/97/78/f6/9778f6e6788a6c875f00fa15c9dcbf3f.jpg";
        r_text[4] = "https://i.pinimg.com/236x/0a/8c/8e/0a8c8e86af820e29ac21d11381f787b8.jpg";
        r_text[5] = "https://i.pinimg.com/236x/41/9e/99/419e99534d96867659492f152174cf19.jpg";
        r_text[6] = "https://i.pinimg.com/originals/1d/f6/72/1df6726b716bbc887a92c79497288845.jpg";
        r_text[7] = "https://i.pinimg.com/236x/70/6d/8a/706d8a5f479f6e2fc229467ee8028b1c.jpg";
        r_text[8] = "https://i.pinimg.com/736x/fa/7b/c9/fa7bc9772ef0693a7a9db4ce26193409.jpg";
        r_text[9] = "https://i.pinimg.com/736x/75/84/cc/7584ccdf340772882c5b84026c281e68.jpg";
        r_text[10] = "https://i.pinimg.com/564x/95/19/b9/9519b99759e9265af4ebf3ae95b000be.jpg";
        r_text[11] = "https://i.pinimg.com/originals/c3/cb/28/c3cb2854b4af6288cd70f61d47d9938c.jpg";
        r_text[12] = "https://i.pinimg.com/736x/14/22/f7/1422f763b8549b5ee4642732241d1e08.jpg";
        r_text[13] = "https://i.pinimg.com/originals/c1/c2/7d/c1c27dde75ae358a0dac35f07e0ddc83.jpg";
        r_text[14] = "https://i.pinimg.com/564x/5c/a0/48/5ca048b92aee20f38fa4cd153370ec33.jpg";
        r_text[15] = "https://i.pinimg.com/564x/5c/6a/98/5c6a987d9b826364ce90520bfa138449.jpg";
        r_text[16] = "https://i.pinimg.com/474x/0c/f5/51/0cf551420b618582fbd45c5d789364b6.jpg";
        r_text[17] = "https://i.pinimg.com/736x/31/15/42/311542a88eb3aa5cedce0d5f5cf135bd.jpg";
        r_text[18] = "https://i.pinimg.com/736x/0b/af/41/0baf4135a09c15983b1936670c31ecc6.jpg";
        r_text[19] = "https://i.pinimg.com/474x/f4/39/d6/f439d668a3c11d695364615cb13100d8.jpg";
        r_text[20] = "https://i.pinimg.com/736x/84/c4/35/84c43518b14797ff726aa0e23b7f5262.jpg";
        r_text[21] = "https://i.pinimg.com/originals/96/3e/fe/963efea8fce9378470616871e07c99ea.jpg";
        r_text[22] = "https://i.pinimg.com/736x/e7/37/d6/e737d6dea7edb47f867a93b819edeaff.jpg";
        r_text[23] = "https://i.pinimg.com/736x/f1/a8/5a/f1a85ac07c6546567a4d742120a1cccd.jpg";
        r_text[24] = "https://i.pinimg.com/736x/b8/a1/8f/b8a18f410e7eae17ec585753d6c17747.jpg";
        r_text[25] = "https://i.pinimg.com/736x/48/38/3e/48383e5c3ac923917c68c5ebe0486580.jpg";
        r_text[26] = "https://i.pinimg.com/564x/81/08/04/8108041155921a6b653f65ed55652747.jpg";
        r_text[27] = "https://i.pinimg.com/736x/9e/69/92/9e699271f119ed027f362d1385aa139e.jpg";
        r_text[28] = "https://i.pinimg.com/474x/12/7c/6f/127c6fc61ee9d82099c5b1532e1a5e47.jpg";
        r_text[29] = "https://i.pinimg.com/736x/ec/3f/60/ec3f60a4ee8abad534e74d473fb5ec6a.jpg";
        r_text[30] = "https://i.pinimg.com/236x/6a/15/dd/6a15dd9e8a382d6b22e7bb94dbbde068.jpg";
        r_text[31] = "https://i.pinimg.com/originals/35/33/89/353389cca396677e64de659e782dab48.jpg";
        r_text[32] = "https://i.pinimg.com/736x/f8/5e/90/f85e90f6b6b9f1bd6980c5a242c04ebd.jpg";
        r_text[33] = "https://i.pinimg.com/736x/5c/5d/53/5c5d53af73704154de7a27d0335bdaf0.jpg";
        r_text[34] = "https://i.pinimg.com/736x/5a/eb/b8/5aebb8c4e36279863ac571acece05905.jpg";
        r_text[35] = "https://i.pinimg.com/736x/e9/ea/84/e9ea8470c17ddaf745a9e5aebdaf41cf.jpg";
        r_text[36] = "https://i.pinimg.com/236x/c1/97/84/c1978429a9a2f12bd39fbe00d2c07de5.jpg";
        r_text[37] = "https://i.pinimg.com/736x/ee/d5/72/eed5726c6400ec15076202b74b7ff9a0.jpg";
        r_text[38] = "https://i.pinimg.com/736x/cd/9d/de/cd9dde666cba9023e273de1eab2a150c.jpg";
        r_text[39] = "https://i.pinimg.com/736x/cc/8d/6e/cc8d6e9848686cac4ddbdd24e3119572.jpg";
        r_text[40] = "https://i.pinimg.com/550x/cb/b0/ac/cbb0ac8a861714978227d01058f2fb98.jpg";
        r_text[41] = "https://i.pinimg.com/736x/d9/17/60/d917604c674fe208320653bdd8822bcc.jpg";
        r_text[42] = "https://i.pinimg.com/736x/b4/1c/33/b41c3391b6fe4f116da011a1f4a972a3.jpg";
        r_text[43] = "https://i.pinimg.com/736x/7d/21/56/7d2156ecf202ae8dd28e343a788aae44.jpg";
        r_text[44] = "https://i.pinimg.com/736x/29/c9/37/29c93772bc9e8753af798a4bb53129f9.jpg";
        r_text[45] = "https://i.pinimg.com/736x/45/45/1c/45451c959a5b0a4d9c6323d441e22397.jpg";
        r_text[46] = "https://i.pinimg.com/736x/4b/3c/fa/4b3cfa50f94f4961a951ea5f1075fa73.jpg";
        r_text[47] = "https://i.pinimg.com/236x/06/26/0e/06260e23107c919eba8caa42e82f9bc2.jpg";
        r_text[48] = "https://i.pinimg.com/736x/c6/ac/2f/c6ac2fe8da63f753259404e9071e4021.jpg";
        r_text[49] = "https://i.pinimg.com/736x/7c/f3/22/7cf322ec59956dbaf8cc35ed533d204d.jpg";
        r_text[50] = "https://i.pinimg.com/736x/4a/ab/61/4aab6152ef6dc43f689aa3d1d351b8e0.jpg";
        r_text[51] = "https://i.pinimg.com/736x/39/99/94/3999945f5fee550e0593708d37d73700.jpg";
        r_text[52] = "https://i.pinimg.com/736x/be/f2/e7/bef2e7a0df88f95d2ffb0b459fe556d0.jpg";
        r_text[53] = "https://i.pinimg.com/originals/79/57/4a/79574a98e292e7db660699f28f5fc8b3.jpg";
        r_text[54] = "https://i.pinimg.com/236x/08/41/6f/08416fed202e14a88423c3ac72bd0ac7.jpg";
        r_text[55] = "https://i.pinimg.com/736x/bf/69/ba/bf69ba41a9302375498f2bf94d7d36ad.jpg";
        r_text[56] = "https://i.pinimg.com/736x/ba/d1/58/bad1581ecda114f3c0dc57918cffb402.jpg";
        r_text[57] = "https://i.pinimg.com/474x/97/d4/78/97d478ef1b5907e90fb577e844e2d442.jpg";
        r_text[58] = "https://i.pinimg.com/474x/7b/bf/be/7bbfbe9af0d8fe2d2572657c6dae30e7.jpg";
        r_text[59] = "https://i.pinimg.com/originals/5e/58/a4/5e58a44472dd18e428aabaa5fdd75aca.jpg";
        r_text[60] = "https://i.pinimg.com/736x/3f/38/84/3f38841814c6b81054acb1a119368f66.jpg";
        r_text[61] = "https://i.pinimg.com/236x/70/8c/dd/708cdd3c04a5f9653be4c3f4fa6e7ada.jpg";
        r_text[62] = "https://i.pinimg.com/736x/9c/8b/82/9c8b822d34c205654665362de8eb3b86.jpg";
        r_text[63] = "https://i.pinimg.com/736x/bf/c0/ff/bfc0ff7074106634dc0504ee398b5258.jpg";
        r_text[64] = "https://i.pinimg.com/736x/39/98/c0/3998c09496385d9966e1957fb1db1daa.jpg";
        r_text[65] = "https://i.pinimg.com/736x/28/ab/e9/28abe9b0714e1fb2c6bb8309eb46976c.jpg";
        r_text[66] = "https://i.pinimg.com/564x/10/ae/17/10ae17a80786cc77517b6078dcbbb194.jpg";
        r_text[67] = "https://i.pinimg.com/550x/8e/c2/c1/8ec2c164eb9240e9d9415d01ee806fda.jpg";
        r_text[68] = "https://i.pinimg.com/736x/8c/db/d2/8cdbd2f02793f2f0d73601a88bceb18f.jpg";
        r_text[69] = "https://i.pinimg.com/236x/5a/0c/79/5a0c7976f87b6fce1f153aaafb1c0921.jpg";
        r_text[70] = "https://i.pinimg.com/736x/60/16/7f/60167fc7d40cde127382507dd13ff591.jpg";
        r_text[71] = "https://i.pinimg.com/736x/76/62/df/7662df8ae6a136a0b9b69d3a0dfa1a3c.jpg";
        r_text[72] = "https://i.pinimg.com/474x/e8/16/4d/e8164d8adf0516ed7e06274aa7a80363.jpg";
        r_text[73] = "https://i.pinimg.com/236x/7c/5b/2a/7c5b2aab8978675f207e5079abcf675f.jpg";
        r_text[74] = "https://i.pinimg.com/474x/e2/45/fa/e245fa2252888287517924c021529c28.jpg";
        r_text[75] = "https://i.pinimg.com/564x/e6/00/3d/e6003d1c08cc9be86f8c35854cc7dbec.jpg";
        r_text[76] = "https://i.pinimg.com/736x/2a/b9/89/2ab9890c499b92bec5739428b05dfb8c.jpg";
        r_text[77] = "https://i.pinimg.com/736x/65/5f/27/655f27783641a75f14c53976eaff2a1e.jpg";
        r_text[78] = "https://i.pinimg.com/564x/4c/06/85/4c06859c8d9259dc515242a5cf5b77d4.jpg";
        r_text[79] = "https://i.pinimg.com/736x/a4/e3/48/a4e34882707fee6b8d0d3cc840cd2a2f.jpg";
        r_text[80] = "https://i.pinimg.com/474x/2e/9a/29/2e9a29a44d3688d0a585970355b7a073.jpg";
        r_text[81] = "https://i.pinimg.com/474x/b9/6e/c5/b96ec54f6c56e1707fe8c94324c5c709.jpg";
        r_text[82] = "https://i.pinimg.com/736x/cf/d6/73/cfd6738980b6c27d52303da993c5bc67.jpg";
        r_text[83] = "https://i.pinimg.com/474x/80/e8/bb/80e8bb20dd6d2bec42c378c8d7d7c9b5.jpg";
        r_text[84] = "https://i.pinimg.com/736x/10/bf/ca/10bfcac99c69a30e250f1f289d2afa2a.jpg";
        r_text[85] = "https://i.pinimg.com/736x/0b/cc/37/0bcc377ba75c850b043a29351274a66f.jpg";
        r_text[86] = "https://i.pinimg.com/originals/bf/b3/38/bfb3389decd2fb0a5bbf72aa14aedcd4.jpg";
        r_text[87] = "https://i.pinimg.com/736x/f7/37/11/f737117c01ec295d36f2565d4c0e66cf.jpg";
        r_text[88] = "https://i.pinimg.com/originals/39/30/fc/3930fcb14d077c8a042afe1268642d25.jpg";
        r_text[89] = "https://i.pinimg.com/736x/4e/da/e2/4edae28f47e81bd3a8c8eada7c5318fe.jpg";
        r_text[90] = "https://i.pinimg.com/originals/61/46/c9/6146c9dceb02628dc20dc9b74ad5267c.jpg";
        r_text[91] = "https://i.pinimg.com/474x/fd/5b/98/fd5b9858cf059a10d30c3419ec5be879.jpg";
        r_text[92] = "https://i.pinimg.com/474x/a1/fb/af/a1fbafc6d3fee8c48596362a934861eb.jpg";
        r_text[93] = "https://i.pinimg.com/236x/41/0f/39/410f392c2c67bb8dbe8e4d17e393ba30.jpg";
        r_text[94] = "https://i.pinimg.com/736x/93/34/5d/93345dccf92e2be1ae0bb7d465fa12b4.jpg";
        r_text[95] = "https://i.pinimg.com/736x/b6/e5/e5/b6e5e5880b3ac2d5a4a21b60c16b1a45.jpg";
        r_text[96] = "https://i.pinimg.com/736x/e1/72/bd/e172bd7acfd57fb65cd700ee89a090d4.jpg";
        r_text[97] = "https://i.pinimg.com/236x/70/5e/75/705e75d9d727ae828615f74a73e6c98b.jpg";
        r_text[98] = "https://i.pinimg.com/564x/0b/97/81/0b9781a60331376e56d0cd4b19994388.jpg";
        r_text[99] = "https://i.pinimg.com/736x/5c/ac/f3/5cacf3d246ab73977b0b09dd95e7da00.jpg";
        let i = Math.floor(r_text.length * Math.random());
    return r_text[i]
}

function youAreBad(){
    let r_text = new Array();
    r_text[0] = "https://t.hotnakedphotos.com/nthumbs//2013-08-08/2718336/2718336_12.jpg";
    r_text[1] = "https://t.hotnakedphotos.com/nthumbs//2015-03-30/2421404/2421404_08.jpg";
    r_text[2] = "https://t.hotnakedphotos.com/nthumbs//2016-09-17/2326401/2326401_03.jpg";
    r_text[3] = "https://t.hotnakedphotos.com/nthumbs//2014-06-18/2584376/2584376_10.jpg";
    r_text[4] = "https://t.hotnakedphotos.com/nthumbs//2017-04-23/2637287/2637287_18.jpg";
    r_text[5] = "https://t.hotnakedphotos.com/nthumbs//2013-05-30/2011894/2011894_12.jpg";
    r_text[6] = "https://t.hotnakedphotos.com/nthumbs//2015-11-11/2722710/2722710_17.jpg";
    r_text[7] = "https://t.hotnakedphotos.com/nthumbs//2016-01-12/2351637/2351637_18.jpg";
    r_text[8] = "https://t.hotnakedphotos.com/nthumbs//2018-05-27/2317430/2317430_13.jpg";
    r_text[9] = "https://t.hotnakedphotos.com/nthumbs//2016-07-26/2178923/2178923_15.jpg";
    r_text[10] = "https://t.hotnakedphotos.com/nthumbs//2017-01-29/2652469/2652469_10.jpg";
    r_text[11] = "https://t.hotnakedphotos.com/nthumbs//2016-02-21/2042467/2042467_17.jpg";
    r_text[12] = "https://t.hotnakedphotos.com/nthumbs//2015-11-09/2323903/2323903_15.jpg";
    r_text[13] = "https://t.hotnakedphotos.com/nthumbs//2017-08-23/2660023/2660023_16.jpg";
    r_text[14] = "https://t.hotnakedphotos.com/nthumbs//2018-03-21/2774251/2774251_09.jpg";
    r_text[15] = "https://t.hotnakedphotos.com/nthumbs//2016-12-15/2985494/2985494_17.jpg";
    r_text[16] = "https://t.hotnakedphotos.com/nthumbs//2016-11-06/2718534/2718534_18.jpg";
    r_text[17] = "https://t.hotnakedphotos.com/nthumbs//2017-08-19/2909841/2909841_11.jpg";
    r_text[18] = "https://t.hotnakedphotos.com/nthumbs//2017-08-07/2060056/2060056_11.jpg";
    r_text[19] = "https://t.hotnakedphotos.com/nthumbs//2013-05-09/2176955/2176955_17.jpg";
    r_text[20] = "https://t.hotnakedphotos.com/nthumbs//2016-06-26/2878281/2878281_17.jpg";
    r_text[21] = "https://t.hotnakedphotos.com/nthumbs//2017-11-16/2602918/2602918_13.jpg";
    r_text[22] = "https://t.hotnakedphotos.com/nthumbs//2013-02-18/2174382/2174382_17.jpg";
    r_text[23] = "https://t.hotnakedphotos.com/nthumbs//2016-06-15/2897819/2897819_17.jpg";
    r_text[24] = "https://t.hotnakedphotos.com/nthumbs//2016-02-07/2313847/2313847_09.jpg";
    r_text[25] = "https://t.hotnakedphotos.com/nthumbs//2017-03-29/2574727/2574727_16.jpg";
    r_text[26] = "https://t.hotnakedphotos.com/nthumbs//2014-07-07/2588164/2588164_11.jpg";
    r_text[27] = "https://t.hotnakedphotos.com/nthumbs//2015-11-10/2367917/2367917_18.jpg";
    r_text[28] = "https://t.hotnakedphotos.com/nthumbs//2013-07-22/2784903/2784903_11.jpg";
    r_text[29] = "https://t.hotnakedphotos.com/nthumbs//2015-08-09/2485987/2485987_00.jpg";
    r_text[30] = "https://t.hotnakedphotos.com/nthumbs//2017-03-06/2108885/2108885_11.jpg";
    r_text[31] = "https://t.hotnakedphotos.com/nthumbs//2013-08-16/2304500/2304500_17.jpg";
    r_text[32] = "https://t.hotnakedphotos.com/nthumbs//2015-11-24/2210793/2210793_09.jpg";
    r_text[33] = "https://t.hotnakedphotos.com/nthumbs//2016-08-23/2831255/2831255_16.jpg";
    r_text[34] = "https://t.hotnakedphotos.com/nthumbs//2017-01-20/2355689/2355689_12.jpg";
    r_text[35] = "https://t.hotnakedphotos.com/nthumbs//2013-09-20/2981616/2981616_10.jpg";
    r_text[36] = "https://nt.hotnakedphotos.com/thumbnails/2019-10-22/3352788/11_300.jpg";
    r_text[37] = "https://t.hotnakedphotos.com/nthumbs//2018-06-18/2905162/2905162_10.jpg";
    r_text[38] = "https://t.hotnakedphotos.com/nthumbs//2017-01-24/2712849/2712849_12.jpg";
    r_text[39] = "https://t.hotnakedphotos.com/nthumbs//2017-08-26/2306582/2306582_16.jpg";
    r_text[40] = "https://t.hotnakedphotos.com/nthumbs//2016-08-22/2185651/2185651_12.jpg";
    r_text[41] = "https://t.hotnakedphotos.com/nthumbs//2014-06-05/2486633/2486633_15.jpg";
    r_text[42] = "https://t.hotnakedphotos.com/nthumbs//2017-11-22/2039204/2039204_16.jpg";
    r_text[43] = "https://t.hotnakedphotos.com/nthumbs//2017-04-24/2713475/2713475_12.jpg";
    r_text[44] = "https://t.hotnakedphotos.com/nthumbs//2017-01-10/2011905/2011905_15.jpg";
    r_text[45] = "https://t.hotnakedphotos.com/nthumbs//2018-04-10/2543986/2543986_16.jpg";
    r_text[46] = "https://t.hotnakedphotos.com/nthumbs//2016-08-15/2528077/2528077_15.jpg";
    r_text[47] = "https://t.hotnakedphotos.com/nthumbs//2015-02-21/2045431/2045431_12.jpg";
    r_text[48] = "https://t.hotnakedphotos.com/nthumbs//2015-06-23/2332595/2332595_05.jpg";
    r_text[49] = "https://t.hotnakedphotos.com/nthumbs//2018-06-06/2956569/2956569_16.jpg";
    let i = Math.floor(r_text.length * Math.random());
    return r_text[i]
    }

function ansay(text){

    let ttinullimage = `https://nekobot.xyz/api/imagegen?type=kannagen&text=${text.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`;

return ttinullimage

}

    function ch(text){

     let ttinullimage = `https://nekobot.xyz/api/imagegen?type=changemymind&text=${text.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`;

return  ttinullimage
   
   }

    function trumb(text){

let ttinullimage = `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${text.replace(/Ö/g, "%C3%96").replace(/ö/g, "%C3%B6").replace(/ü/g, "%C3%BC").replace(/Ü/g, "%C3%9C").replace(/Ğ/g, "%C4%9E").replace(/ğ/g, "%C4%9F").replace(/ş/g, "%C5%9F").replace(/Ş/g, "%C5%9E").replace(/ç/g, "%C3%A7").replace(/Ç/g, "%C3%87").replace(/ı/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/İ/g, "%C4%B0")}&raw=1`;

return ttinullimage

}


async function Quita(){
    const url = `https://api.quotable.io/random`;
    const response = await got(url);
    const json = JSON.parse(response.body);
		    if (response.statusCode === 200) return await json.content;
		}
		
async function insult(){
	        const url = `https://evilinsult.com/generate_insult.php?lang=en&type=json`;
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await json.insult;
		}

module.exports = { add, subtract, multiply, division, qrcode, base64e, base64d, age, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, Quita, insult }
//end
