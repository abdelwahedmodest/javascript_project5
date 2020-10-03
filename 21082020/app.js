

const http = require('http');
const hostname = "127.0.0.1" ;
const port = 5000 ;
const fs = require('fs') ;
const  url = require('url') ;
const   app = require('./app2');




const  server = http.createServer(app);
/*
const  server = http.createServer((req,res)=>{

    const  path = url.parse(req.url).pathname ;
	//res.end(path);
	switch(path){

		case '/':
                        
			//res.end('the  main  page  ') ;
                 	fs.readFile('./index.html',null,(error,data)=>{
    
               		if(error){
	         		res.end("you have  an error to read a file ") ;
		        }
	         	else{
		        	res.end(data) ;
	         	}

                 	});

			break ;

		case '/one':

			//res.end('the one  page ') ;
                  	fs.readFile('./indexone.html',null,(error,data)=>{
    
               		if(error){
	         		res.end("you have  an error to read a file ") ;
		        }
	         	else{
		        	res.end(data) ;
	         	}

                 	});

			break ;

		default :

			res.end('this is  your   error  page ') ;
			break;

	}
});

*/
server.listen(port,hostname,()=>{
	console.log("server  runing  at  index.html");
});
	


