

const http = require('http');
const hostname = "127.0.0.1" ;
const port = 5000 ;
const fs = require('fs') ;

const  server = http.createServer((req,res)=>{

	//rvccvimies.stausCode = 200 ;
	//res.setHeader('content-type','text/plain');
	fs.readFile('./index.html',null,(error,data)=>{

		if(error){
			res.end("you have  an error to read a file ") ;
		}
		else{
			res.end(data) ;
		}

	});


});
server.listen(port,hostname,()=>{
	console.log("server  runing  at  index.html");
});
	


