const express = require('express');
const app = express();
const port = 8080;
const db = require('./config/mongoose');
const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
	src : './assets/scss',
	dest : './assets/css',
	debug : true,
	outputStyle : 'extended',
	prefix : '/css'
}));

app.use(express.urlencoded());

app.use(express.static('./assets'));
app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
	if(err){
		console.log(`Error in runnig the server : ${err}`);
	}
	console.log(`Server is runnig on port : ${port}`);
});