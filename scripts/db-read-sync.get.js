'use strict'

const { Db } = require('../lib/db-sync')

function run() {
  const db = Db.open()

  const files = db.selectAllFiles()
  let contentLen = 0

  console.time('db:sync.get')
  for (const { file } of files) {
    const { content } = db.getContent(file)
    contentLen += content.length
  }
  console.timeEnd('db:sync.get')

  console.log('Read %d files, total chars %d', files.length, contentLen)
}

run()
