module.exports = {
    ...require('./lib/db/lowdb/adapters/JSONFile.js'),
    ...require('./lib/db/lowdb/adapters/JSONFileSync.js'),
    ...require('./lib/db/lowdb/adapters/LocalStorage.js'),
    ...require('./lib/db/lowdb/adapters/Memory.js'),
    ...require('./lib/db/lowdb/adapters/MemorySync.js'),
    ...require('./lib/db/lowdb/adapters/TextFile.js'),
    ...require('./lib/db/lowdb/adapters/TextFileSync.js'),
    ...require('./Low.js'),
    ...require('./LowSync.js'),
}
