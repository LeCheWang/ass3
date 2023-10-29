const express = require('express');
const router = express.Router();

const {
  createCategory,
  getCategory,
} = require('../controllers/category.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const isAdmin = require('../middlewares/is.admin');

router
  .route('/')
  .get(asyncMiddleware(getCategory))
  .post(
    asyncMiddleware(authMiddleware),
    isAdmin(),
    asyncMiddleware(createCategory),
  );

module.exports = router;
