const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  title: String,
  description: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher'
  },
  matherials: [Buffer],
   //chat or webinar schedule
},
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
   
  }
);

const Lessons = mongoose.model('Lessons', lessonSchema);
module.exports = Lessons;