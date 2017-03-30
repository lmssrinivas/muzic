/**
 * Created by mlingolu on 3/25/17.
 */


var express = require('express');
var router = new express.Router();

var userRoutes = require('./user');

router.use('/api/users',userRoutes);

module.exports = router;

