const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.resolve(__dirname, "./Economia_general.db");
const db = new Database(dbPath);

module.exports = db;
