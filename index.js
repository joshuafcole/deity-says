

var chalk = require('chalk');
var util = require('./lib/util');
var art = require('./art');

var speakers = [
  {
    name: 'Satan',
    drawings: [art.pentagram],
    messages: [
      'Don\'t sweat it.',
      'That\'ll be twelve souls...',
      'Anything to one up the big man.',
      'Don\'t mention it. Seriously. Don\'t.',
      'Your service has been richly rewarded.'
    ],
    style: {
      transformFirst: chalk.red,
      transformLast: chalk.yellow
    }
  },
  {
    name: 'Flying Spaghetti Monster',
    drawings: [art.fsm],
    messages: [
      'My noodly appendages will forever by within you.',
      'Volcanoes of beer await your continued loyalty.',
      'Don\'t forget to fight global warming by becoming a pirate!'
    ],
    style: {
      transformFirst: chalk.yellow,
    }
  },
  {
    name: 'Dionysus',
    drawings: [art.dionysus],
    messages: [
      'Thank me with liquor!',
      'Eat, drink, and be merry with me!',
      'Ah yes, now, on with the party.'
    ],
    style: {
      transformFirst: chalk.blue,
      transformLast: chalk.magenta
    }
  }
];

var speaker = util.choose(speakers);
var drawing = util.choose(speaker.drawings);
var message = util.choose(speaker.messages);
var bubble = util.bubblify(message);

function showMessage() {
  process.stdout.write(util.inlineMerge(drawing, bubble, speaker.style));
}

if(process.stdin.isTTY) {
  showMessage();
} else {
  process.stdin.pipe(process.stdout);
  process.stdin.on('end', showMessage);
}


