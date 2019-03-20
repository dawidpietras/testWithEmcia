const yargs = require('yargs');
const request = require('request');
const myRequest = require('./myRequest.js')

const argv = yargs.argv;

console.log(argv);
var dave = null;
var waluta = argv._[0];
var response = null;

myRequest.myRequest(waluta, (response) => {
  console.log(`Kurs ${response.nazwaWaluty} wynosi:   ${response.kurs} zlotego`);
});
