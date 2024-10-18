const DocSchema = require('../models/documentModel')
const mongoose = require('mongoose')
const db = require('../db/db')

const getAllDocs = (req,res,next)=>{
    db.getAllDocsFromDB
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
 
    db.saveDoc(newDoc)
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

        db.saveDoc(newDoc)
    })
res.status(200).json({
    message:"all objects added successfully"
})
}catch(err){
    res.status(500).json(err)
}

}


const updateById = (req,res,next)=>{
    const ID = req.params.docId;
    const doc = req.body
    
    db.updateDocByID(ID,doc)
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
    

    db.search(req.params.searchString).then(
        result => {
            res.status(200).json(result)
        }
    ).catch(err=>
        res.status(500).json(err)
    )
     
 }


  const getById = (req,res,next)=>{
    const id = req.params.id
    db.findDocbyId(id)
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
  db.deleteDoc(id)
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