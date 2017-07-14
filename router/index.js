const fs = require('fs');

// class router {
//     get(url){
//         if(url==='/'){

//         }
//     }
// }

let router = (url,data,req,res) => {
	return {
		'user':(data,req,res)=>{
			let user = require('../test-data/user-data.json');
			console.log(user);
			if (user.data.username === data.username && user.data.password === data.password) {
				res.writeHead(200,{'content-type':'text/plain'})
				res.write()
			}
		})
	}
}