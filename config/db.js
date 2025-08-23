const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "express.js",
    multipleStatements: true
})

module.exports = db