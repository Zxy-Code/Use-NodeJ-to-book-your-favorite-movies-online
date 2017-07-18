const fs = require('fs');
const path = require('path');

let stockServer = (url, filename)=>{
    console.log(__dirname);

    //获取文件名
    fs.readdirSync('./views').filter(function(file){
        console.log(file)
        console.log(file.substring(0,file.indexOf('.')));
    })
    console.log(filename);
    let body;
    if(filename === '/' || filename === ''){
    	body = fs.readFileSync('./views/idnex.html');
    }else{
    	console.log('同步读取文件')
    	body = fs.readFileSync('./views' + filename +'.html');
    	console.log(body)
    }
    return body;
}


module.exports = stockServer;