const express = require("express");
const cors = require("cors");

const router = express.Router();

router.get("/example", cors(), async (req, res) => {
  res.send("message from back-end");
});

router.post("/post_name", cors(), async (req, res) => {
  let { name } = req.body;
  console.log(name);
});

router.get("/home", cors(), async (req, res) => {
  res.send("message is the data for the asdas page");
});

module.exports = router;
