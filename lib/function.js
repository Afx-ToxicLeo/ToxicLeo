const axios = require("axios");
const { spawn } = require("child_process");
const FormData = require("form-data");
const fetch = require("node-fetch");
const { JSDOM } = require("jsdom");
const { MODE } = require("../config");

async function getJson(url, options) {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

async function getBuffer(url, options) {
    try {
	options ? options : {}
	const res = await axios({
	    method: "get",
	    url,
	    headers: {
		'DNT': 1,
		'Upgrade-Insecure-Request': 1
	    },
	    ...options,
	    responseType: 'arraybuffer'
	})
	return res.data
    } catch (err) {
	return err
    }
}

async function isUrl(url) {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, "gi"));
}

async function isAdmin(jid, user, client) {
    const { jidDecode } = require("@adiwajshing/baileys");
    const decodeJid = (jid) => {
      if (!jid) return jid;
      if (/:\d+@/gi.test(jid)) {
        let decode = jidDecode(jid) || {};
        return (
          (decode.user && decode.server && decode.user + "@" + decode.server) ||
          jid
        );
      } else return jid;
    };
    let groupMetadata = await client.groupMetadata(jid);
    const groupAdmins = groupMetadata.participants
      .filter((v) => v.admin !== null)
      .map((v) => v.id);
    return groupAdmins.includes(decodeJid(user));
  }

async function parseJid(text = '') {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

async function getRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

async function isPublic() {
var sn = MODE == 'public' ? false : true
return sn;
}

module.exports = { 
     getBuffer,
     getJson,
     getRandom,
     isUrl,
     parseJid,
     isPublic
};
