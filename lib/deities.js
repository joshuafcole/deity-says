var chalk = require('chalk');
var art = require('../art');


var deities = [
  {
    name: 'Satan',
    drawings: [art.pentagram],
    style: {
      transformFirst: chalk.red,
      transformLast: chalk.yellow
    }
  },
  {
    name: 'Flying Spaghetti Monster',
    drawings: [art.fsm],
    style: {
      transformFirst: chalk.yellow,
    }
  },
  {
    name: 'Dionysus',
    drawings: [art.dionysus],
    style: {
      transformFirst: chalk.blue,
      transformLast: chalk.magenta
    }
  },
  {
    name: 'Jesus',
    drawings: [art.jesus],
    style: {
      transformFirst: chalk.white,
      tranformLast: chalk.gray
    }
  },
  {
    name: 'Icarus',
    drawings: [art.icarus],
    style: {
      transformFirst: chalk.yellow,
      tranformLast: chalk.white
    }
  },
  {
    name: 'Mr. Hanky',
    drawings: [art.hanky],
    style: {
      transformFirst: chalk.green,
      transformLast: chalk.red
    }
  }
];


module.exports = deities;
