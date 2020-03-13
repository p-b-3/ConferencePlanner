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
app.get('/api/conferences/:id', db.getConferenceById)
app.post('/api/conferences', db.createConference)
app.put('/api/conferences/:id', db.updateConference)
app.delete('/api/conferences/:id', db.deleteConference)

if (process.env.NODE_ENV == "production") {
  // Express to serve up production assets if specific file matches with what that request is looking for- mains.js or main.class if cant file in rotues above
  app.use(express.static("client/build"));

  // Express to serve up index.html if it does not recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
