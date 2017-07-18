var fs = require('fs');
var staticServer = require('../static-server/static-server.js')

/*说明
// 每个函数传递3个参数，
// 请注意第一个参数，如果url的pathname和view文件中的html文件名一样就不需要单独赋值（eg: const reqView = '/index'）;
*/

let index = function(reqUrl,req,res){
	console.log("Request handler 'start' was called");
	const reqView = '/index';
	staticServer(reqView,req,res);
}

let start = function(reqUrl,req,res){
	console.log("Request handler 'start' was called");
	staticServer(reqUrl,req,res);
}

let upload = function(reqUrl,req,res){
	console.log("Request handler 'upload' was called")
	const reqView = '/detail';
	staticServer(reqView,req,res)
}


exports.index = index;
exports.start = start;
exports.upload = upload;