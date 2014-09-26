var fs = require('fs');
var path = require('path');

function getArt(name) {
  return fs.readFileSync(path.join(__dirname, name + '.txt'), {encoding: 'utf8'});
}

module.exports = {
  pentagram: getArt('pentagram')
};
