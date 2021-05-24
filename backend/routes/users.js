const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const { unstable_renderSubtreeIntoContainer } = require('react-dom');
let User = require('../models/user.models.js');
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : ' + err));
});
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const passeword = String(req.body.passeword);

  const newUser = new User({ username, passeword, email });
  newUser
    .save()
    .then(() => res.json('User added !'))
    .catch(err => res.status(400).json('Error : ' + err));
});
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : ' + err));
});
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(users => res.json('User deleted .'))
    .catch(err => res.status(400).json('Error : ' + err));
});
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(users => {
      users.username = req.body.username;
      users.email = req.body.email;
      users.passeword = req.body.passeword;
      users
        .save()
        .then(users => res.json('User updated .'))
        .catch(err => res.status(400).json('Error : ' + err));
    })

    .catch(err => res.status(400).json('Error : ' + err));
});

module.exports = router;
