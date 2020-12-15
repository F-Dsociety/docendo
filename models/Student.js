const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  username: String,
  password: String,
  firstname:String,
  lastname: String,
  email: String,
  phone: String,
  socialNetwork: String,
  role: {
    type:String,
    default:'learn'
  },
  teachersList: [{ 
    type: Schema.ObjectId, 
    ref: 'Teacher'
  }],
  lessons: [{ 
    type: Schema.ObjectId, 
    ref: 'Lesson'
  }],
  interests: [{ 
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

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

//https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/mongoose
