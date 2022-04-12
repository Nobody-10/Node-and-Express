const path = require('path')

console.log(path.sep)

const filePath = path.join('tutorial', 'test.txt') //to print a custom path
console.log(filePath)

const base = path.basename(filePath) //to print the name of the current working file
console.log(base)

const absolute = path.resolve(__dirname, 'test.txt') //to get path of the current working directory and add anything to that path
console.log(absolute)