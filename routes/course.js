const express = require('express');
const router  = express.Router();
const Course =  require('../models/Course')


// RETRIEVE ALL THE COURSES
router.get('/', (req, res) => {
  
  Course.find()     //  find() TO GET ALL THE OBJECTS
  .then(courses => {
    res.status(200).json(courses);  //STATUS(200) = OK
  })
  .catch( err => {
    res.json(err);
  })

});

// FIND A COURSE
router.get('/:id', (req, res) => {
  Course.findById(req.params.id)
  .then( course => {
    if(!course) res.status(404).json(course)
    else        res.status(200).json(course)
  })
})

// CREATE A POST
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


module.exports = router;