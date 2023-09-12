const http = require('http');


const urls = process.argv.slice(2);

function fetchData(url, callback) {
  http.get(url, (response) => {
    let responseData = '';

    response.setEncoding('utf-8');

 
    response.on('data', (data) => {
      responseData += data;
    });

    response.on('end', () => {
      callback(responseData);
    });
  });
}

function fetchAllData(urls) {
  let compl = 0;

  for (const url of urls) {
    fetchData(url, (data) => {
      console.log(data);
      compl++;
      if (compl == urls.length) {
        process.exit(0);
      }
    });
  }
}
fetchAllData(urls);