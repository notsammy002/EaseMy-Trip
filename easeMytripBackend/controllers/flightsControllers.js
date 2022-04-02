const Flight = require("../model/flightsModel");

exports.getFlights = async (req, res) => {
  try {
    let data = await Flight.find(req.params);
    res.status(200).json({
      status: "success",
      data: data,
    });

    console.log("Request Hit");
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err,
    });
  }
};

exports.getSortedFlights = async (req, res) => {
  let sortParameter = req.params.property;

  try {
    let data = await Flight.find().sort({ [sortParameter]: 1 });
    res.status(200).json({
      status: "success",
      data: data,
    });

    console.log("Request Hit");
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

exports.updateFlight = async (req, res) => {
  try {
    let updated = await Flight.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: updated,
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "failed",
      message: "invalid req send",
    });
  }
};

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
