const express = require("express")
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
const { MONGO_URI } = require("./mongoConfig")

mongoose.connect(MONGO_URI)
    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err))

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
})