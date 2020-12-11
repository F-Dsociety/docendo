const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// get all the projects
router.get('/', (req, res, next) => {
  Project.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.json(err);
    })

});

// get a specfic project
// to check if id is a valid mongo object id: mongoose.Types.ObjectId.isValid(_id)
router.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .then(project => {
      if (!project) {
        console.log('no project');
        res.status(404).json(project);
      } else {
        res.status(200).json(project);
      }
    })
    .catch(err => {
      res.json(err);
    })
});

// create a project
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const owner = req.user._id;
  Project.create({
    title,
    description,
    owner
  })
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.json(err);
    })
})

// update a project
router.put('/:id', (req, res, next) => {
  const { title, description } = req.body;
  Project.findByIdAndUpdate(
    req.params.id,
    { title, description },
    // this ensures that we are getting the updated document as a return 
    { new: true }
  )
    .then(project => {
      console.log(project);
      res.status(200).json(project);
    })
    .catch(err => {

    })
});

router.delete('/:id', (req, res, next) => {
  Project.findByIdAndDelete(req.params.id)
    .then(project => {
      res.status(200).json({ message: 'ok' })
    })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;