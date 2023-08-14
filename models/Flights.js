const mongoose = require('mongoose')

const Schema = mongoose.Schema

// this Schema acts as a blueprint for our data
const flightSchema = new Schema({
    airline: {
        type: String,
        enum : ['American','Southwest','United'],
        
        required: true
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: Date.now + 365 ,
        required: true
    }
})

// 1st argument is the collection, 2nd is the Schema (blueprint) 
const Flights = mongoose.model('flights', flightSchema)

module.exports = Flights