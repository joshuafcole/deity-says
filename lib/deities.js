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
  }
];


module.exports = deities;
