const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User
  .findOne({ username })
  .then(user => {
    if(user) {
      user.checkPassword(plainTextPW).then(validPassword => {
        if(validPassword) {
          req.session.username = user.username;
          req.send('have a cookie!');
        }else {
          res.status(401);
          res.send('Invalid Login Credentials');
        }
      })
    } else {
      res.status(401);
      res.send('Invalid Login Credentials')
    }
  })
  .catch(err => {
    res.send(err);
  })
};

module.exports = {
  createUser
};
