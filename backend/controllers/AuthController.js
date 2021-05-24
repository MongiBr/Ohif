const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');
const register = (req, res, next) => {
  bcrypt.hash(req.body.passeword, 10, function(err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      username: req.body.username,
      email: req.body.email,
      passeword: hashedPass,
    });
    user
      .save()
      .then(user => {
        res.json({
          message: 'user Added Successefully',
        });
      })
      .catch(error => {
        res.json({
          message: 'An error occured',
        });
      });
  });
};
const login = (req, res, next) => {
  var username = req.body.username;
  var passeword = req.body.passeword;

  User.findOne({ username }).then(user => {
    if (user) {
      bcrypt.compare(passeword, user.passeword, function(err, result) {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (result) {
          let token = jwt.sign({ username: user.username }, 'verySecretValue', {
            expiresIn: '1h',
          });
          res.json({
            message: 'Login Successful!',
            token,
          });
        } else {
          res.json({
            message: 'Passeword does not matched!',
          });
        }
      });
    } else {
      res.json({
        message: 'No user found!',
      });
    }
  });
};
module.exports = { register, login };
