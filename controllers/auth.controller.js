const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const accountModel = require('../models/account.model');
const ErrorResponse = require('../helpers/ErrorResponse');

module.exports = {
  renderLoginPage: (req, res) => {
    return res.render('auth/login.ejs');
  },
  renderRegisterPage: (req, res) => {
    return res.render('auth/register.ejs');
  },
  register: async (req, res) => {
    const body = req.body;
    const account = await accountModel.create(body);
    return res
      .status(201)
      .json({ statusCode: 200, message: 'Đăng ký thành công. Hãy đăng nhập' });
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const account = await accountModel.findOne({ username });
    if (!account) {
      throw new ErrorResponse(400, 'tk hoac mk k dung');
    }
    const checkPass = bcryptjs.compareSync(password, account.password);
    if (!checkPass) {
      throw new ErrorResponse(400, 'tk hoac mk k dung');
    }

    const payload = {
      _id: account._id,
      username: account.username,
      isAdmin: account.isAdmin,
    };

    const token = jwt.sign(payload, 'tfafjadsfj', {
      expiresIn: '15h',
    });
 
    return res.status(200).json({
      statusCode: 200,
      message: 'Đăng nhập thành công',
      jwt: token,
      ...payload
    });
  },
};
