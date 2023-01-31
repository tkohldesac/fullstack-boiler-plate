const express = require("express");
const router = express.Router();
const knex = require("../knexConfig");

router.get("/something", async (req, res) => {
  // const dbResp = await knex.select('first_name').from('users');
  // console.log(dbResp)
  res.send(200);
});

module.exports = router;
