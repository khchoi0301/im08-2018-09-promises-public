/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');


// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath) {

  // console.log('arg0', arguments[0], 'arg1', arguments[1])
  var cbfunc = arguments[1]

  fs.readFile(filePath, 'utf8', function (err, content) {
    // console.log('cb', err, content, cbfunc)
    if (err) {
      // console.log('err');
      cbfunc(err)
    } else {
      // console.log('cont', content, cbfunc);
      var index = content.indexOf('\n')
      cbfunc(err, content.slice(0, index - 1))
    }
  })



};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  var cbfunc = arguments[1]
  request(url, function (error, response, body) {
    // console.log('error:', error); 
    // console.log('statusCode:', response && response.statusCode); 
    // console.log('body:', body); 
    if (error) {
      cbfunc(error)
    } else {
      cbfunc(error, response.statusCode)
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
