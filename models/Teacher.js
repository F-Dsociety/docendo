const mongoose = require('mongoose');

const {Schema,model} = mongoose;

const teacherSchema = new Schema({
  username: String,
  password: String,
  firstname:String,
  lastname: String,
  email: String,
  phone: String,
  socialNetwork: String,

  keywords: [String],

  // post: [{ 
  //   type: Schema.Type.ObjectId, 
  //   ref: 'Post'
  // }]
});

const Teacher = model('Teacher', teacherSchema);

module.exports = Teacher;

//https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/mongoose