const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: String,  
  description: String,
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: 'Teacher' },
  link: String,
  attachedFile: String,
  //chat or webinar schedule
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;