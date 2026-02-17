import mysql from "mysql2/promise";

async function migrate() {
  // Connect without a database first so we can CREATE DATABASE
  const url = new URL(process.env.DATABASE_URL!);
  const connection = await mysql.createConnection({
    host: url.hostname,
    port: Number(url.port),
    user: url.username,
    password: url.password,
  });

  console.log("Connected to MySQL");

  await connection.execute(
    "CREATE DATABASE IF NOT EXISTS `paidrightly`"
  );
  console.log("Database 'paidrightly' ensured");

  await connection.changeUser({ database: "paidrightly" });

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS waitlist (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      source VARCHAR(50) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log("Table 'waitlist' ensured");

  await connection.end();
  console.log("Migration complete!");
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
