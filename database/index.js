const mongoose = require('mongoose');
db = mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  firstLast: String
});

let Repo = mongoose.model('Repo', repoSchema);

// let save = Repo.save((err, Repo) => {
//   if (err) {
//     return console.error(err);
//   } else {
//   console.log(Repo)
//   }
// });
// var newRepo = new Repo({name: 'something ', url: 'something.com'})
// newRepo.save(() => {
//   console.log('repo saved');
// })
// module.exports.save = save;
module.exports.Repo = Repo;
module.exports.connection = db;