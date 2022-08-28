var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var User = require('./Users');
var Answer = require('./Answeres');

var questionSchema = new Schema({
    title: { type: String, required: true },
    answeres: [{ type: Schema.Types.ObjectId, ref: 'Answer' }],
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    replies: [{ type: Schema.Types.ObjectId, required: true, ref: 'User' }],
    upVote: { type: Number },
    downVote: { type: Number },
    tags: [String],
    views: { type: Number }
});

questionSchema.index({ tags: 1 });
questionSchema.index({ title: 1, answeres: 1 });


var Question = mongoose.model('Question', questionSchema);

module.exports = Question;