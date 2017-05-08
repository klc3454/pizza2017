var express = require('express'), 
router = express.Router()
var db = require('../db')
var ObjectId = require('mongodb').ObjectID;
var bodyParser=require("body-Parser");
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.post('/signupServer', function(req, res) 
{
	var eMail=req.body.email;
	var password=req.body.pwd;
	
	var collectionO = db.getDb().collection('customers');
	collectionO.insert({"Email": eMail, "Password":password});
	res.redirect("main.html");
	res.send("Done!");

});
module.exports = router;