const express = require('express');
const { checkNumber } = require('../app/Controllers/NumberController');
const checkClientReady = require('../app/Middlewares/CheckClientReady');
const router = express.Router();

router.get('/check', checkClientReady, checkNumber);

module.exports = router;
