const express = require("express");
const router = express.Router();
const path = require("path");


router.use("/add-pets", (req, res, next) => {
    console.log("/add-pets");
    res.sendFile(path.join(__dirname, "../", "views", "add-pets.html"));
});

router.post("/pet", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;