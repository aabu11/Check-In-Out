const { response } = require("express");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
   const currentUser = req.user.id;
  const sqlQuery = `SELECT * FROM student WHERE "user_id" = $1;`;
  const sqlValue = [currentUser];
  pool
    .query(sqlQuery,sqlValue)
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

router.get('/:id', (req, res) =>{
    const idOfStudentToGet = req.params.id
    const sqlText = `
    SELECT * FROM "student" WHERE "id"=$1;`
    const sqlValue = [idOfStudentToGet];
    pool. query (sqlText, sqlValue)
        .then((result) =>{
            const response = result.rows
            res.send(response)
        }).catch ((dbErr) =>{
            console.log('Damn Cuz', dbErr)
            res.sendStatus(500)
        }) 
})
/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
  console.log("THIS IS THE POST ADD STUDENTS", req.body);
  const sqlQuery = `INSERT INTO "student"
  ("name", "age", "address","parent_info", "phone_number", "user_id")
    VALUES ($1,$2,$3,$4,$5,$6);`;
  const sqlValues = [
    req.body.name,
   req.body.age,
   req.body.address,
   req.body.parent_info,
    req.body.phone_number,
    req.user.id,
  ];
  pool
    .query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log(`error in POST ADD STUDENTS: serverside`, dbErr);
      res.sendStatus(500);
    });
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


router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log("req.params", id);
  let sqlValues = [id];
  let sqlQuery = `DELETE  FROM "checkinout"
	WHERE "student_id"=$1
	AND ("check_in" > CURRENT_DATE AND "check_in" < CURRENT_DATE + 1);`;
  pool
    .query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log(`error in delete: serverside`, dbErr);
      res.sendStatus(500);
    });
});
module.exports = router;
