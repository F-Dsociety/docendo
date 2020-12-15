const mongoose = require('mongoose');
const { Schema, model } = mongoose;


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
  studentsList: [{
    type: Schema.ObjectId,
    ref: 'Student'
  }],
  lessons: [{
    type: Schema.ObjectId,
    ref: 'Lesson'
  }],
  responces: [{
    type: Schema.ObjectId,
    ref: 'Interest'
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