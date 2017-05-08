var MongoClient=require('mongodb').MongoClient;
var assert=require('assert');
var dbLink=require("./json/config.json");
var url=dbLink.dbServer.url;

MongoClient.connect(url,function(err, db){
	assert.equal(null,err);
	var collection=db.collection("users");
	collection.insert(
		{name:"Kelsey Windham", pwd:"password", phone:"3364531912"},
		function(err, result)
		{
			assert.equal(null,err);
			console.log("Success: "+ result.insertedCount);
			db.close();

		});
});
	