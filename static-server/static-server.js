// 静态资源处理器
const http = require('path');
const path = require('path');
const fs = require('fs');
const format = require('../static/format.js');
const stockServer = require('../stock-server/server.js');
const FServer = require('./static-load-server.js')


let staticServer = (reqUrl,req,res) => {
	console.log('cwd : ' + process.cwd());
	//请求路径
	let req_url = reqUrl;
	console.log(req_url);
	//带域名的请求路径
	let req_url_path = path.resolve(process.cwd()+req_url);
	//获取文件包含前缀的扩展名（如：.js）
	let extname = path.extname(req_url);
	//获取扩展名
	let ext_name = extname.substring(1);
	console.log(ext_name);
	//文件请求
	if (ext_name === ''){
		console.log('ext_name为空')
		let url = path.resolve(process.cwd(),'./views/index.html');
        let body = stockServer(url);
        res.writeHead(200,{'Content-Type':'text/html'});//注意这里的html，如果为plain则不会显示html，会将.html文件中的内容按字符串的形式输出
        res.write(body);
        res.end();
	}else if(ext_name.match('map') || ext_name.match('ico')){
		res.end();
	}else{
		console.log('ext_name为：'+ext_name);
		console.log(req_url_path);
		FServer.filesLoad(req_url_path,ext_name,req,res)
	}
}

module.exports = staticServer;