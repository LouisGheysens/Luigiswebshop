const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type: String, required:true},
    price: {type:Number, required:true},
    qty: {type:Number, required:true},
    description: {type:String, required:true},
    imageUrl: {type:String, required:true},
    totalCost: {type:Number, required:true},
})

module.exports = mongoose.model('Order', schema);