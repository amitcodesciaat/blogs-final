require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const port = 3000;

// middlewares
app.use(express.static("public"))
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}))




// routes
app.route("/")
.get((req,res)=>{
    res.render("home")
})














// server
app.listen(port || process.env.PORT , (req,res)=>{
    console.log(`server started on port ${port}`);
})