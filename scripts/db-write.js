'use strict'

const fs = require('fs')
const { getFiles } = require('../lib/util')
const { Db } = require('../lib/db')

async function run() {
  const db = await Db.open()
  await db.reset()

  const files = getFiles()
  console.log('Inserting %d files', files.length)

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8')
    await db.insertFile(file, content)
  }
}

run()
