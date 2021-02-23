'use strict'

const Database = require('better-sqlite3')

class Db {
  constructor(db) {
    this._db = db
  }

  selectAllFiles() {
    const stmt = this._db.prepare('SELECT file FROM file_cache')
    return stmt.all()
  }

  selectAllContent() {
    const stmt = this._db.prepare('SELECT content FROM file_cache')
    return stmt.all()
  }

  selectAll() {
    const stmt = this._db.prepare('SELECT * FROM file_cache')
    return stmt.all()
  }

  static open(filename = '/tmp/cypress-cache.db') {
    const db = new Database(filename)
    return new Db(db)
  }
}

module.exports = { Db }
