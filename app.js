const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
                               
mongoose.connect(process.env.HELLO,
{useNewUrlParser: true,
})
.then(console.log("connected succesfully"))
.catch((err)=>{
    console.log(err);
})





app.listen(3000, ()=>{
    console.log("server is running");
});