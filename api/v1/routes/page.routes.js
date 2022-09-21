const express = require('express');
const pageController = require('../controllers/PageController');

console.dir('pageController', pageController)

const router = express.Router();

router.post('/scrap', pageController.scrap)

module.exports = router;                                           