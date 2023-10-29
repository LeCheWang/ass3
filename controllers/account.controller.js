const accountModel = require('../models/account.model');

module.exports = {
  renderPageChangeInformation: async (req, res) => {
    return res.render('profile/information.ejs');
  },
  getDetail: async (req, res) => {
    return res.status(200).json(req.account);
  },
  update: async (req, res) => {
    const body = req.body;
    console.log(body);
    const account = req.account;
    const newAccount = await accountModel.findByIdAndUpdate(account._id, body, {
      new: true,
    });
    return res.status(200).json(newAccount);
  },
};
