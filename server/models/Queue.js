const mongoose = require('mongoose')
const Schema = mongoose.Schema

const queueSchema = new Schema({
    qNumber : {
        type: string,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Queue', queueSchema)