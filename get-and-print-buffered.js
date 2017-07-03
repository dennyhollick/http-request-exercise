var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks () {

  https.get(requestOptions, function (response) {

    let bufferedData = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferedData += data;
    });

    response.on('end', function() {
    console.log(bufferedData);
    });


  });

}


getAndPrintHTMLChunks();