const http = require('http');

const url = process.argv[2];


http.get(url, (response) => {

    let responseData = '';
    response.setEncoding('utf-8');

  response.on('data', (data) => {
  responseData += data
  });

        response.on('end', () => {
        const nChar = responseData.length;
        console.log(nChar);
        console.log(responseData);
  });
})