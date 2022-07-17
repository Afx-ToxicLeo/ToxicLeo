const {LANGUAGE,VERSION} = require('../../config');
const {existsSync,readFileSync} = require('fs');
var json = existsSync(__dirname+'/lang/' + LANGUAGE + '.json') ? JSON.parse(readFileSync(__dirname+'/lang/' + LANGUAGE + '.json')) : JSON.parse(readFileSync(__dirname+'/lang/en.json'));
console.log("ABU-MD "+VERSION)
function getString(file) { return json['STRINGS'][file]; }
module.exports = {language: json, getString: getString }
