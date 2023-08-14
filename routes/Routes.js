const express = require('express')

// Create our router
const router = express.Router()

// Bring in our controller logic
const flightController = require('../controllers/flightController')

// I.N.D.U.C.E.S (Index, New, Destroy, Update, Create, Edit, Show)

// "index" route      //   localhost:8080/flight/
router.get('/', flightController.index)

// "new" route
router.get('/new', flightController.new)

// // "destroy" route
// router.delete('/:indexOfFlight', flightController.destroy)

// "update" route
router.put('/:id', flightController.update)

// "create" route
router.post('/', flightController.create)

// "edit" route
router.get('/:id/edit', flightController.edit)

// "show" route      //   localhost:8080/flight/:indexOfFlight
router.get('/:id', flightController.show)

module.exports = router