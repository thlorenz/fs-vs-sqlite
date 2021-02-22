'use strict'
const { getFiles } = require('../lib/util')
const path = require('path')
const fs = require('fs')

const files = getFiles()

for (const fullPath of files) {
  const file = path.basename(fullPath)
  if (!file.startsWith('dupe-')) continue
  fs.unlinkSync(fullPath)
}
