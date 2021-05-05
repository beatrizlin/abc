'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: String,
    price: Number,
    instock:Number
}, { collection: AIEN12Collection });

module.exports = mongoose.model('Product', productSchema);
