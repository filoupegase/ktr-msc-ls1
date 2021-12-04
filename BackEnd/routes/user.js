const express = require('express');
const router = express.Router();

const userCtrl = require('../controller/user');

router.post('/signup', userCtrl.signup);
router.post('/Login', userCtrl.login);

module.exports = router;