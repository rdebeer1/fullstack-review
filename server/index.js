const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index')
const getReposByUsername = require('../helpers/github')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())

app.post('/repos', function (req, res) {
  console.log(req.body.username)
  let username = req.body.username;
  getReposByUsername.getReposByUsername(username);
  res.end();
});

app.get('/repos', function (req, res) {
  res.end();
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

