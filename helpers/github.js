const request = require('request');
const config = require('../config.js');
let db = require('../database/index.js');

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }
  request(options, (err, res, body) => {
    if (err) {
       console.log('error')
    } else {
      console.log('WAWAWEEWA');
    }
    var repo = JSON.parse(body);
    db.findOne({username:username}).then(found => {
      if(found) {
        callback()
      } else {
        for (let i = 0; i < repo.length; i++) {
          let newRepo = new db({
            id: `${repo[i].id}`,
            repoName: `${repo[i].name}`,
            url: `${repo[i].html_url}`,
            username: `${repo[i].owner.login}`
          })
          newRepo.save(function (err, newRepo) {
            if (err) {
              console.error('error')
            } else {
              console.log('GREAT SUCCESS')
            }
          })
        }
      }
    })
    
    
  })
  setTimeout( () => callback(), 1000)
  
}

module.exports.getReposByUsername = getReposByUsername;