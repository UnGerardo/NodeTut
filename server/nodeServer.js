const http = require('http');
const fs = require('fs');

// callback functions is called whenever
// a new request is made
const server = http.createServer((req, res) => {
  console.log('request made');

  // set header content-type = plain text and send text
  // res.setHeader('Content-Type', 'text/plain');
  // res.write('hello there');
  // res.write('<p>hello there</p>');
  // res.end();

  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    //redirecting
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      return;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // set header content-type = text/html and send html page
  res.setHeader('Content-Type', 'text/html');
  fs.readFile(path, (err, data) => {
    if(err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
    }
  })
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});