
var mongoose = require('mongoose');

var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
};

var ProductsSchema = new mongoose.Schema({
/*   _id:String, */
  title: String,
  price:  String,
  instock:String
}, schemaOptions);


var Products = mongoose.model('Products', ProductsSchema , 'AIEN12');
module.exports = Products;
