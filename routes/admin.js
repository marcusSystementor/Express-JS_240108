const express = require("express");
const router = express.Router();
const path = require("path");
const pets = [];


router.use("/add-pets", (req, res, next) => {
    console.log("/add-pets");
    res.sendFile(path.join(__dirname, "../", "views", "add-pets.html"));
});

router.post("/pet", (req, res, next) => {
    pets.push({title: req.body.title});
    res.redirect("/");
});

exports.routes = router;
exports.pets = pets;