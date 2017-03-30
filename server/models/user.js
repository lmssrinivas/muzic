/**
 * Created by mlingolu on 3/19/17.
 */

let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    name:{
        type :String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    isAdmin:{
        type:Boolean
    }
});


UserSchema.pre('save',function (next) {
    let user = this;

    if(user.isModified('password') || this.isNew){

        bcrypt.genSalt(10,function (err,salt) {
            if(err){
                return;
            }else{
                bcrypt.hash(user.password, salt, function (hashErr,hash) {
                    if(hashErr){
                        return next(hashErr);
                    }
                    user.password = hash;
                    next();
                })
            }
        })
    }else {
        return next();
    }
});


module.exports = mongoose.model('User',UserSchema);
