const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String
    },
    hint: {
        type: String
    },
    img: {
        type: String
    },
    answer: {
        type: String
    },
    is_required: {
        type: String
    },
    options: [{
        type: String
    }],

})

const Question = mongoose.model("Question", QuestionSchema)
module.exports = Question;