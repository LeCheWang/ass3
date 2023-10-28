const express = require('express');
const router = express.Router();

const { renderHome } = require('../controllers/home.controller');

router.route('/').get(renderHome);

module.exports = router;
