/**
 * Created by mlingolu on 3/19/17.
 */


var express = require('express');
var router = new express.Router();
var authCtrl = require('./authCtrl');

module.exports = function (router) {

    router.get('/login',authCtrl.login);
};