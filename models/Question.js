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
        type: Boolean,
        default: true
    },
    is_hide:{
        type: Boolean,
        default: false
    },
    options: [{
        type: String
    }],

})

const Question = mongoose.model("Question", QuestionSchema)
module.exports = Question;