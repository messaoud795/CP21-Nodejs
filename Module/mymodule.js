
const fs=require('fs');
const path = require('path');
module.exports =function (dirname,extname,callback) {
    fs.readdir(dirname,(err,list)=>{

if (err) { callback(err)}
else{   list=((list.filter(file=>(path.extname(file))===('.'+extname))));
        callback(null,list)}})
    
}







