const mongoose = require('mongoose')
const Schema = mongoose.Schema

// child schema
const destinationSchema = new Schema({
    airportArr: {
        type: String,
        enum:['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    },
    departArr: {
        type: Date,
    }
    
})
const flightSchema = new Schema({
    airlineDep: {
        type: String,
        enum: {values:['American', 'Southwest', 'United'], message: '{VALUE} is not supported'},
        required: true
    },
    airportDep: {
        type: String,
        enum:['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true,
    },
    departDep: {
        type: Date,
        required: true,
        default: ()=> Date()
    },
    
    departArr: {
        type: Date,
        required: true,
        default: ()=> Date()
    },
    
    destinations: {
        type: Schema.Types.ObjectId,
        destinationSchema,
    }
})

// 1st argument is the collection, 2nd is the Schema (blueprint) 
const Flight = mongoose.model('flights', flightSchema)

module.exports = Flight