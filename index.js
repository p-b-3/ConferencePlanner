const express = require("express");
const db = require('./queries')

const app = express();





app.get("/", (req, res) => {
  res.send("Welcome to Conference Planner")
});

// app.get("/db", async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query("SELECT * FROM conferences_test3");
//     const results = { results: result ? result.rows : null };
//     res.send(results);
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// });

app.get("/api/conferences", db.getConferences)
app.get('/api/conferences/:id', db.getConferencesById)
app.post('/api/conferences', db.createUser)
app.put('/api/conferences/:id', db.updateUser)
app.delete('/api/conferences/:id', db.deleteUser)

const PORT = process.env.PORT || 5000;
app.listen(PORT);
