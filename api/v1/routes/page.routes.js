const express = require('express');
const pageController = require('../controllers/pageController');

const router = express.Router();

router.post('/scrap/example', pageController.pageExample)
router.post('/scrap/fb-user-profile', pageController.fbUserProfile)

module.exports = router;                                           