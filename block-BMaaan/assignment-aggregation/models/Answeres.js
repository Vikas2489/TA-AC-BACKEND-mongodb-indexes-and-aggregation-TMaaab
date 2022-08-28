var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Question = require('./Questions');

var answerSchema = new Schema({
    title: { type: String },
    replies: [{ type: Schema.Types.ObjectId, required: true, ref: 'User' }],
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    upVote: { type: Number },
    downVote: { type: Number },
    questionId: { type: Schema.Types.ObjectId, required: true, ref: 'Question' }
});

var Answer = mongoose.model("Answer", answerSchema);
module.exports = Answer;