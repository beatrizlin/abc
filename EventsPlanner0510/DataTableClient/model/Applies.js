
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

var AppliesSchema = new mongoose.Schema({
/*   _id:String, */
  aemail: String,
  atitle:  String,
}, schemaOptions);


var Applies = mongoose.model('Applies', AppliesSchema , 'AIEN12');
module.exports = Applies;
