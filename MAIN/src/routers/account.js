const express = require('express')
const router = express.Router();
const accountConstroller = require('../app/controllers/AccountController')

router.get('/login',accountConstroller.login);
router.get('/register',accountConstroller.register);
router.get('/password_resets',accountConstroller.resetpassword);

module.exports = router;