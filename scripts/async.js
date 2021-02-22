'use strict'
const { getFiles } = require('../lib/util')
const fs = require('fs')

const files = getFiles()

console.log('Reading %d files', files.length)
console.time('read:async')

let contentLen = 0
let tasks = files.length

for (const file of files) {
  fs.readFile(file, 'utf8', function (err, content) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    contentLen += content.length
    tasks--
    if (tasks == 0) done()
  })
}

function done() {
  console.timeEnd('read:async')
  console.log('Total chars: %d', contentLen)
}
