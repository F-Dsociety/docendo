const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  learn:{
      type: Schema.ObjectId,
      ref: 'Students'
  },
  teach: {
      type: Schema.ObjectId,
      ref: 'Teacher'
  }
  

<<<<<<< HEAD
=======
  keywords: [String],
>>>>>>> 4ba30e974bc02fe5322af5f5c1b9fd8365afea84
},
{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    },

});

const User = mongoose.model('User', userSchema);
module.exports = User;

//https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/mongoose
