/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function (filePath, callback) {

  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf8', function (err, content) {
      if (err) {
        reject(err);
      } else {
        var index = content.indexOf('\n');
        resolve(content.slice(0, index));
      }
    });
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function (url) {

  return new Promise(function (resolve, reject) {
    request(url, 'utf8', function (err, content) {
      if (err) {
        reject(err, new Error('err'));
      } else {
        resolve(content.statusCode);
      }
    });
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
