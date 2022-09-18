const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());
                               
mongoose.connect(process.env.HELLO,
{useNewUrlParser: true,
})
.then(console.log("connected succesfully"))
.catch((err)=>{
    console.log(err);
})


app.use("/api/auth", authRoute);


app.listen(3000, ()=>{
    console.log("server is running");
});