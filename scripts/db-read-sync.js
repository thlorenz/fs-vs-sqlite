'use strict'

const { Db } = require('../lib/db-sync')

function run() {
  const db = Db.open()

  console.time('db:sync')
  const files = db.selectAll()
  console.timeEnd('db:sync')

  const chars = files.reduce((sum, x) => sum + x.content.length, 0)

  console.log('Read %d files, total chars %d', files.length, chars)
}

run()
