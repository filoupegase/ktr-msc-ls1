const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controller/stuff');

router.post('/card/get', stuffCtrl.getAllStuff);
router.post('/card/post', stuffCtrl.createThing);

module.exports = router;