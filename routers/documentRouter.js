const express = require('express')
const router = express.Router()
const controller = require('../controller/docController')


router.get('/',controller.getAllDocs)
router.post('/',controller.addNewDoc)
router.post('/bulk',controller.addManyDocs)
router.patch('/:docId', controller.updateById)
router.get('/search/:searchString',controller.fullTextSearch)
router.get('/:id',controller.getById)
router.delete('/delete/:docId',controller.deleteDoc)



module.exports = router
