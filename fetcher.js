const request = require('request');
const fs = require('fs');
const argu = process.argv.slice(2);
const url = argu[0];
const path = argu[1];
request(url, (error, response, body) => {
  let size = response.headers['content-length'];
  fs.writeFile(path, body, err => {
    if (err) {
      console.log(err);
    }
    console.log(`Downloaded and saved ${size} bytes to ${path}`);
  });
});




