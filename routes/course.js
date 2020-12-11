const express = require('express');
const router  = express.Router();
const Course =  require('../models/Course')

// CREATE A POST
router.post('/', (req, res) => {
  
  const {title, description} = req.body;  //GET THE DATA FROM THE BODY
 
  Course.create({       //CREATE THE OBJECT
    title,
    description
  })
  .then( course => {    //RETURN THE COURSE TO JSON
    res.status(201).json( course )  //
  })
  .catch( err => {
    res.json(err)  
  })


});

module.exports = router;