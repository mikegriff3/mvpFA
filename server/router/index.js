const router = require('express').Router();

router.use('/favorites', require('./playersRouter'));
router.use('/wishlist', require('./wishlistRouter'));

module.exports = router;