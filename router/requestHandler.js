
class requestHandlers {
	start(){
		console.log('Request handler start was called');
	}

	upload(){
		console.log("Request handler 'upload' was called")
	}
}

exports.requestHandlers = requestHandlers;