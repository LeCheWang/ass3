const express = require('express');
const router = express.Router();

const {
  createOrchid,
  getOrchids,
  getDetail,
  comment
} = require('../controllers/orchid.controller');

const asyncMiddleware = require('../middlewares/async.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const isAdmin = require('../middlewares/is.admin');

router
  .route('/')
  .get(asyncMiddleware(getOrchids))
  .post(
    asyncMiddleware(authMiddleware),
    isAdmin(),
    asyncMiddleware(createOrchid),
  );



router.route("/comments/:id").post(asyncMiddleware(authMiddleware), asyncMiddleware(comment));

router.route('/:id').get(asyncMiddleware(getDetail));

module.exports = router;
