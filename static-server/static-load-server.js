const fs = require('fs');
const match_format = require('../static/format.js');


let filesLoad = (filepath,type,req,res) =>{
	fs.stat(filepath,(err,stats) =>{
		if(err){
			throw err;
		}else{
			fs.readFile(filepath,'binary',(err,file) => {
				if(err){
					throw err;
				}else{
					res.writeHead(200,{'content-type':match_format[type]});
					res.write(file,'binary');
					res.end();
				}
			})
		}
	})
};

exports.filesLoad = filesLoad;