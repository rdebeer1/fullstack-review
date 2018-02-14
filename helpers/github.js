const request = require('request');
const config = require('../config.js');


let getReposByUsername = (username) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, (err, res, body) => {
    if (err) {
      return console.log('error')
    } else {
      return console.log('Upload successful! Server responded with:', res);
    }
    let repo = JSON.parse(body);
    for (let i = 0; i < repo.length; i++) {
      let newRepo = ({
        id: `${repo[i].id}`,
        name: `${repo[i].name}`,
        firstLast: `${repo[i].firstLast}`
      })
      newRepo.save((err, newRepo) => {
        if(err) {
          console.error(err)
        } else {
          console.log('Great Success')
        } 
      })
    }
    res.end();
  })
}

module.exports.getReposByUsername = getReposByUsername;