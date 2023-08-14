const express = require('express')
const app = express()
const PORT = 8081
// Make environment variables available to your application
require('dotenv').config()

// Load the configuration function
const mongoConfig = require('./config')

// Setup connection to MongoDB
mongoConfig()

const jsxEngine = require('jsx-view-engine')

// Load the method override function
const methodOverride = require('method-override')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', jsxEngine())

// give our form more HTTP method to work with (like DELETE and PUT)
app.use(methodOverride('_method'))

// A middleware that formats the data into an object we can use on req.body
app.use(express.urlencoded({ extended: true }))


// Bring in our routes
const flightRoutes = require('./routes/Routes')
app.use('/flights', flightRoutes)
app.get('/',(req,res)=> {
    res.send('Hey we made it ')
})


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})