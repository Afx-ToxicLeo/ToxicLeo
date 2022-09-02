const {
  extensionForMediaMessage,
  extractMessageContent,
  jidNormalizedUser,
  getContentType,
  normalizeMessageContent,
  proto,
  delay,
  downloadContentFromMessage,
  getBinaryNodeChild,
} = require("Wa-Web");
const baileys = require("Wa-Web");
const fs = require("fs");
const chalk = require("chalk");
const FileType = require("file-type");
const moment = require("moment-timezone");
const path = require("path");
const { getRandom, fetchBuffer } = require("./Function");
const { timeStamp } = require("console");
const Jsl = require("../events");
const { connect } = require("tls");
const prefa = ["", "!", ".", "🐦", "🐤", "🗿"];
let M = proto.WebMessageInfo;

// #################################################################################################
// #################################################################################################
// #################################################################################################
// #################################################################################################
class WAConnection {
  constructor(conn) {
    for (let v in conn) this[v] = conn[v];
  }

  /**
   *
   * @param {*} m
   */
  async serializeM(m) {
    return exports.serialize(this, m);
  }

  /**
   *
   * @param {*} text
   * @returns
   */
  parseMention(text) {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
      (v) => v[1] + "@s.whatsapp.net"
    );
  }

  /**
   * send text message
   * @param {*} id
   * @param {*} text
   * @param {*} quoted
   * @param {*} options
   */
  async sendText(id, text, quoted = {}, options = {}) {
    this.sendMessage(id, { text, ...options }, { quoted, ...options });
  }

  /**
   *
   * @param {*} message
   * @param {*} fileName
   * @returns
   */
  async downloadMediaMessage(message, fileName) {
    message = message?.msg ? message?.msg : message;
    let mimetype = (message.msg || message).mimetype || "";
    let mtype = message.type
      ? message.type.replace(/Message/gi, "")
      : mimetype.split("/")[0];
    const stream = await downloadContentFromMessage(message, mtype);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }

    if (fileName) {
      let ftype = await FileType.fromBuffer(buffer);
      let trueFileName = fileName
        ? fileName + "." + ftype.ext || mimetype.split("/")[1]
        : getRandom(ftype.ext || mimetype.split("/")[1]);
      return fs.writeFileSync(trueFileName, buffer);
    } else {
      return buffer;
    }
  }

  /**
   *
   * @param {*} message
   * @param {*} fileName
   * @param {*} attachExtension
   * @returns
   */
  async downloadAndSaveMediaMessage(message, filename, attachExtension = true) {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    let trueFileName = attachExtension ? filename + "." + type.ext : filename;
    // save to file
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  }

  /**
   *
   * @param {*} PATH
   * @param {*} save
   * @returns
   */
  async getFile(PATH, save) {
    let filename;
    let data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.*?\/.*?;base64,/i.test(PATH)
      ? Buffer.from(PATH.split`,`[1], "base64")
      : /^https?:\/\//.test(PATH)
      ? await fetchBuffer(PATH)
      : fs.existsSync(PATH)
      ? ((filename = PATH), fs.readFileSync(PATH))
      : typeof PATH === "string"
      ? PATH
      : Buffer.alloc(0);
    let type = (await FileType.fromBuffer(data)) || {
      mime: "application/octet-stream",
      ext: ".bin",
    };
    filename = path.join(
      __dirname,
      "../temp/" + new Date() * 1 + "." + type.ext
    );
    if (data && save) fs.promises.writeFile(filename, data);
    return {
      filename,
      size: await Buffer.byteLength(data),
      ...type,
      data,
    };
  }

  /**
   *
   * @param {*} jid
   * @param {*} PATH
   * @param {*} fileName
   * @param {*} quoted
   * @param {*} options
   * @returns
   */
  async sendFile(jid, PATH, fileName, quoted = {}, options = {}) {
    let types = await this.getFile(PATH, true);
    let { filename, size, ext, mime, data } = types;
    let type = "",
      mimetype = mime,
      pathFile = filename;
    if (options.asDocument) type = "document";
    if (options.asSticker || /webp/.test(mime)) {
      let { writeExif } = require("./Sticker");
      let media = { mimetype: mime, data };
      pathFile = await writeExif(media, {
        packname: options.packname
          ? options.packname
          : Jsl.config.exif.packname,
        author: options.author ? options.author : Jsl.config.exif.author,
        categories: options.categories ? options.categories : [],
      });
      await fs.promises.unlink(filename);
      type = "sticker";
      mimetype = "image/webp";
    } else if (/image/.test(mime)) type = "image";
    else if (/video/.test(mime)) type = "video";
    else if (/audio/.test(mime)) type = "audio";
    else type = "document";
    await this.sendMessage(
      jid,
      { [type]: { url: pathFile }, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile);
  }

  /**
   *
   * @param {*} code
   * @returns
   */
  async groupQueryInvite(code) {
    let result = await this.query({
      tag: "iq",
      attrs: {
        type: "get",
        xmlns: "w:g2",
        to: "@g.us",
      },
      content: [{ tag: "invite", attrs: { code } }],
    });
    let group = getBinaryNodeChild(result, "group");
    let descRes = getBinaryNodeChild(group, "description");
    let desc, descId, descOwner, descTime;
    if (descRes) {
      (desc = getBinaryNodeChild(descRes, "body")?.content?.toString()),
        (descId = descRes?.attrs?.id),
        (descOwner = descRes?.attrs?.participant),
        (descTime = descRes?.attrs?.t);
    }
    const hasil = {
      id: group?.attrs?.id.includes("@")
        ? group?.attrs?.id
        : group?.attrs?.id + "@g.us",
      owner: group?.attrs?.creator,
      subject: group?.attrs?.subject,
      subjectOwner: group?.attrs?.s_o,
      subjectTime: group?.attrs?.s_t,
      size: group?.attrs?.size,
      creation: group?.attrs?.creation,
      participants: group?.content
        ?.filter((v) => v.tag == "participant")
        .map((v) => v.attrs),
      desc,
      descId,
      descOwner,
      descTime,
    };

    return hasil;
  }

  /**
   * for send  react message
   * @param {*} jid
   * @param {*} imoji
   * @param {*} key
   * @returns
   */
  async sendReact(jid, imog = "", key) {
    await this.sendMessage(jid, { react: { text: imog, key: key } });
  }

  /**
   * Send error message
   * @param {*} jid
   * @param {*} error
   * @param {*} imoji
   * @param {*} key
   * @returns
   */
  async sendErrorMessage(jid, error, key, quoted, btn = [], onReat = true) {
    let butn = {
      buttonId: ".report",
      buttonText: { displayText: "Report Error|Bug" },
      type: 1,
    };
    btn.push(butn);
    const imog = await Jsl.reactArry("ERROR");
    onReat ? await this.sendMessage(jid, {
      react: { text: imog, key: key },
    }) : '';
    await this.sendMessage(
      jid,
      {
        image: { url: Jsl.config.image.url.D_E_ERR },
        footer: `${Jsl.config.exif.footer} Error Message`,
        buttons: btn,
        caption: Jsl.errorMessage(error),
      },
      { quoted: quoted }
    );
  }
}

