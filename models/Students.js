const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
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
    ref: 'Teachers'
  }],
  lessons: [{ 
    type: Schema.ObjectId, 
    ref: 'Lessons'
  }],
  interests: [{ 
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

const Students = mongoose.model('Students', userSchema);
module.exports = Students;

//https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/mongoose
