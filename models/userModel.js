const db = require("../config/db");

const User = {
    getAll: (callback) => {
        db.query("SELECT * FROM users", callback)
    },

    getById: (id, callback) => {
        db.query("SELECT * FROM users WHERE id = ?", [id], callback)
    },

    create: (data, callback) => {
        const { email, username, name, password } = data
        db.query(
        "INSERT INTO users (email, username, name, password) VALUES (?, ?, ?, ?)",
        [email, username, name, password],
        callback
        )
    },

    update: (id, data, callback) => {
        const { email, username, name, password } = data
        db.query(
        "UPDATE users SET email = ?, username = ?, name = ?, password = ? WHERE id = ?",
        [email, username, name, password, id],
        callback
        )
    },

    delete: (id, callback) => {
        db.query("DELETE FROM users WHERE id = ?", [id], callback)
    }
}

module.exports = User
