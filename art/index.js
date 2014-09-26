var fs = require('fs');
var path = require('path');
var indeks = require('indeks');

function getArt(name) {
  return fs.readFileSync(name, {encoding: 'utf8'});
}

module.exports = indeks.index(__dirname, {loader: getArt, ext: '.txt'});
