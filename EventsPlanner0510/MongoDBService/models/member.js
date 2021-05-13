var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MemberSchema = new Schema(
    {
        email: String,
        password: String,
    }, {collection:"AIENMEMBER"});
module.exports = mongoose.model('member', MemberSchema);