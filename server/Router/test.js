const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("세팅 중");
});

module.exports = router;
