const {LANGUAGE,VERSION} = require('../../config');
const {existsSync,readFileSync} = require('fs');
var json = existsSync(__dirname+'/language/' + LANGUAGE + '.json') ? JSON.parse(readFileSync(__dirname+'/language/' + LANGUAGE + '.json')) : JSON.parse(readFileSync(__dirname+'/language/en.json'));
console.log("Abu-MD")
function getString(file) { return json['STRINGS'][file]; }
module.exports = {language: json, getString: getString }

