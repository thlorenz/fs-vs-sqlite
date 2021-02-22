'use strict'
const { strict: assert } = require('assert')
const { getFiles } = require('../lib/util')
const path = require('path')
const fs = require('fs')

const files = getFiles()

const AMOUNT = process.env.AMOUNT
assert(AMOUNT != null)
const amount = parseInt(AMOUNT)

console.log('duping %d times', amount)

for (const fullPath of files) {
  const file = path.basename(fullPath)
  if (file.startsWith('dupe-')) continue

  const dir = path.dirname(fullPath)
  const bytes = fs.readFileSync(fullPath)

  for (let i = 0; i < amount; i++) {
    const filename = `dupe-${i}-${file}`
    fs.writeFileSync(path.join(dir, filename), bytes)
  }
}
