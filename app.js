const http = require('http');
require("dotenv").config()

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World_NguyenTheTuan</h1>');
});

console.log("Running");

server.listen(port,() => {
  console.log(`Server running at port http://localhost:`+port);
});
