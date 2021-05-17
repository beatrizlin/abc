var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MemberSchema = new Schema(
    {
        email: { type:String, unique:true },
        password: String,
    }, {collection:"AIENMEMBER"});
module.exports = mongoose.model('member', MemberSchema);