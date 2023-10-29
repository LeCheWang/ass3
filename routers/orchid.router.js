const express = require('express');
const router = express.Router();

const { createOrchid } = require('../controllers/orchid.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const isAdmin = require('../middlewares/is.admin');

router
  .route('/')
  .post(
    asyncMiddleware(authMiddleware),
    isAdmin(),
    asyncMiddleware(createOrchid),
  );

module.exports = router;
