const requestHandlers = require('./requestHandler.js');

const getHandle = function(){
	console.log(111)
	console.log(requestHandlers.requestHandlers.start)
	let handle = {};
	handle['/start'] = requestHandlers.requestHandlers.start();
	handle['/upload'] = requestHandlers.requestHandlers.upload();
	return handle;
}

exports.getHandle = getHandle;
