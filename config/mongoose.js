const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_dev');

const db = mongoose.connection;

db.on('error',function(err){
	console.log('Error connecting to MongoDB');
});

db.once('open',function(){
	console.log("connected to MongoDB");
})

module.exports = db;