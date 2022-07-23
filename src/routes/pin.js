const express = require('express');
const router = express.Router();
const pins = require('../controllers/pins');

router.get('/', pins.getAll);
router.get('/red-pins-count', pins.getRedPinsCount);
router.get('/:pinId', pins.getOne);

module.exports = router;
