const express = require("express");
const passport = require("passport");
const router = express.Router();
var jwt = require("jsonwebtoken");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // console.log(req);
    const user = req.user;
    let token = newToken(req.user);
    console.log(token);
    // res.redirect("http://localhost:3000/");
    res.status(200).json({ user, token });
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/login");
});

module.exports = router;