// #################################################################################################
// #################################################################################################
// #################################################################################################
// #################################################################################################
class serialize {
  constructor(conn, m, options = {}) {
    if (!m) return m;
    m = M.fromObject(m);
    for (let i in m) this[i] = m[i];
    this._key(conn);
    this._message(conn);
    this.conn = conn;
    this.body = this.text =
      this.message?.conversation ||
      this.message?.[this.type]?.text ||
      this.message?.[this.type]?.caption ||
      this.message?.[this.type]?.contentText ||
      this.message?.[this.type]?.selectedDisplayText ||
      this.message?.[this.type]?.title ||
      "";
    this._client(conn);
  }

  _key(conn) {
    if (this.key) {
      this.from = jidNormalizedUser(this.key.remoteJid || this.key.participant);
      this.fromMe = this.key.fromMe;
      this.id = this.key.id;
      this.isBot = this.id.startsWith("BAE5") && this.id.length == 16;
      this.isGroup = this.from.endsWith("@g.us");
      this.sender = jidNormalizedUser(
        (this.fromMe && conn.user?.id) ||
          this.key.participant ||
          this.from ||
          ""
      );
    }
  }

  _message(conn) {
    if (this.message) {
      this.type = getContentType(this.message);
      this.message = extractMessageContent(this.message);
      this.msg = this.message[this.type];
      this.mentions = this.msg?.contextInfo
        ? this.msg?.contextInfo.mentionedJid
        : [];
      this.quoted = this.msg?.contextInfo
        ? this.msg?.contextInfo.quotedMessage
        : null;
      if (this.quoted) {
        this.quoted.type = getContentType(this.quoted);
        this.quoted.msg = this.quoted[this.quoted.type];
        this.quoted.mentions = this.msg.contextInfo.mentionedJid;
        this.quoted.id = this.msg.contextInfo.stanzaId;
        this.quoted.sender = jidNormalizedUser(
          this.msg.contextInfo.participant || this.sender
        );
        this.quoted.from = this.from;
        this.quoted.isGroup = this.quoted.from.endsWith("@g.us");
        this.quoted.isBot =
          this.quoted.id.startsWith("BAE5") && this.quoted.id == 16;
        this.quoted.fromMe =
          this.quoted.sender == jidNormalizedUser(conn.user && conn.user?.id);
        this.quoted.text =
          this.quoted.msg?.text ||
          this.quoted.msg?.caption ||
          this.quoted.msg?.conversation ||
          this.quoted.msg?.contentText ||
          this.quoted.msg?.selectedDisplayText ||
          this.quoted.msg?.title ||
          "";
        let vM = (this.quoted.fakeObj = M.fromObject({
          key: {
            remoteJid: this.quoted.from,
            fromMe: this.quoted.fromMe,
            id: this.quoted.id,
          },
          message: this.quoted,
          ...(this.quoted.isGroup ? { participant: this.quoted.sender } : {}),
        }));
        this.quoted.delete = () =>
          conn.sendMessage(this.quoted.from, { delete: vM.key });
        this.quoted.download = (pathFile) =>
          conn.downloadMediaMessage(this.quoted.msg, pathFile);
      }
    }
  }

