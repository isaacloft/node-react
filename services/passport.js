const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
//at this point we haven't done this =>require("./models/User") how does the below line of code know about the model (users)//
const User = mongoose.model('users');
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          console.log('existing userL: ', existingUser);
        } else {
          new User({ googleId: profile.id }).save();
        }
      });
    },
  ),
);
