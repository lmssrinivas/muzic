/**
 * Created by mlingolu on 3/26/17.
 */

var jwt = require('jsonwebtoken');
var config = require('./../../config/config');

module.exports = function (req,res,next) {
    let token = req.body.token || req.headers['x-access-token'] || req.query.token;

    if(token){

        jwt.verify(token,config.secret,function (err, decode) {

            if(err){

            }else{

            }
        })
    }else{

    }
}