const mongoose = require('mongoose')

const Schema = mongoose.Schema

//PARENT SCHMEA
const flightSchema = new Schema({
    airline: {
        type: String,
        enum : ['American','Southwest','United'],
        
        required: true
    },
    airport: {
        type: String,
        enum : ['AUS', 'DAL', 'LAX', 'SAN' , 'SEA'],
        default: 'SAN',
    },

    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: new Date().getTime()  ,
        required: true
    }, 
    destinations: destinationSchema
})

//CHILD SCHEMA
const destinationSchema  = new Schema({
    airport: {
        type: String,
        enum : ['AUS', 'DAL', 'LAX', 'SAN' , 'SEA'],
        
    },
    arrival: {
        type: Date
    },
})


// 1st argument is the collection, 2nd is the Schema (blueprint) 
const Flights = mongoose.model('flights', flightSchema)

module.exports = Flights