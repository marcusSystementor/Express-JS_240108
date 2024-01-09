const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res, next) => {
    console.log("Inne i en helt ny middleware");
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  
});

module.exports = router;