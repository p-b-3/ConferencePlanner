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
  const { title, sales_goal, sales_current,  attendance_goal, attendance_current, oc_call_compelted, website_compelted, prospectus_compelted, oc_sent_all_info, contacted_industrial_attendees, competitive_events_analyzed, leads_from_competitive_events, indsutrial_oc_outreach_completed, iformz_campaign_sent, sales_lead, te_lead, marketing_lead } = request.body
  // const data = {
  //   title: request.body.title,
  //   sales_goal: request.body.sales_goal,
  // };

  pool.query('INSERT INTO conferences_test3 (title, startdate, sales_goal, sales_current, attendance_goal, attendance_current, oc_call_compelted, website_compelted, prospectus_compelted, oc_sent_all_info, contacted_industrial_attendees, competitive_events_analyzed, leads_from_competitive_events, indsutrial_oc_outreach_completed, iformz_campaign_sent, sales_lead, te_lead, marketing_lead) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)', [title, startdate, sales_goal, sales_current,  attendance_goal, attendance_current, oc_call_compelted, website_compelted, prospectus_compelted, oc_sent_all_info, contacted_industrial_attendees, competitive_events_analyzed, leads_from_competitive_events, indsutrial_oc_outreach_completed, iformz_campaign_sent, sales_lead, te_lead, marketing_lead], (error, results) => {
    if (error) {
      response.send(error)
      throw error
    }
    response.status(201).send("Conference added succesfully")
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
