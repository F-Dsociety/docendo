const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  learn:{
      type: Schema.ObjectId,
      ref: 'Student'
  },
  teach: {
      type: Schema.ObjectId,
      ref: 'Teacher'
  }
  

  //keywords: [String],
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
