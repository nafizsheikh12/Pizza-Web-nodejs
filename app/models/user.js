const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        unique: true
    },
    password: {
        type:String
    },
    role: {
        type:String,
        default: 'customer'
    }
  

}, {timestamps: true});


const USER = mongoose.model('USER',userSchema);

module.exports= USER

