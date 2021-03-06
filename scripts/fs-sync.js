'use strict'
const { getFiles } = require('../lib/util')
const fs = require('fs')

const files = getFiles()

console.log('Reading %d files', files.length)
console.time('read:sync')

let contentLen = 0

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8')
  contentLen += content.length
}
console.timeEnd('read:sync')

console.log('Total chars: %d', contentLen)
