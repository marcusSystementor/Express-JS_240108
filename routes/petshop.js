const express = require("express");
const adminData = require("./admin");
const router = express.Router();
const path = require("path");

router.get("/", (req, res, next) => {
    console.log(adminData.pets);
    const pets = adminData.pets;
    res.render("shop", {pet: pets, docTitle: "Welcome to our Pet Shop"});
  
});

module.exports = router;