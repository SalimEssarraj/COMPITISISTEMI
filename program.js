const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const fileLocation = process.argv[3];



const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/plain');

  const readStream = fs.createReadStream(fileLocation);


  readStream.pipe(res);

});


server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});