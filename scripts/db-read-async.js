'use strict'

const { Db } = require('../lib/db')

async function run() {
  const db = await Db.open()

  console.time('db:async')
  const files = await db.selectAll()
  console.timeEnd('db:async')

  const chars = files.reduce((sum, x) => sum + x.content.length, 0)

  console.log('Read %d files, total chars %d', files.length, chars)
}

run()
