const express = require("express")
const app = express()
const PORT = 3000

//routes
const routes = require('./routes/index')

//database
const mongoose = require('mongoose')
const { MONGO_URI } = require("./mongoConfig")

mongoose.connect(MONGO_URI)
    .then(() => console.log("Database Connected"))
    .catch(err => console.log(err))

app.use(express.json())
app.use(routes)
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
})