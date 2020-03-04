const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});


const getConferences = (req, res) => {
  pool.query('SELECT * FROM conferences_test3', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

module.exports = {
  getConferences,
}
