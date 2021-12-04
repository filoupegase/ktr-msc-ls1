const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controller/stuff');

router.post('/', stuffCtrl.createThing);

module.exports = router;