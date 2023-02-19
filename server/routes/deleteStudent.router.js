const { response } = require("express");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();




router.delete("/:id", (req, res) => {
    const id = req.params.id;
    console.log(req.params.id);
    
    let sqlQuery = `DELETE  FROM "student"
      WHERE "id"=$1;`;
    let sqlValues = [id];
    pool
      .query(sqlQuery, sqlValues)
      .then((dbRes) => {
        res.sendStatus(200);
      })
      .catch((dbErr) => {
        console.log(`error in delete: serverside`, dbErr);
        res.sendStatus(500);
      });
  });

  module.exports = router;