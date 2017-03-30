/**
 * Created by mlingolu on 3/19/17.
 */


var User = require('../models/user');
var jwt = require('jsonwebtoken');

module.exports.login = function (req,res,next) {

    User.findOne({ 'name' : req.body.name },function (err,user) {

        if(err) throw err;

        if(!user){
            res.json({
                success :false,
                message:'User not found'
            })
        }else if(user){

            if(user.password !== req.body.password){
                res.json({
                    success: false,
                    message:'Authentication failed. Wrong Password'
                })
            }else{
                let token = jwt.sign(user, 'ajfalskdfjlas',{
                    expiryIn : 6000
                });

                res.json({
                    success : true,
                    message:'Successfully logged in',
                    token : token
                })
            }

        }
    });
};



module.exports.signup = function (req,res,next) {

    console.log('signup');
    console.log(req.body);

    var user = new User({
        name : req.body.name,
        password : req.body.password,
        email : req.body.email
    });

    user.save(function (err) {

        if(err){
            let message = "Failed to Sign up. Please try later or contact Admin.";

            if(err.code == 11000){
                message = "There is an exisitng user with that email. Please proceed to login screen."
            }
            res.json({
                success:false,
                error:err,
                message:message
            });

        }else{
            console.log("User successfully saved to DB");
            res.json({
                success:true,
                data:user,
                message:"User successfully saved to DB"
            })
        }
    });

};