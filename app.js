const bodyParser = require("body-parser");

const http = require("http");

const express = require("express");

const app = express();

const adminData = require("./routes/admin");
const petshopRoutes = require("./routes/petshop");
const path = require("path");

app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin",adminData.routes);
app.use(petshopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});






const server = http.createServer(app);
server.listen(3000);