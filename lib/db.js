'use strict'

const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

const SQL_CREATE = `
  DROP TABLE IF EXISTS file_cache;

  CREATE TABLE file_cache (
    file    TEXT,
    content BLOB
  );

  CREATE UNIQUE INDEX IF NOT EXISTS file_idx ON file_cache (file);
`

class Db {
  constructor(db) {
    this._db = db
  }

  insertFile(file, content) {
    return this._db.run(
      'INSERT INTO file_cache (file, content) VALUES (?, ?)',
      file,
      content
    )
  }

  selectAllFiles() {
    return this._db.all('SELECT file FROM file_cache')
  }

  selectAllContent() {
    return this._db.all('SELECT content FROM file_cache')
  }

  selectAll() {
    return this._db.all('SELECT * FROM file_cache')
  }

  getContent(file) {
    return this._db.get('SELECT content FROM file_cache WHERE file = ?', file)
  }

  reset() {
    return this._db.exec(SQL_CREATE)
  }

  async close() {
    return this._db.close()
  }

  static async open(filename = '/tmp/cypress-cache.db') {
    const db = await open({
      filename,
      driver: sqlite3.Database,
    })
    return new Db(db)
  }
}

module.exports = { Db }
