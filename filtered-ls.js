const { pathToFileURL } = require('url');

const fs=require('fs');
const path = require('path');
fs.readdir(process.argv[2],(err,list)=>{
err?console.log(err): console.log((list.filter(file=>(path.extname(file))===('.'+process.argv[3]))).join('\n'))
;
})





