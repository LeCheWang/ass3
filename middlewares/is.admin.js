const ErrorResponse = require('../helpers/ErrorResponse');

module.exports = () => {
  return (req, res, next) => {
    if (!req.account.isAdmin) {
      throw new ErrorResponse(403, 'Forbiden for user');
    }
    next();
  };
};