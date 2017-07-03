var finalFunction = require('./final-function.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (options) {
  getHTML(requestOptions, console.log);
}