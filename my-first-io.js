const fs = require('fs')

const file = "testo.txt";

const content = fs.readFileSync(file, 'utf-8')
const countline = (content.match(/\n/g)).length
console.log(countline)