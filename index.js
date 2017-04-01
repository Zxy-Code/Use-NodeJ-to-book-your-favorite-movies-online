const http = require('http');
const fs = require('fs');
const stockServer = require('./stock-server/server.js');
const path = require('path');
const _url = require('url');

http.createServer((request,response)=>{
    console.log(request.url);
    let requestPathName = _url;
    console.log('请求的路径是' + requestPathName);
    console.log(_url.parse(request.url,true))
    //parse()函数说明
    //url.parse(urlStr, [parseQueryString], [slashesDenoteHost]);
    //parseQueryString 为true时将使用查询模块分析查询字符串，默认为false
    //
    //slashesDenoteHost
    //
    //默认为false，//foo/bar 形式的字符串将被解释成 { pathname: ‘//foo/bar' }
    //
    //如果设置成true，//foo/bar 形式的字符串将被解释成  { host: ‘foo', pathname: ‘/bar' },并放置在query:{ host: ‘foo', pathname: ‘/bar' }
    console.log(_url.parse(request.url,true).query)
    console.log(_url.parse(request.url,true).query.username)
    console.log(_url.parse(request.url,true).query.password);
    //console.log(_url.parse(request.url).search);
    console.log(1)
    let body,url;
    if(request.url.match('.ajax')){
        console.log('this url is ajax')
    }else{
         url = path.resolve(process.cwd(),'./views/index.html');
         body = stockServer(url);
    }
    console.log(body)
    //判断路径url 是否存在
    fs.stat(url,function(err,stats){
        if(err){
            console.log(111111111111)
        }
        console.log(2222222222222222222222222)
        console.log(stats)
    })
    response.writeHead(200,{'Content-Type':'text/html'});//注意这里的html，如果为plain则不会显示html，会输出.html文件中的字符串
    response.write(body);
    response.end();
}).listen(8000);