// Bring in our flight data
let flights = require('../models/Flights')

// Load the flight model so we can interact with the collection
const Flight = require('../models/Flights')

// GET /flights
module.exports.index = async (req, res) => {
    let flights;

    try {
        flights = await Flight.find().sort({departs:1})

    } catch (err) {
        console.log('Failed to create a flight document: ', err)
    }

    console.log(flights)
    res.render('Index', { flights })
}


//  GET /flights/new
module.exports.new = (req, res) => {
    const newFlight = new Flight();
    console.log(newFlight)
    
    const departTime = newFlight.departDep;
    const arrivalTime = newFlight.departArr;
    // console.log(newFlight.depart)
    let dates = 
    {
        depart: `${departTime.getFullYear()}-${departTime.getMonth().toString().padStart(2, '0')}-${departTime.getDate().toString().padStart(2, '0')}T${departTime.getHours().toString().padStart(2, '0')}:${departTime.getMinutes().toString().padStart(2, '0')}:${departTime.getSeconds().toString().padStart(2, '0')}`,
        arrival: `${arrivalTime.getFullYear()}-${arrivalTime.getMonth().toString().padStart(2, '0')}-${arrivalTime.getDate().toString().padStart(2, '0')}T${arrivalTime.getHours().toString().padStart(2, '0')}:${arrivalTime.getMinutes().toString().padStart(2, '0')}:${arrivalTime.getSeconds().toString().padStart(2, '0')}`
    }
    // dates.depart.toISOString().slice(0,19)
    // dates.arrival.toISOString().slice(0,19)
    console.log(dates)
    // // Format the date for the value attribute of the input

    
    
    
    
    res.render('New',{dates})
}


// POST /flights
module.exports.create = async (req, res) => {
    console.log('POST /flights')
    console.log(req.body)

    try {
        let flight = await Flight.create(req.body)
        console.log(flight)
    } catch (err) {
        console.log('Failed to create a flight document: ', err)
    }


    res.redirect('/flights')
}


//  GET /flights/:id
module.exports.show = async (req, res) => {
    console.log('GET /flights/:id')
    let flight;

    try {
        flight = await Flight.findById(req.params.id)
        console.log(flight)
    } catch (err) {
        console.log('Failed to find flight document with id ' + req.params.id, err)
    }


    if (flight) {
        res.render('Show', { flight })
    } else {
        res.redirect('/flights')
    }
}


// PUT /flights/:indexOfFruit
module.exports.update = (req, res) => {
    console.log('PUT /flights/:indexOfFlight')



    flights[req.params.indexOfFlight] = req.body

    res.redirect('/flights')
}


//  GET /fruits/:indexOfFruit/edit
module.exports.edit = async (req, res) => {
    let flight;
    try {
        flight = await Flight.findById(req.params.id)
        console.log(flight)
        res.render('Edit', { flight })
    } catch (err) {
        console.log('Failed to find Flight document with id ' + req.params.id, err)
        res.redirect(`/flights/${req.params.id}`)
    }
    res.render('Edit', { flight })
}