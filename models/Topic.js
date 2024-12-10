const mongoose = require('mongoose');
const Topic =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Topic', Topic);