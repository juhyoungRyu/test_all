const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hi, 대현 세팅은 끝났다");
});

module.exports = router;
