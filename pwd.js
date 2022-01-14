const { cwd } = require('process');

function pwd(cmd){

  if (cmd === 'pwd') {
    process.stdout.write(cwd());
  }
  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

}

module.exports = pwd;
