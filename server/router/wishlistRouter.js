const router = require('express').Router();
const controller = require('../controller/wishlistController');

router.get('/fetchWish', controller.fetchWish);
//router.post('/createWish', controller.createWish);

module.exports = router;