const Flight = require("../model/FlightsModel");



exports.getFlights = async (req, res) => {
    try {
      let data = await Flight.find();
      res.status(200).json({
        status: "success",
        data: data,
      });
    } catch (err) {
      res.status(404).json({
        status: "failed",
        message: err,
      });
    }
  };


  exports.createFlight = async (req, res) => {
    try {
      let newFlight = await Flight.create(req.body);
      res.status(200).json({
        status: "success",
        data: newFlight,
      });
    } catch (err) {
      res.status(404).json({
        status: "failed",
        message: "invalid req send",
      });
    }
  };

  // exports.updateFlight = async (req, res) => {
  //   try {
  //     let Flight = await Flight.findByIdAndUpdate(req.params.id,req.body, {
  //       new: true,
  //       runValidators: true,
  //     });
  //     res.status(200).json({
  //       status: "success",
  //       data: Flight,
  //     });
  //   } catch (err) {
  //     res.status(404).json({
  //       status: "failed",
  //       message: "invalid req send",
  //     });
  //   }
  // };

  // exports.deleteFlight = async (req, res) => {
  //   try {
  //    await Flight.findByIdAndDelete(req.params.id);
  //     res.status(200).json({
  //       status: "success"
  //     });
  //   } catch (err) {
  //     res.status(404).json({
  //       status: "failed",
  //       message: "invalid req send",
  //     });
  //   }
  // };