const express = require('express');
const router = express.Router();
const groups = require('../controllers/groups');

router.get('/', groups.getAll);
router.post('/', groups.create);

module.exports = router;
