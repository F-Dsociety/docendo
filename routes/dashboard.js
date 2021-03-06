const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');
const Interest = require('../models/Interest');


// router.delete('/logout', (req, res) => {
//   req.logout();
//   res.json({ message: 'Successful logout' });
// })

router.post('/teachers_list', (req, res) => {
  let filter = req.body
  if(req.user){
    Teacher
    .find({})
    .then(teachers => {
      res.json(teachers)
    })
    .catch(err => {
      res.json(err);
    })
  }
  
})

router.post('/interests_list', (req, res) => {
  if(req.user){
    Interest
    .find({owner:req.body.id})
    .populate('owner')
    .exec()
    .then(interests => {
      res.json(interests)
    })
    .catch(err => {
      res.json(err);
    })
  }
  
})

router.post('/student/:id', (req, res) => {
  if(req.user){
    Student
    .findById(req.params.id)
    .then(student => {
      res.json(student)
    })
    .catch(err => {
      res.json(err);
    })
  }
  
})

router.put('/interests', (req, res) => {
  if(req.user){
    Interest
    .create(req.body)
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.json(err);
    })
  }
  
})


module.exports = router;