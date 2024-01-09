const bodyParser = require("body-parser");

const http = require("http");

const express = require("express");

const app = express();

app.use(bodyParser.urlencoded({extended:false}));




app.use("/cars", (req, res, next) => {
    console.log("Inne i en helt ny middleware");
    res.send("<h2>Bilen säger vroom</h2>")
});

app.use("/add-pets", (req, res, next) => {
    console.log("/add-pets");
    res.send('<form action=/pet method="POST"><input type="text" name="title"><button>Add Pet</button></form>')
});

app.use("/pet", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
})

app.use("/", (req, res, next) => {
    console.log("Inne i en helt ny middleware");
    res.send("<h2>Hello World!</h2>");
  
});






const server = http.createServer(app);
server.listen(3000);