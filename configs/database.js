const mongoose = require('mongoose');
const accountModel = require('../models/account.model');

async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ass3');
    const admin = await accountModel.findOne({
      username: 'admin',
    });

    if (!admin) {
      await accountModel.create({
        username: 'admin',
        password: 'admin',
        name: 'joe biden',
        yob: 1990,
        isAdmin: true,
      });
      console.log('admin created');
    }

    console.log('connect db success');
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectDB;
