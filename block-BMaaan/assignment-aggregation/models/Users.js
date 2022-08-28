var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Questions = require('./Questions');

var userSchema = new Schema({
    name: { type: String },
    email: { type: email },
    password: { type: String },
    allQuestions: [{ type: Schema.Types.ObjectId, ref: 'Questions' }],
    replies: [String]
    allAnsweres: [{ type: Schema.Types.ObjectId, ref: 'Answeres' }],
    reputation: { type: Number }
});

var User = mongoose.model('User', userSchema);

module.exports = User;