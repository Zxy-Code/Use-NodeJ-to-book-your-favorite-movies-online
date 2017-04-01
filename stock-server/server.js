const fs = require('fs');
const path = require('path');

let stockServer = (url)=>{
    console.log(__dirname);

    //获取文件名
    fs.readdirSync('./views').filter(function(file){
        console.log(file)
        console.log(file.substring(0,file.indexOf('.')));
    })

    let body = fs.readFileSync('./views/index.html');
    return body;
}


module.exports = stockServer;