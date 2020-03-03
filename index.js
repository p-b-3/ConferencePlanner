const express = require("express");
const { Pool } = require("pg");

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

app.get("/db", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM test_table");
    const results = { results: result ? result.rows : null };
    res.render("pages/db", results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

app.get("/", (req, res) => {
  res.send({ users: 1 });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
