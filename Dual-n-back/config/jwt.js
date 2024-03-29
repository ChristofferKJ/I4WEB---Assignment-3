let User = require('../models/userModel')

module.exports = function (passport) {
    var JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt;
    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'JohnTraDolta';
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({ username: jwt_payload.user }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
}