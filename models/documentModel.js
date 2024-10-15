const mongoose = require('mongoose')
const docSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:String,
    content: String
});

module.exports = mongoose.model('DocSchema',docSchema);