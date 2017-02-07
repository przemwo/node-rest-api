// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var categoriesSchema = new mongoose.Schema({
  name: String,
  status: String,
  favourite: Boolean
});

// Return model
module.exports = restful.model('Categories', categoriesSchema);
