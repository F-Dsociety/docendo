const mongoose = require('mongoose');
<<<<<<< HEAD
const { Schema, model } = mongoose;

=======

const {Schema,model} = mongoose;
>>>>>>> 4ba30e974bc02fe5322af5f5c1b9fd8365afea84

const teacherSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  socialNetwork: String,
  role: {
    type:String,
    default:'teach'
  },
  studentList: [{
    type: Schema.ObjectId,
    ref: 'User'
  }],
  lessons: [{
    type: Schema.ObjectId,
    ref: 'Lessons'
  }],
  responds: [{
    type: Schema.ObjectId,
    ref: 'Interests'
  }]
},
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  });

const Teacher = model('Teacher', teacherSchema);

module.exports = Teacher;

//https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/mongoose