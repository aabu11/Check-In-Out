const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  
    const sqlQuery = `SELECT * FROM student;`;
  
    pool.query(sqlQuery)
    .then(result => {
      const students = result.rows;
      console.log("GET - All students:", students);
      res.send(students);
    }).catch(error => {
      console.log('ERROR in /api/student GET route', error);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
