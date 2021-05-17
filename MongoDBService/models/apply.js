var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ApplySchema = new Schema(
    {
        aemail: String,
        atitle: String
    }, {collection:"AIENAPPLY"});
module.exports = mongoose.model('apply', ApplySchema);