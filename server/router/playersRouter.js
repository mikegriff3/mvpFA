const router = require('express').Router();
const controller = require('../controller/playerController');

router.get('/fetchPlayer', controller.fetchPlayer);
router.post('/createPlayer', controller.createPlayer);

module.exports = router;