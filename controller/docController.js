const DocSchema = require('../models/documentModel')
const mongoose = require('mongoose')

const getAllDocs = (req,res,next)=>{
    DocSchema.find()
   .exec()
   .then(result => {
    res.status(200).json(result)
   }).catch(error => {
    console.log(error)
    res.status(500).json(error)
   })
}


const addNewDoc = (req,res,next)=>{

    let newDoc = new DocSchema({
     _id : new mongoose.Types.ObjectId(),
     title: req.body.title,
     content: req.body.content
    })
 
    newDoc.save()
    .then(result =>{
     res.status(200).json(newDoc);
    }).catch(err=>{
     res.status(500).json(err);
    })
    
 }

 const addManyDocs = (req,res,next)=>{
    let jsonArr = req.body
    try{
    jsonArr.forEach(doc=>{
        let newDoc = new DocSchema({
            _id : new mongoose.Types.ObjectId(),
            title: doc.title,
            content: doc.content
        })

        newDoc.save()
    })
res.status(200).json({
    message:"all objects added successfully"
})
}catch(err){
    res.status(500).json(err)
}

}


const updateById = (req,res,next)=>{
    DocSchema.findOneAndUpdate({_id:req.params.docId},req.body)
    .exec()
    .then(
        result => {
            console.log(result)
            res.status(200).json({"message":"successfully updated"})
        }
     )
     .catch(err =>{
        console.log(err)
        res.status(500).json(err)
     })
}

const fullTextSearch = (req,res,next)=>{
    DocSchema.find().exec().then(result=>{
     let allDocs = result;
     res.status(200).json(searchValues(req.params.searchString,allDocs));
     
 
    })
     
 }

 function searchValues(needle,dataset) {
    var found = [];
    dataset.forEach(doc => {
        for(key in doc){
            if(typeof doc[key] === "string" && doc[key].includes(needle)){
                found.push(doc)
            }
        }
    })

    return found;


  }


  const getById = (req,res,next)=>{
    const id = req.params.id
   DocSchema.findById(id)
   .exec()
   .then(doc => {
    console.log(doc)
    res.status(200).json(doc)
   })
   .catch(err => {
    console.log(err)
    res.status(404).json({
        error: err
    })
   })
}

const deleteDoc = (req,res,next)=>{
    const id = req.params.docId
  DocSchema.findByIdAndDelete(id)
  .exec( )
  .then(result => {
    console.log(result)
    res.status(200).json({
        "message":`removed document with id ${id}`
    })
  })
  .catch(err => {
    console.log(err)
    res.status(501).json(err)
  })
}

module.exports = {
    getAllDocs, addNewDoc, addManyDocs, updateById, fullTextSearch, getById, deleteDoc
}
