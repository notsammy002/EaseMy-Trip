const express = require("express");
const FlightControllers = require('../controllers/flightsControllers')
const router = express.Router();



router.route("/:departure_date").get(FlightControllers.getFlights).post(FlightControllers.createFlight);

router.route("/:id").patch(FlightControllers.updateFlight)

// router.route("/:id").patch(FlightControllers.updateFlight).delete(FlightControllers.deleteFlight)

module.exports = router;
