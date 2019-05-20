const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { google } = require('../../config').passport;
const User = require('../../database/models/User');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: google.clientID,
        clientSecret: google.clientSecret,
        callbackURL: google.callbackURL
      },
      (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }, (err, user) => {
          if (err) {
            return done(err);
          }
          if (user) {
            done(null, user);
          } else {
            new User({
              userName: profile.displayName,
              email: profile.emails[0].value,
              photo: String(profile.photos[0].value).replace('?sz=50', '?sz=256'),
              name: profile.name,
              googleId: profile.id
            }).save((err, user) => {
              if (err) throw err;
              return done(null, user);
            });
            console.log(profile);
          }
        });
      }
    )
  );
};
