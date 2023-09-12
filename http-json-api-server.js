var http = require('http');
var url  = require('url');

var port = process.argv[2];

function parseDate(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
}

function Unix(date) {
    return {
        unixtime: date.getTime()
    };
}

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    var urlObj = url.parse(req.url, true);
    
    var route = urlObj.pathname;
    var date = new Date(urlObj.query.iso);
    
    if (route == '/api/parsetime') {
        var data = parseDate(date);
    } else if(route == '/api/unixtime') {
        var data = Unix(date);
    }
    
    res.end(JSON.stringify(data));
});

server.listen(port);