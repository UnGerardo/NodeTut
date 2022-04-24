const http = require('http');

// callback functions is called whenever
// a new request is made
const server = http.createServer((req, res) => {
  console.log('request made');

  // set header content-type = plain text
  res.setHeader('Content-Type', 'text/plain');
  res.write('hello there');
  res.end();
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});