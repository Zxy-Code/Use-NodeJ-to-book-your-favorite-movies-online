let staticServer = require('../static-server/static-server.js');




let router = function(handle, pathname, reqUrl, req, res){
	console.log('this is port router');
	console.log("router request for : " + pathname);
	console.log(handle);
	if( pathname.match(/\./) ) {
		staticServer(reqUrl, req, res);
	}else{
		if ( typeof handle[pathname] == 'function' ){
			console.log(1234)
			handle[pathname](reqUrl,req,res);
		}else{
			console.log('No request handler found for ：' + pathname )
		}
	}
}

exports.router = router ;