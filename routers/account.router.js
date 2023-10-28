const express = require('express');
const router = express.Router();

const {
  renderPageChangeInformation,
} = require('../controllers/account.controller');

router.route('/change-information').get(renderPageChangeInformation);

module.exports = router;
