var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getHTML (options, cb) {

  var https = require('https');

  https.get(options, function (response) {

    let bufferedData = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferedData += data;
    });

    response.on('end', function() {
    // const parsedData = JSON.parse(bufferedData);
      cb(bufferedData);
    });


  });

}

function printHTML (options) {
  getHTML(requestOptions, console.log);
}

printHTML(requestOptions);

module.exports = getHTML;