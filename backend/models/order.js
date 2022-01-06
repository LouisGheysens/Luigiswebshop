const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Orderschema = new Schema({
        name: {
            type: String, 
            required: true 
        },
        price: {
            type:Number, 
            required:true
        },
        cart: {
            type: Object, 
            required: true
        },
        qty: {
            type:Number, 
            required:true
        },
        description: {
            type:String, 
            required:true
        },
        imageUrl: {
            type:String, 
            required:true
        },
})



module.exports = mongoose.model('Order', Orderschema);