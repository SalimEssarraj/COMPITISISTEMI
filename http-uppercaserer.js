const http = require('http');

const port = process.argv[2];



const server = http.createServer((req, res) => {

  if (req.method === 'POST') {
    let requestData = '';

    
    req.on('data', (data) => {
      requestData += data;
    });

    
    req.on('end', () => {
      const responseData = requestData.toUpperCase();
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(responseData);
    });
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});