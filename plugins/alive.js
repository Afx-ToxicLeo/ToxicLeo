const { Jsl } = require("../lib/");

Jsl(
  {
    pattern: "ping ?(.*)",
    fromMe: true,
    desc: "To check ping",
    type: "misc",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("*❮ ᴛᴇsᴛɪɴɢ ᴘɪɴɢ ❯*");
    const end = new Date().getTime();
    return await message.sendMessage(
      '*ʀᴇsᴘᴏɴsᴇ ɪɴ ' + (end - start) + ' _ᴍs_*'
    );
  }
);

function _0x5ee8(_0x5c2fb8,_0x31e42d){const _0x55ca6a=_0x55ca();return _0x5ee8=function(_0x5ee807,_0x18a619){_0x5ee807=_0x5ee807-0x86;let _0x40a56e=_0x55ca6a[_0x5ee807];return _0x40a56e;},_0x5ee8(_0x5c2fb8,_0x31e42d);}const _0x41b848=_0x5ee8;(function(_0x5b5661,_0x1487b6){const _0x31eaee=_0x5ee8,_0x5553a1=_0x5b5661();while(!![]){try{const _0xdad3fd=-parseInt(_0x31eaee(0x89))/0x1*(-parseInt(_0x31eaee(0x95))/0x2)+-parseInt(_0x31eaee(0x96))/0x3+-parseInt(_0x31eaee(0x8f))/0x4*(parseInt(_0x31eaee(0x94))/0x5)+-parseInt(_0x31eaee(0x91))/0x6*(parseInt(_0x31eaee(0x92))/0x7)+-parseInt(_0x31eaee(0x86))/0x8*(-parseInt(_0x31eaee(0x8e))/0x9)+parseInt(_0x31eaee(0x97))/0xa*(parseInt(_0x31eaee(0x8c))/0xb)+parseInt(_0x31eaee(0x88))/0xc;if(_0xdad3fd===_0x1487b6)break;else _0x5553a1['push'](_0x5553a1['shift']());}catch(_0x320b38){_0x5553a1['push'](_0x5553a1['shift']());}}}(_0x55ca,0x7c840),Jsl({'pattern':_0x41b848(0x8d),'fromMe':!![],'desc':_0x41b848(0x93)},async(_0x292d29,_0x29a5d0)=>{const _0x49d10b=_0x41b848;let _0x8243fc=_0x49d10b(0x87);_0x292d29[_0x49d10b(0x90)](readFileSync(_0x49d10b(0x8b)),{'caption':_0x8243fc},_0x49d10b(0x8a));}));function _0x55ca(){const _0x58ac43=['182JVaSoI','Show\x20All\x20commands','25HTujGv','2rsRLhM','2854917osDJxU','3660HVmmUU','1261264vchQkW','1.\x20ꜱᴇᴛꜱᴜᴅᴏ\x0aᴀᴅᴅ\x20ʀᴇᴘʟɪᴇᴅ\x20ᴏʀ\x20ᴍᴇɴᴛɪᴏɴᴇᴅ\x20ᴏʀ\x20ɢɪᴠᴇɴ\x20ɴᴜᴍ\x20ᴛᴏ\x20ꜱᴜᴅᴏ\x0a\x0a2.\x20ᴅᴇʟꜱᴜᴅᴏ\x0aʀᴇᴍᴏᴠᴇ\x20ʀᴇᴘʟɪᴇᴅ\x20ᴏʀ\x20ᴍᴇɴᴛɪᴏɴᴇᴅ\x20ᴏʀ\x20ɢɪᴠᴇɴ\x20ɴᴜᴍ\x20ᴛᴏ\x20ꜱᴜᴅᴏ\x0a\x0a3.\x20ɢᴇᴛꜱᴜᴅᴏ\x0aꜱʜᴏᴡ\x20ꜱᴜᴅᴏꜱ\x0a\x0a4.\x20ꜱᴛᴀᴛᴜꜱ\x0aʀᴀɴᴅᴏᴍ\x20ᴍᴀʟᴀʏᴀʟᴀᴍ\x20ꜱᴛᴀᴛᴜꜱ\x20ᴠɪᴅᴇᴏꜱ\x0a\x0a5.\x20ᴠᴠ\x0aᴀɴᴛɪVɪᴇᴡOɴᴄᴇ\x0a\x0a6.\x20ᴄᴀʟᴄ\x0aᴄᴀʟᴄᴜʟᴀᴛᴏʀ\x0a\x0a7.\x20ᴍꜰᴏʀᴡᴀʀᴅ\x0aʙʀᴏᴅᴄᴀsᴛ\x0a\x0a8.\x20ᴀʟʟᴘʟᴜɢ\x0aɢᴇᴛ\x20ᴀʟʟ\x20ᴘʟᴜɢɪɴꜱ\x0a\x0a9.\x20ꜱᴛɪᴄᴋᴇʀ\x0aꜱᴛɪᴄᴋᴇʀ\x20ᴍᴀɴᴀɢᴇʀ\x0a\x0a10.\x20ꜱᴇᴛꜱᴛɪᴄᴋᴇʀ\x0aꜱᴇᴛꜱᴛɪᴄᴋᴇʀ\x0a\x0a11.\x20ᴅᴇʟꜱᴛɪᴄᴋᴇʀ\x0aᴅᴇʟᴇᴛᴇ\x20ꜱᴛɪᴄᴋᴇʀ\x0a\x0a12.\x20ɢᴇᴛꜱᴛɪᴄᴋᴇʀ\x0aɢᴇᴛ\x20ꜱᴛɪᴄᴋᴇʀ\x20ᴅᴇᴛᴀɪʟꜱ\x0a\x0a13.\x20ꜰᴅ','13299828DtLzNh','224131OmykSS','image','./temp/abu.png','18667gdQFGU','lisy\x20?(.*)','27hntceU','321140shiXFm','sendMessage','130026pjbKPf'];_0x55ca=function(){return _0x58ac43;};return _0x55ca();}
