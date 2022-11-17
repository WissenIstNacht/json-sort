const { program } = require('commander');

program
  .name('JSON Sorter')
  .argument('<inputPath>', 'Path of JSON-file that needs sorting');

program.parse(process.argv);
console.log(program.args);
