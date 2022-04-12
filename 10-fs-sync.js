const {readFileSync, writeFileSync} = require('fs')
// another way to write above statement 
// const fs = require('fs')
// fs.readFileSync
// fs.writeFileSync

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }// if the file result-sync.txt is not present node will create one and if that file already exists, node will overwrite it's contents but of you put flag: 'a' then node will append the contents to the file

)
console.log('done with this task')
console.log('starting the next one')