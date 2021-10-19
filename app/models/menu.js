const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type:String
    },
    price: {
        type:Number
    },
    size:{
        type:String
    }
});

const Menu = mongoose.model('Menu',menuSchema);

module.exports= Menu

