const chalk = require("chalk");
const Jsl = require('../events')
const config = require("./config");

module.exports = async (conn, m, iSecond = false) => {
  try {
    if (m.message && !iSecond) {
      console.log(
        chalk.black(chalk.bgWhite("[ 𝚄𝚂𝙴𝚁 𝙵𝙾𝚁 𝚈𝙾𝚄𝚁 𝙱𝙾𝚃 ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(m.client.displayText || m.type)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(m.client.pushName),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? m.client.pushName : "Private Chat", m.from)
      );
    }
    if (iSecond) {
      if (config.auto.presence.is) {
        if (config.auto.presence.value == "typing") {
          if (m.from) conn.sendPresenceUpdate("composing", m.chat);
        } else if (config.auto.presence.value == "recoding") {
          if (m.from) conn.sendPresenceUpdate("recording", m.chat);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
};
