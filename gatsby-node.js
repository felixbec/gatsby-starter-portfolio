const path = require('path')
const _ = require("lodash")
// Create pages for category and blogs separately using two separate
// queries. We use the `graphql` function which returns a Promise
// and ultimately resolve all of them using Promise.all(Promise[])

