var app=require('./mymodule')
function callback(err,data) {
    if (err) {
        return console.log(err);
    } else {
        console.log(data.join('\n'));
    }
}
app(process.argv[2],process.argv[3],callback)