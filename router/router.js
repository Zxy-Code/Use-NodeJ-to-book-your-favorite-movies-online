const requestHandlers= require('./requestHandler.js');

const getHandle = function(reqUrl,req,res){
	let handle = {};
	handle['/'] = requestHandlers.index;
	handle['/start'] = requestHandlers.start;
	handle['/upload'] = requestHandlers.upload;

	return handle;
}

exports.getHandle = getHandle;
