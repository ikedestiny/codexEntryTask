const { createReadStream } = require('fs')
const config = require('config');
const split = require('split2')
const {Client}  = require('@elastic/elasticsearch')
const client  = new Client({
  node: 'https://codexdeployment.es.eastus2.azure.elastic-cloud.com',
    cloud: {
        id: 'a4c9e73cba6d40749353e0668ce7f940:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDIxM2I0ODAwZWQ1MzRkOTU5ZGUzZDJkYWQzYzFkYTgyJGI1M2UzOTBmOWU1MjQxZjdiZGMxYzU2N2FkZGJiZDU3'
    },
    auth: {
      username: "elastic",
      password: "204cKWsjXHraZaoDfwaatQ5X"
    }
})


async function create_db(dbName) {
 await client.indices.create({ index: `${dbName}` }) // to create db, index == db in elastic
}


create_db('document').then(res => {
  console.log(res)
})
//indexing documents
// await client.index({
//   index: 'my_index',
//   id: 'my_document_id',
//   document: {
//     foo: 'foo',
//     bar: 'bar',
//   },
// })



//getting documents
// await client.get({
//   index: 'my_index',
//   id: 'my_document_id',
// })


//searching documents
// await client.search({
//   query: {
//     match: {
//       foo: 'foo'
//     }
//   }
//})


//updating documents
// await client.update({
//   index: 'my_index',
//   id: 'my_document_id',
//   doc: {
//     foo: 'bar',
//     new_field: 'new value'
//   }
// })


//deletimg documents

// await client.delete({
//   index: 'my_index',
//   id: 'my_document_id',
// })

//deleting a db == deleting index in elastic 
//await client.indices.delete({ index: 'my_index' })

//for clear info about starting up .==>>> https://www.elastic.co/guide/en/cloud/current/ec-getting-started-node-js.html


// const result = await client.helpers.bulk({
//     datasource: createReadStream('./dataset.ndjson').pipe(split()),
//     onDocument (doc) {
//       return {
//         index: { _index: 'my-index' }
//       }
//     }
//   })
  
//  console.log(result)

  module.export = client;