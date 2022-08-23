const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./routes/UserRoutes")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("DB Connected")
    })
    .catch((err)=>console.log("Can't connect DB",err))

app.use("/api/user", userRoutes)

app.listen(5000, console.log("Server started"))