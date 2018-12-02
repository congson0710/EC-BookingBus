import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
import { userModel as Users } from '../sequelize/models/userModel';

passport.serializeUser((user, done) => {
  done(null, user.userID);
});

passport.deserializeUser((user, done) => {
  Users.findById(user.userID).then(currentUser => {
    done(null, currentUser);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'userName',
      passwordField: 'userPassword'
    },
    async (username, password, done) => {
      const currentUser = await Users.findOne({
        where: { userName: username, userPassword: password }
      });
      if (currentUser) {
        return done(null, currentUser);
      } else {
        return done(null, false, { message: 'Invalid username or password.' });
      }
    }
  )
);
