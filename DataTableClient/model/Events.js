
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

var EventsSchema = new mongoose.Schema({
/*   _id:String, */
  number: Number,
  name:  String,
  locat:String
}, schemaOptions);


var Events = mongoose.model('Events', EventsSchema , 'AIENMEMBER');
module.exports = Events;
