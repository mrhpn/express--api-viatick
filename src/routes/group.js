const express = require('express');
const router = express.Router();
const groups = require('../controllers/groups');

router.get('/', groups.getAll);

module.exports = router;
