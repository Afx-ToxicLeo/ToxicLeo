const fs = require("fs");
const path = require("path");
const gis = require("g-i-s");
const { spawn } = require("child_process");

async function gimage(query, amount = 5) {
  let list = [];
  return new Promise((resolve, reject) => {
    gis(query, async (error, result) => {
      for (
        var i = 0;
        i < (result.length < amount ? result.length : amount);
        i++
      ) {
        list.push(result[i].url);
        resolve(list);
      }
    });
  });
}

async function ffmpeg(buffer, args = [], ext = "", ext2 = "") {
  return new Promise(async (resolve, reject) => {
    try {
      let tmp = path.join(__dirname, "../media", +new Date() + "." + ext);
      let out = tmp + "." + ext2;
      await fs.promises.writeFile(tmp, buffer);
      spawn("ffmpeg", ["-y", "-i", tmp, ...args, out])
        .on("error", reject)
        .on("close", async (code) => {
          try {
            await fs.promises.unlink(tmp);
            if (code !== 0) return reject(code);
            resolve(await fs.promises.readFile(out));
            await fs.promises.unlink(out);
          } catch (e) {
            reject(e);
          }
        });
    } catch (e) {
      reject(e);
    }
  });
}

async function toAudio(buffer, ext) {
  return ffmpeg(
    buffer,
    ["-vn", "-ac", "2", "-b:a", "128k", "-ar", "44100", "-f", "mp3"],
    ext,
    "mp3"
  );
}

async function toPTT(buffer, ext) {
  return ffmpeg(
    buffer,
    [
      "-vn",
      "-c:a",
      "libopus",
      "-b:a",
      "128k",
      "-vbr",
      "on",
      "-compression_level",
      "10",
    ],
    ext,
    "opus"
  );
}

async function toVideo(buffer, ext) {
  return ffmpeg(
    buffer,
    [
      "-c:v",
      "libx264",
      "-c:a",
      "aac",
      "-ab",
      "128k",
      "-ar",
      "44100",
      "-crf",
      "32",
      "-preset",
      "slow",
    ],
    ext,
    "mp4"
  );
}

async function webp2mp4(source) {
    let form = new FormData();
    let isUrl = typeof source === "string" && /https?:\/\//.test(source);
    form.append("new-image-url", isUrl ? source : "");
    form.append("new-image", isUrl ? "" : source, "image.webp");
    let res = await fetch("https://ezgif.com/webp-to-mp4", {
      method: "POST",
      body: form,
    });
    let html = await res.text();
    let { document } = new JSDOM(html).window;
    let form2 = new FormData();
    let obj = {};
    for (let input of document.querySelectorAll("form input[name]")) {
      obj[input.name] = input.value;
      form2.append(input.name, input.value);
    }
    let res2 = await fetch("https://ezgif.com/webp-to-mp4/" + obj.file, {
      method: "POST",
      body: form2,
    });
    let html2 = await res2.text();
    let { document: document2 } = new JSDOM(html2).window;
    return new URL(
      document2.querySelector("div#output > p.outfile > video > source").src,
      res2.url
    ).toString();
  }

module.exports = {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  webp2mp4,
  gimage
};
