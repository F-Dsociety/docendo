const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interestSchema = new Schema({
  title: String,
  description: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  propositions: [
    {
      teacher: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher'
      },
      comment: String
    }
  ]
},
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },

  }
);

const Interests = mongoose.model('Interests', interestSchema);
module.exports = Interests;