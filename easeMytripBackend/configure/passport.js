// import all the things we need
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../model/user.model");
require("dotenv").config();

// const dotenv = require("dotenv");
// dotenv.config({ path: "./config/config.env" });

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        //get the user data from google
        // console.log(profile);
        const newUser = {
          name: profile.displayName,
          email: profile.emails[0].value,
          password: profile.id,
        };

        try {
          //find the user in our database
          let user = await User.findOne({ email: profile.emails[0].value });

          if (user) {
            //If user present in our database.

            // console.log("exist", user);
            done(null, user);
          } else {
            // if user is not preset in our database save user data to database.
            user = await User.create(newUser);
            // console.log("created", user);

            done(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );

  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
