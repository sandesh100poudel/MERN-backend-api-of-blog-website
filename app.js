const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");




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
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);




app.listen(3000, ()=>{
    console.log("server is running");
});