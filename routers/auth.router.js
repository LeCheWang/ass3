const express = require('express');
const router = express.Router();

const {
  renderLoginPage,
  renderRegisterPage,
  register,
  login,
} = require('../controllers/auth.controller');
const asyncMiddleware = require('../middlewares/async.middleware');

router.route('/login').get(renderLoginPage).post(asyncMiddleware(login));
router
  .route('/register')
  .get(renderRegisterPage)
  .post(asyncMiddleware(register));

module.exports = router;
