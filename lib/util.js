var chalk = require('chalk');

function identity(x) {
  return x;
}

function choose(arr) {
  if(!arr.length) {
    return;
  }
  return arr[Math.floor(Math.random() * arr.length)];
}
exports.choose = choose;

function repeatString(str, times) {
  return new Array(times + 1).join(str);
}

exports.repeatString = repeatString;

function padLeft(str, min, pad) {
  str = str || '';
  min = min || 0;
  pad = pad || ' ';

  var len = chalk.stripColor(str).length;
  if(len < min) {
    return repeatString(pad, min - len) + str;
  }

  return str;
}

exports.padLeft = padLeft;

function padRight(str, min, pad) {
  str = str || '';
  min = min || 0;
  pad = pad || ' ';

  var len = chalk.stripColor(str).length;
  if(len < min) {
    return str + repeatString(pad, min - len);
  }

  return str;
}
exports.padRight = padRight;

function bubblify(message, maxLen) {
  maxLen = maxLen || 80;
  var innerWidth = Math.max(Math.min(message.length, maxLen), 10);
  var topBar = ',' + repeatString('-', innerWidth + 1) + '.';
  var bottomBar = '\\  ,' + repeatString('-', innerWidth - 2) + '\'';
  var nub = '<\'/';

  var lines = [];
  var i = 0;
  while(message) {
    lines.push(message.substring(0, innerWidth));
    message = message.substring(innerWidth, message.length);
  }
  var wrappedLines = lines.map(function(line) {
    return '| ' + padRight(line, innerWidth) + ' |';
  });

  return [
    topBar,
    wrappedLines.join('\n'),
    bottomBar,
    nub
  ].join('\n');
}
exports.bubblify = bubblify;

function inlineMerge(first, second, opts) {
  first = first || '';
  second = second || '';
  opts = opts || {};
  var transformFirst = opts.transformFirst || identity;
  var transformLast = opts.transformLast || identity;

  var firstLines = first.split('\n');
  var secondLines = second.split('\n');

  var firstWidth = 0;
  firstLines.forEach(function(line) {
    var len = chalk.stripColor(line).length;
    if(len > firstWidth) {
      firstWidth = len;
    }
  });

  var output = '';
  while(true) {
    if(firstLines.length === 0 && secondLines.length === 0) {
      break;
    }

    var leftLine = padRight(firstLines.shift(), firstWidth);
    var rightLine = secondLines.shift() || '';
    output += transformFirst(leftLine) + transformLast(rightLine) + '\n';
  }

  return output;
}
exports.inlineMerge = inlineMerge;
