




let router = function(handle, pathname){
	console.log("router request for : " + pathname);
	console.log(handle);
	if (typeof handle[pathname] == 'function'){
		handle[pathname]();
	}else{
		console.log('No request handler found for ：' + pathname )
	}
}

exports.router = router ;