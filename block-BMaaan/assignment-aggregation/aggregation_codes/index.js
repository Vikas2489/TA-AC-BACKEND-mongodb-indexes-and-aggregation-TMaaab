const Answer = require("../models/Answeres");
const Question = require("../models/Questions");
const User = require("../models/Users");

Question.distinct('tags');

Question.aggregate([{
    $group: {
        _id: null,
        count: { $sum: 1 },
    }
}]);

Answer.aggregate([{
    $group: {
        id: null,
        count: { $sum: 1 }
    }
}]);

User.aggregate([{
    $group: {
        _id: {
            allQuestions: '$allQuestions',
            replies: '$replies',
            allAnsweres: '$allAnsweres',
        }
    }
}]);

User.aggregate([{
    $group: {
        _id: '$allAnsweres',
        count: { $sum: 1 }
    }
}])