const jwt = require('jsonwebtoken');
const accountModel = require('../models/account.model');
const ErrorResponse = require('../helpers/ErrorResponse');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new ErrorResponse(401, 'Hãy đăng nhập!');
  }
  const token = authorization.split(' ')[1];

  let decode = jwt.verify(token, 'tfafjadsfj');

  const account = await accountModel.findById(decode._id);
  if (!account) {
    throw new ErrorResponse(401, 'Hãy đăng nhập!');
  }
  req.account = account;
  next();
};
