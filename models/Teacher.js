const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  username:   String,
  password:   String,
  licence:    String,   // STUDENT/TEACHER
  firstName:  String,
  lastName:   String,

  contactDetails:{
    email:  String,
    phone:  String,
    socialNetwork:  String,
  },

  keywords: [String],

  post: [{ 
    type: Schema.Type.ObjectId, 
    ref: Post
  }]
});

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;

//https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/mongoose