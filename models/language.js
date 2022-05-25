const mongoose = require('mongoose');
const { Schema } = mongoose;

const languageSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    greeting: String,
    pangram: String,
    filler: String
});

module.exports = mongoose.model('Language', languageSchema);