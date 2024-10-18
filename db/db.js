const { query } = require('express');
const DocSchema = require('../models/documentModel')

const getAllDocsFromDB = DocSchema.find()
.exec();

const saveDoc = (doc)=>{return doc.save()}

const updateDocByID = (docID,updatedDoc)=>{
    DocSchema.findOneAndUpdate({_id:docID},updatedDoc)
    .exec()
}
const search = (query) => DocSchema.find(
          { $text: { $search: query } },
          { score: { $meta: 'textScore' } }
        ).sort({ score: { $meta: 'textScore' } });


  const deleteDoc = (id)=>DocSchema.findByIdAndDelete(id)
  .exec()

  const findDocbyId = (id)=> DocSchema.findById(id)
  .exec()
  

  
  
  
  // Example usage
  //search('configuration');
  


module.exports = {
    getAllDocsFromDB,saveDoc, updateDocByID,search,deleteDoc,findDocbyId
}