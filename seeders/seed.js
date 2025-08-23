const db = require("../config/db");

// Data dummy (bisa array banyak)
const users = [
  { email: "admin@example.com", username: "admin", name: "Admin User", password: "admin123" },
  { email: "john@example.com", username: "john", name: "John Doe", password: "password123" },
  { email: "jane@example.com", username: "jane", name: "Jane Smith", password: "secret456" },
];

users.forEach((user) => {
  const sql = "INSERT INTO users (email, username, name, password) VALUES (?, ?, ?, ?)";
  const values = [user.email, user.username, user.name, user.password];

  db.query(sql, values, (err) => {
    if (err) throw err;
    console.log(`✅ User "${user.username}" seeded`);
  });
});

// Tutup koneksi setelah semua query selesai
setTimeout(() => {
  db.end();
  console.log("🌱 Seeding finished!");
  process.exit();
}, 1000);
