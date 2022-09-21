const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.post('/scrap', pageController.scrap)

module.exports = router;                                           