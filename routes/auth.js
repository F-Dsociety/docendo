const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Teacher = require('../models/Teacher');
const bcrypt = require('bcrypt');
const passport = require('passport');

router.post('/signup', (req, res, next) => {
  const { username, password, firstname, lastname, email, phone, socialNetwork, license } = req.body;

  if (password.length < 1) {
    return res.status(400).json({ message: 'Your password must be 8 chars minimum' });
  }
  if (username === '') {
    return res.status(400).json({ message: 'Your username cannot be empty' });
  }
  // check if username exists in database -> show message
  let accountMongo = null
  if (license == 'teach') {
    accountMongo = Teacher
  } else if (license == 'learn') {
    accountMongo = User
  }
  User.findOne({ username: username })
    .then(found => {
      if (found !== null) {
        return res.status(400).json({ message: 'Your username is already taken' });
      } else {
        // hash the password, create the user and send the user to the client
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        
        accountMongo.create({
          firstname, lastname, email, phone, socialNetwork
        })
          .then(dbUser => {
            User.create({
              username,
              password: hash,
              [license]: dbUser._id
              
            })
            .then(user=>{
                // login with passport:
              req.login(dbUser, err => {
                if (err) {
                  return res.status(500).json({ message: 'Error while attempting to login' })
                }
                // we don't redirect to an html page anymore, we just send the user obj to the client
                return res.status(200).json({...dbUser,...user});
              });
            })
            
          })
          .catch(err => {
            res.json(err);
          })
      }
    })
})

router.post('/login', (req, res) => {
  passport.authenticate('local', (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Error while authenticating' });
    }
    if (!user) {
      return res.status(400).json({ message: 'Wrong credentials' });
    }
    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: 'Error while attempting to login' })
      }
      return res.status(200).json(user);
    })
  })(req, res)
});
// router.post('/test',(req,res)=>{
//   let {username} = req.body
//   User.findOne({ username: username }).populate('teach').exec()
//   .then(found => {
//     res.send(found)
//   })
// })

router.delete('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Successful logout' });
})

router.get('/loggedin', (req, res) => {
  res.json(req.user);
})

module.exports = router;