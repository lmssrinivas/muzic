

var User = require('../models/user');
var _ = require('underscore');


module.exports.getUsers = function (req,res,next) {

    User.find({},function (err,data) {
        if(err){

        }else{
            let users =[];
            data.map(user=>{
                users.push(_.pick(user, '_id','name', 'email'))
            })

            res.json({
                success : true,
                data : users,
                message : "Successfully fetched all Users"
            });
        }
    })
};