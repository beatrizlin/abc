var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ApplySchema = new Schema(
    {
        aemail: String,
        atitle: String,
    }, {collection:"AIEN12"});
module.exports = mongoose.model('apply', ApplySchema);