  _client(conn) {
    this.client = new Object();
    this.client.displayText =
      this.message?.conversation ||
      this.message?.[this.type]?.text ||
      this.message?.[this.type]?.caption ||
      this.message?.[this.type]?.contentText ||
      this.message?.[this.type]?.selectedDisplayText ||
      this.message?.[this.type]?.title ||
      "";
    this.client.displayId = this.client.body =
      this.message?.conversation ||
      this.message?.[this.type]?.text ||
      this.message?.[this.type]?.caption ||
      this.message?.[this.type]?.selectedButtonId ||
      this.message?.[this.type]?.singleSelectReply?.selectedRowId ||
      this.message?.[this.type]?.selectedId ||
      this.type === "messageContextInfo"
        ? this.message.buttonsResponseMessage?.selectedButtonId ||
          this.message.listResponseMessage?.singleSelectReply?.selectedRowId ||
          this.text
        : "";
    this.client.budy = typeof this.text == "string" ? this.text : "";
    this.client.prefix = prefa
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(this.client.body)
        ? this.client.body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : prefa ?? global.prefix;
    this.client.isCmd = this.client.body.startsWith(this.client.prefix);
    this.client.command = this.client.body
      .replace(this.client.prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    this.client.args = this.client.body.trim().split(/ +/).slice(1);
    this.client.pushName = this.pushName || "No Name";
    this.client.botNumber = jidNormalizedUser(conn.user.id);
    this.client.isCreator = [this.client.botNumber, ...global.owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(this.sender);
    this.client.itsMe = this.sender == this.client.botNumber ? true : false;
    this.client.text = this.client.args.join(" ");
    this.client.quoted = this.quoted ? this.quoted : this;
    this.client.mime =
      (this.client.quoted.msg || this.client.quoted).mimetype || "";
    this.client.isMedia = /image|video|sticker|audio/.test(this.client.mime);
    this.client.from = this.key.remoteJid;
    this.client.messagesD = this.client.body
      .slice(0)
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
  }

  async download(pathFile) {
    await this.conn.downloadMediaMessage(this.msg, pathFile);
  }

  async reply(text, chatId = this.from, options = {}) {
    await this.conn.sendMessage(
      chatId,
      { text: "```" + text + "```" },
      { quoted: this }
    );
  }
}

// #################################################################################################
// #################################################################################################
// #################################################################################################
// #################################################################################################
const smsg = (conn, m, options = {}) => {
  if (!m) return m;
  let M = proto.WebMessageInfo;
  m = M.fromObject(m);
  if (m.key) {
    m.from = jidNormalizedUser(m.key.remoteJid || m.key.participant);
    m.fromMe = m.key.fromMe;
    m.id = m.key.id;
    m.isBot = m.id.startsWith("BAE5") && m.id.length == 16;
    m.isGroup = m.from.endsWith("@g.us");
    m.sender = jidNormalizedUser(
      (m.fromMe && conn.user?.id) || m.key.participant || m.from || ""
    );
  }
  if (m.message) {
    m.type = getContentType(m.message);
    m.message = extractMessageContent(m.message);
    m.msg = m.message[m.type];
    m.mentions = m.msg?.contextInfo ? m.msg?.contextInfo.mentionedJid : [];
    m.quoted = m.msg?.contextInfo ? m.msg?.contextInfo.quotedMessage : null;
    if (m.quoted) {
      m.quoted.type = getContentType(m.quoted);
      m.quoted.msg = m.quoted[m.quoted.type];
      m.quoted.mentions = m.msg.contextInfo.mentionedJid;
      m.quoted.id = m.msg.contextInfo.stanzaId;
      m.quoted.sender = jidNormalizedUser(
        m.msg.contextInfo.participant || m.sender
      );
      m.quoted.from = m.from;
      m.quoted.isGroup = m.quoted.from.endsWith("@g.us");
      m.quoted.isBot = m.quoted.id.startsWith("BAE5") && m.quoted.id == 16;
      m.quoted.fromMe =
        m.quoted.sender == jidNormalizedUser(conn.user && conn.user?.id);
      m.quoted.text =
        m.quoted.msg?.text ||
        m.quoted.msg?.caption ||
        m.quoted.msg?.conversation ||
        m.quoted.msg?.contentText ||
        m.quoted.msg?.selectedDisplayText ||
        m.quoted.msg?.title ||
        "";
      let vM = (m.quoted.fakeObj = M.fromObject({
        key: {
          remoteJid: m.quoted.from,
          fromMe: m.quoted.fromMe,
          id: m.quoted.id,
        },
        message: m.quoted,
        ...(m.quoted.isGroup ? { participant: m.quoted.sender } : {}),
      }));
      m.quoted.delete = () =>
        conn.sendMessage(m.quoted.from, { delete: vM.key });
      m.quoted.download = (pathFile) =>
        conn.downloadMediaMessage(m.quoted.msg, pathFile);
    }
  }
  m.download = (pathFile) => conn.downloadMediaMessage(m.msg, pathFile);
  m.body = m.text =
    m.message?.conversation ||
    m.message?.[m.type]?.text ||
    m.message?.[m.type]?.caption ||
    m.message?.[m.type]?.contentText ||
    m.message?.[m.type]?.selectedDisplayText ||
    m.message?.[m.type]?.title ||
    "";
  m.reply = (text, chatId = m.from, options = {}) =>
    Buffer.isBuffer(text)
      ? conn.sendFile(chatId, text, "file", "", m, { ...options })
      : conn.sendText(chatId, text, m, { ...options });

  return m;
};

module.exports = { smsg, serialize, WAConnection };

//   this.client.body =
//   this.mtype === "conversation"
//     ? this.message.conversation
//     : this.mtype == "imageMessage"
//     ? this.message.imageMessage.caption
//     : this.mtype == "videoMessage"
//     ? this.message.videoMessage.caption
//     : this.mtype == "extendedTextMessage"
//     ? this.message.extendedTextMessage.text
//     : this.mtype == "buttonsResponseMessage"
//     ? this.message.buttonsResponseMessage.selectedButtonId
//     : this.mtype == "listResponseMessage"
//     ? this.message.listResponseMessage.singleSelectReply.selectedRowId
//     : this.mtype == "templateButtonReplyMessage"
//     ? this.message.templateButtonReplyMessage.selectedId
//     : this.mtype === "messageContextInfo"
//     ? this.message.buttonsResponseMessage?.selectedButtonId ||
//       this.message.listResponseMessage?.singleSelectReply.selectedRowId ||
//       this.text
//     : "";

// m.group = new Object
//         m.group.groupMetadata = m.isGroup ? await conn.groupMetadata(m.from).catch((e) => {}) : "";
//         m.group.groupName = m.isGroup ? m.group.groupMetadata.subject : "Can not find group subject";
//         m.group.participants = m.isGroup ? m.group.groupMetadata.participants : [];
//         m.group.groupAdmins = m.isGroup ? m.group.participants.filter((v) => v.admin !== null).map((v) => v.id) : [];
//         m.group.groupOwner = m.isGroup ? m.group.groupMetadata.owner : null;
//         m.group.isBotAdmins = m.isGroup ? m.group.groupAdmins.includes(m.client.botNumber) : false;
//         m.group.isAdmins = m.isGroup ? m.group.groupAdmins.includes(m.sender) : false;
