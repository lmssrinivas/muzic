

var User = require('../models/user');


module.exports.getUsers = function (req,res,next) {

    User.find({},function (err,data) {
        if(err){

        }else{
            res.json(data);
        }
    })
};