'use strict'

const { Db } = require('../lib/db')

async function run() {
  const db = await Db.open()

  const files = await db.selectAll()

  const lines = files.reduce(
    (sum, x) => sum + x.content.toString().split('\n').length,
    0
  )

  console.log('Read %d files, total lines %d', files.length, lines)
}

run()
