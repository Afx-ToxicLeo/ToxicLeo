const Config = require('../config');
const fs = require('fs');
const chalk = require('chalk');

if (fs.existsSync('./language/en.json')) {

    var json = JSON.parse(fs.readFileSync('./language/en.json'));
} else {
    console.log(
        chalk.red.bold('You entered an invalid language. English language was chosen.')
    );

    var json = JSON.parse(fs.readFileSync('./language/en.json'));
}

function getString(file) {
    return json['STRINGS'][file];
}

module.exports = {
    language: json,
    getString: getString
}
