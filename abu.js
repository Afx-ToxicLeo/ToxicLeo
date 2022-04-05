
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
    
};
