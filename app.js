const bodyParser = require("body-parser");

const http = require("http");

const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const petshopRoutes = require("./routes/petshop");
const path = require("path");

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin",adminRoutes);
app.use(petshopRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>");
});






const server = http.createServer(app);
server.listen(3000);