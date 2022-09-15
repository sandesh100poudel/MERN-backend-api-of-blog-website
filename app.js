const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
                               
mongoose.connect("mongodb://localhost:27017/abc",
{useNewUrlParser: true})
.then(console.log("connected succesfully"))
.catch((err)=>{
    console.log(err);
})





app.listen(3000, ()=>{
    console.log("server is running");
});