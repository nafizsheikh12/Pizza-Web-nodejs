const mongoose = require('mongoose');

const oderSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: {
        type:Object,
        required:true
    },
    phone: {
        type:String
    },
    address:{
        type:String
    },
    paymentType: {
        type:String,
        default: 'COD'
    },
    status: {
        type: String,
        default: 'order_placed'
    }
}, {timestamps: true});

const Order = mongoose.model('ORDER',oderSchema);

module.exports= Order

