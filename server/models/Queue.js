const mongoose = require('mongoose')
const Schema = mongoose.Schema

const queueSchema = new Schema({
    qNumber : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    phoneNumber : {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Queue', queueSchema)