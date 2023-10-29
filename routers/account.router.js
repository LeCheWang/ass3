const express = require('express');
const router = express.Router();

const {
  renderPageChangeInformation,
  getDetail,
  update,
} = require('../controllers/account.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

router
  .route('/')
  .patch(asyncMiddleware(authMiddleware), asyncMiddleware(update));

router.route('/change-information').get(renderPageChangeInformation);
router
  .route('/detail')
  .get(asyncMiddleware(authMiddleware), asyncMiddleware(getDetail));

module.exports = router;
