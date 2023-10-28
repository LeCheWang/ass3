const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
    rating: { type: Number, min: 1, max: 5, require: true },
    comment: { type: String, require: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'account',
      require: true,
    },
  },
  { timestamps: true },
);

const orchidSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    isNatural: {
      type: Boolean,
      default: false,
    },
    origin: {
      type: String,
      require: true,
    },
    comments: [commentSchema],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      require: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('orchid', orchidSchema);
