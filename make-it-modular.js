var mymodule = require('./mymodule');

var directory = process.argv[2]  
var ext = process.argv[3];

mymodule(directory, ext, function(files) {
    
    files.forEach(function(file) {
        console.log(file);
    });
});