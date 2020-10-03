




const   express = require('express') ;



const  app = express() ;

//console.log(app) ;


app.use((req, res) => {
	res.json({
		message : 'express  worked ' ,
		success : 'true' 
	})
})


module.exports = app
