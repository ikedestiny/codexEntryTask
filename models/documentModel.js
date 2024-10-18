const mongoose = require('mongoose')
const docSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:String,
    content: String
});



// Create a new text index with the desired weights
docSchema.index({ title: 'text', content: 'text' }, {
  weights: {
    title: 2,
    content: 1,
  },
  name: 'title_text_content_text_custom' // Optional: specify a custom name for the index
});
  
const model = mongoose.model('DocSchema',docSchema);
model.createIndexes(
//     { title: 'text', content: 'text' }
//     ,
//    {
//      weights: {
//        title: 2,
//        content: 1,
//      }}
)
module.exports = model