const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Schema = mongoose.Schema;
const db = mongoose.connection;

var repoSchema = new Schema({
  id:  Number,
  repoName: String,
  url: String,
  username: String
});
var Repo = mongoose.model('Repo', repoSchema);
module.exports = Repo;

