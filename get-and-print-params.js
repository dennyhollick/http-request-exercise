var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function getHTML () {

  https.get(requestOptions, function (response) {

    let bufferedData = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferedData += data;
    });

    response.on('end', function() {
    return bufferedData;
    });


  });

}




console.log(getHTML());

// function printHTML (html) {
//   console.log (html);
// }




// printHTML(getHTML);

// module.exports = getHTML(options);