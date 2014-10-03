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

function bubblify(message, maxLen, style) {
  style = style || identity;
  message = message.replace(/\t/g, '    ');
  maxLen = (maxLen || 80) - 4;
  var innerWidth = Math.max(Math.min(message.length, maxLen - 1), 10);
  var topBar = style(' ,-' + repeatString('-', innerWidth) + '.');
  var bottomBar = style(' `' + repeatString('-', innerWidth + 1) + '\'');
  //var nub = style('<\'/');

  var lines = [];
  var i = 0;
  var msgLines = message.split('\n');
  var msgLine;
  while(msgLines.length) {
    msgLine = msgLines.shift();
    while(msgLine) {
      lines.push(msgLine.substring(0, innerWidth));
      msgLine = msgLine.substring(innerWidth, msgLine.length);
    }
  }

  var wrappedLines = lines.map(function(line, i) {
    var prefix =  style(' | ');
    if(i === 0) {
      prefix = style('<  ');
    }
    var suffix = style(' |');
    return prefix + chalk.reset(padRight(line, innerWidth)) + suffix;
  });

  return [
    topBar,
    wrappedLines.join('\n'),
    bottomBar,
    //nub
  ].join('\n');
}
exports.bubblify = bubblify;

function getMaxWidth(str) {
  var lines = str.split('\n');
  var maxWidth = 0;
  lines.forEach(function(line) {
    var len = chalk.stripColor(line).length;
    if(len > maxWidth) {
      maxWidth = len;
    }
  });
  return maxWidth;
}
exports.getMaxWidth = getMaxWidth;

function padRect(message) {
  var width = getMaxWidth(message);
  return message.split('\n').map(function(line) {
    return padRight(line, width);
  }).join('\n');
}
exports.padRect = padRect;

function inlineMerge(first, second, opts) {
  first = first || '';
  second = second || '';
  opts = opts || {};
  var transformFirst = opts.transformFirst || identity;
  var transformLast = opts.transformLast || identity;

  var firstLines = padRect(first).split('\n');
  var secondLines = second.split('\n');


  var output = '';
  while(true) {
    if(firstLines.length === 0 && secondLines.length === 0) {
      break;
    }

    var leftLine = firstLines.shift() || '';
    var rightLine = secondLines.shift() || '';
    output += transformFirst(leftLine) + transformLast(rightLine) + '\n';
  }

  return output;
}
exports.inlineMerge = inlineMerge;
