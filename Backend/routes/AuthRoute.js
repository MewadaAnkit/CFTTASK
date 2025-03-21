const express = require('express');
const router = express.Router();
const {login} = require('../controllers/AuthController')
router.post('/v1/login',login );

module.exports = router