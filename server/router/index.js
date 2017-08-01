const router = require('express').Router();

router.use('/favorites', require('./playersRouter'));
// router.use('/createPlayer', require('./playerRouter'));

module.exports = router;