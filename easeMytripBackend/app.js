const express = require("express");
const cors = require("cors");
const Flightrouter = require("./routes/flightsRouter");
const app = express();

app.use(cors());
app.use(express.json());

const userController = require("./controllers/user.controller");
app.use("/users", userController);

const router = require("./controllers/auth.controller");
app.use("/auth", router);

app.use("/flights", Flightrouter);

module.exports = app;
