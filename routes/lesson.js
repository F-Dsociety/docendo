const express = require('express');
const router  = express.Router();
const Course =  require('../models/Lesson')


// RETRIEVE ALL
router.get('/list', (req, res) => {
  
  Lesson.find()     //  find() TO GET ALL THE OBJECTS
  .then(lesson => {
    res.status(200).json(lesson);  //STATUS(200) = OK
  })
  .catch( err => {
    res.json(err);
  })

});

// FIND A COURSE
router.get('/:id', (req, res) => {
  Lesson.findById(req.params.id)
  .then( course => {
    if(!course) res.status(404).json(course)
    else        res.status(200).json(course)
  })
})

// CREATE A COURSE
router.post('/', (req, res) => {
  
  const {title, description} = req.body;  //GET THE DATA FROM THE BODY
 
  Course.create({       //CREATE THE OBJECT
    title,
    description
  })
  .then( course => {    //SEND IT TO DB
    res.status(201).json( course )  // STATUS(201) = CREATED
  })
  .catch( err => {
    res.json(err)  
  })

});

// EDIT A COURSE
router.put('/:id', (req, res, next) => {
  const { title, description } = req.body;
  Course.findByIdAndUpdate(
    req.params.id,
    { title, description },
    { new: true }             //return the updated document // without, send the old version before changes
  )
    .then(course => {
      console.log(course);
      res.status(200).json(course);
    })
    .catch(err => { err })
});


router.delete('/:id', (req, res, next) => {
  Course.findByIdAndDelete(req.params.id)
    .then(course => {
      res.status(200).json({ message: 'ok' })
    })
    .catch(err => {
      res.json(err);
    })
});

module.exports = router;