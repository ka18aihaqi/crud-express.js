const db = require("../config/db");

// query untuk drop & create ulang tabel users
const sql = `
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
`;

db.query(sql, (err) => {
  if (err) throw err;
  console.log("✅ migrate:fresh completed, users table recreated");
  process.exit();
});
