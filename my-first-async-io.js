const fs = require('fs')

const file = process.argv[2];

fs.readFile(file, "utf-8", (err, content)=>{
    if(err){
        console.log("Errore nella lettura del file")
    }
    const countline = (content.match(/\n/g)).length
    console.log(countline)
})