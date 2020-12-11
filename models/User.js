const mongoose = require('mongoose');
const Schema = mongoose.Schema;
<<<<<<< HEAD

const userSchema = new Schema({
  username: String,
  password: String,
  licence:  String,   // STUDENT/TEACHER
  firstName:String,
  lastName: String,
  contact:{
    email: String,
    phone: String,
    socialNetwork: String,
  },
  keywords: [String],
});

const User = mongoose.model('User', userSchema);
module.exports = User;

//https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/mongoose
=======
const userSchema = new Schema({
  username: String,
  password: String,
  // userImg: String,
  //   email: String,
  // googleID: String,
},
{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
}
);

const User = mongoose.model('User', userSchema);
module.exports = User;
>>>>>>> master
