const categoryModel = require('../models/category.model');

module.exports = {
  createCategory: async (req, res) => {
    const body = req.body;
    console.log(body);
    const category = await categoryModel.create(body);
    return res.status(201).json(category);
  },
  getCategory: async (req, res) => {
    const categories = await categoryModel.find();
    return res.status(200).json(categories);
  },
};
