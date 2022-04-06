
/* codded by afnanplk
modified by Afx-Abu
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// ktb some  Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 Bot: process.env.Bot === undefined ? 'https://avatars.githubusercontent.com/u/85664936?s=1080&v=1080.png' : process.env.Bot,
 THUMBNAIL: process.env.THUMBNAIL_URL === undefined ? 'https://i.imgur.com/xsKCqwZ.jpeg' : process.env.THUMBNAIL_URL,
 VERIFY: process.env.VERIFICATION_CAPTION === undefined ? '[ABU SER]\nCoded by @AFX-ABU' : process.env.VERIFICATION_CAPTION,
    
};
