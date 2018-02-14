const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  name: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = Repo.save(err, Repo => {
  if (err) {
    return console.error(err);
  } else {
  console.log(Repo)
  }
});

module.exports.save = save;