'use strict'

const path = require('path')
const { strict: assert } = require('assert')
const glob = require('glob')

function getFilesFrom(root) {
  const relPaths = glob.sync('**/*.ts', { cwd: root })
  return relPaths.map((x) => path.join(root, x))
}

function getFiles() {
  const ROOT_DIR = process.env.ROOT_DIR
  assert(ROOT_DIR != null, 'need to provide ROOT_DIR')
  return getFilesFrom(ROOT_DIR)
}

module.exports = { getFiles }
