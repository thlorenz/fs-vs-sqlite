'use strict'

const { Db } = require('../lib/db')

async function run() {
  const db = await Db.open()
  const files = await db.selectAll()

  let contentLen = 0

  console.time('db:async.get')
  for (const { file } of files) {
    const { content } = await db.getContent(file)
    contentLen += content.length
  }
  console.timeEnd('db:async.get')

  console.log('Read %d files, total chars %d', files.length, contentLen)
}

run()
