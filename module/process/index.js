'use strict';

function exit(code, message) {
  switch (code) {
    case 0:
      break;
    default :
      console.error(message);
      throw Error(message);
      break;
  }
  process.exit(code);
}

/**
 * @see https://github.com/hexojs/hexo-cli/blob/master/lib/goodbye.js
 * @returns {string}
 */
function goodbye() {
  var byeWords = [
    'Good bye',
    'See you again',
    'Farewell',
    'Have a nice day',
    'Bye!',
    'Catch you later'
  ];

  console.log(byeWords[(Math.random() * byeWords.length) | 0]);
  return exit(0);
}

function argv() {
  return process.argv.slice(2);
}

function cwd() {
  return process.cwd();
}

function setTitle(name) {
  if (name) {
    process.title = name;
  }
}

module.exports = {
  setTitle: setTitle,
  argv: argv,
  cwd: cwd,
  exit: exit,
  goodbye: goodbye
};
