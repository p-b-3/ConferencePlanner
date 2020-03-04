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

const getConferenceById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM conferences_test3 WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createConference = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO conferences_test3 (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Conference added with ID: ${result.insertId}`)
  })
}

const updateConference = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE conferences_test3 SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Conference modified with ID: ${id}`)
    }
  )
}

const deleteConference = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM conferences_test3 WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Conference deleted with ID: ${id}`)
  })
}

module.exports = {
  getConferences,
  getConferenceById,
  createConference,
  updateConference,
  deleteConference,
}
