#!/usr/bin/env node

var chalk = require('chalk');
var util = require('./lib/util');
var art = require('./art');

var speakers = [
  {
    name: 'satan',
    art: art.pentagram,
    messages: [
      'Don\'t sweat it.',
      'No problem.',
      'That\'ll be twelve souls...',
      'Anything to one up the big man.',
      'Don\'t mention it. Seriously. Don\'t.'
    ]
  }
];

var speaker = util.choose(speakers);
var message = util.choose(speaker.messages);
var bubble = util.bubblify(message);

function showMessage() {
  console.log(util.inlineMerge(speaker.art, bubble, {
    transformFirst: chalk.red,
    transformLast: chalk.yellow
  }));
}

if(process.stdin.isTTY) {
  showMessage();
} else {
  process.stdin.pipe(process.stdout);
  process.stdin.on('end', showMessage);
}


