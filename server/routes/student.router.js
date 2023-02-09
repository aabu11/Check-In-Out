const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here

  const sqlQuery = `SELECT * FROM student;`;

  pool
    .query(sqlQuery)
    .then((result) => {
      const students = result.rows;
      //   console.log("GET - All students:", students);
      res.send(students);
    })
    .catch((error) => {
      console.log("ERROR in /api/student GET route", error);
      res.sendStatus(500);
    });
});
// router.get("/checkout/id", (req, res) => {
//     // GET route code here
  
//     const sqlQuery = `SELECT * FROM checkinout;`;
  
//     pool
//       .query(sqlQuery)
//       .then((result) => {
//         const timeOut = result.rows;
//         //   console.log("GET - All students:", students);
//         res.send(timeOut);
//       })
//       .catch((error) => {
//         console.log("ERROR in /api/checkout GET route", error);
//         res.sendStatus(500);
//       });
//   });
/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

router.post("/checkin", (req, res) => {
  let studentCheckIn = req.body;
  const sqlQuery = `INSERT INTO "checkinout" ("check_in", "student_id")
    VALUES ($1,$2);`;
  const sqlValues = [studentCheckIn.checkIn, studentCheckIn.student];

  pool
    .query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log(`error in POST: serverside`, dbErr);
      res.sendStatus(500);
    });
});

router.put("/checkout/:id", (req, res) => {
  let studentCheckOut = req.body;
  const sqlQuery = `UPDATE "checkinout" set "check_out" = $1 WHERE "student_id"=$2 AND "check_out" IS NULL`;
  const sqlValues = [studentCheckOut.checkOut, req.params.id];

  pool
    .query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log(`error in POST: serverside`, dbErr);
      res.sendStatus(500);
    });
});
router.put;
module.exports = router;
