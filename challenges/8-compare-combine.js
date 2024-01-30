const fs = require('fs/promises');


function findLongest(){
const secretMessage = fs.readFile('./secret-message.txt');
const superSecret =  fs.readFile('./super-secret-message.txt');

console.log(secretMessage);
console.log(superSecret);








}
