const express = require('express');
const router = express.Router();
const departments = require('../controllers/departments');

router.get('/', departments.getAll);

module.exports = router;
