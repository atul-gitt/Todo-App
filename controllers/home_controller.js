const Task = require('../models/tasks');

module.exports.home = function(req,res){
	Task.find({},function(err,tasks){
		if(err){
			console.log("error in fetching contacts from db");
			return;
		}
		return res.render('home',{
			title : "Todo App",
			task_list : tasks
		});
	});
}

module.exports.create = function(req,res){
	if(req.body.category == "ignore"){
		return res.redirect('back');
	}
	Task.create(req.body,function(err,user){
		if(err){
			console.log('error in creating task');
			return;
		}
		return res.redirect('back');
	});
}

module.exports.delete = function(req,res){
	if(req.body.task == undefined){
		return res.redirect('back');
	}
	//console.log(req.body.task);
	if(Array.isArray(req.body.task)){
		for(var i=0;i < req.body.task.length;i++){
			Task.deleteOne({description :req.body.task[i]},function(err){
				if(err){
					console.log('Error in deleting an object from database');
					return res.redirect('back');
				}
			});
		}
	}else {
		Task.deleteOne({description :req.body.task},function(err){
				if(err){
					console.log('Error in deleting an object from database');
					return res.redirect('back');
				}
			});
	}
	return res.redirect('back');
}