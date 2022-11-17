const fs = require('fs/promises');
const sorter = require('json-keys-sort');
const { program } = require('commander');

const LCINFO = '\x1b[36m%s\x1b[0m'; //cyan

program
  .name('JSON Sorter')
  .description('This program sorts JSON files by keys.')
  .argument('<inputPath>', 'Path of JSON-file that needs sorting')
  .option(
    '-o, --out <path>',
    `Path of the JSON-file to which the output will be written. If the file already exists, a copy will be generated. If not specified a copy of the input file will be generated.`,
  )
  .option('-d, --desc', 'Sort the keys in descending order');

program.parse();

const pathIn = program.args[0];
console.info(LCINFO, 'Reading Json from file at: ' + pathIn);
console.log('');

fs.readFile(pathIn)
  .then((data) => {
    const json = JSON.parse(data);
    console.log(LCINFO, 'The following object was read from file:');
    console.log(json);
    console.log('');

    const ascending = !program.opts().out;
    return sorter.sort(json, ascending);
  })
  .then((json_sorted) => {
    console.log(LCINFO, 'This object will be written to file:');
    console.log(json_sorted);
    console.log('');

    const jsonText = JSON.stringify(json_sorted, null, 2);

    const pathOut = getPathOut();
    console.info(LCINFO, 'Writing Json from file at: ' + pathOut);
    console.log('');

    return fs.writeFile(pathOut, jsonText);
  })
  .then(() => {
    console.log(LCINFO, 'DONE!');
  })
  .catch((e) => console.error('The following error occurred', e));

function getPathOut() {
  const pathOut = program.opts().out;
  if (!pathOut) {
    const parts = pathIn.split('.json');
    return parts[0] + '_copy.json';
  } else {
    return pathOut;
  }
}
