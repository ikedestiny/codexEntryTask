<<<<<<< HEAD
# Codex Task
## uses mvc model without the v
## the data is stored in mongodb cloud and all insertion and deletions is managed by mongoose package
## express package encapsulates the routing 
## all the details for the routing functions are written  in controller for clarity of code and modularity
## all crud operations and search are done through the routes in documentRouter.js


# API ENDPOINTS
## get all --> GET /documents
## find by id -->GET /documents/{id}
## update --> PATCH /documents/{id} BODY -> { json updated props}
## delete --> DELETE /documents/{id}
## add doc --> POST /documents BODY -> { json doc}
## add many docs --> POST /documents/bulk
## search --> GET /documents/{search param}