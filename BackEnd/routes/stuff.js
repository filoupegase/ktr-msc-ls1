const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controller/stuff');

router.get('/', stuffCtrl.getAllStuff);
router.post('/', stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);

module.exports = router;