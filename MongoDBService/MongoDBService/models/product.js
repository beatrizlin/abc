var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema(
    {
        title: String,
        price: Number,
        instock: Number
    }, {collection:"AIEN12"});
module.exports = mongoose.model('product', ProductSchema);