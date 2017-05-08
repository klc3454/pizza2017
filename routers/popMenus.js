var express = require('express')
, router = express.Router()

var db=require("../db");
//change 

router.get("/menu", function(req, res){
	//var viewModel={ infoMenu:[]};
	var info=[];
	var i=0;
	var collection = db.getDb().collection('menu');
	collection.find().toArray(function(err, docs){
	//viewModel.infoMenu="ok try handlebar";
	for(doc of docs)
		info.push(doc);
	console.log(info);
	res.render("menu", {infoMenu: info});

	});
});
module.exports = router
