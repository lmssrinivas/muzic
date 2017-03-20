/**
 * Created by mlingolu on 3/19/17.
 */


var express = require('express');
var router = new express.Router();
var authCtrl = require('./authCtrl');


router.post('/login',authCtrl.login);

router.post('/signup',authCtrl.signup);

module.exports = router;