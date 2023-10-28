const accountModel = require('../models/account.model');

module.exports = {
  renderPageChangeInformation: async (req, res) => {
    return res.render('profile/information.ejs');
  },
  getDetail: async(req, res) =>{
    
  }
};
