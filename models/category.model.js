const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
  { categoryName: String },
  { timestamps: true },
);

module.exports = mongoose.model('category', categorySchema);
