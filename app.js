var express=require("express");

var http=require("http");
var path=require("path");
var handlebars=require("express-handlebars").create({defaultLayout:"main"});
var bodyParser=require("body-Parser");
var db = require('./db')
//var dbLink=require("./json/config.json");
var dbLink=require("./json/dbproduction.json");
var url = dbLink.devServer.url;

var app=express();
var publicPath=path.resolve(__dirname, "public"	);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(publicPath));

//app.user routers
app.use(require("./routers/getMenuItems"));
app.use(require("./routers/popMenus"));
app.use(require("./routers/processOrders"));
app.use(require("./routers/signupServer"));

// Connect to Mongo on start
db.connect(url, function(err){
	if (err) {
		console.log('Unable to connect to Mongo.');
	} else {
		var listener=http.createServer(app).listen(process.env.PORT||3000);
		console.log('Server is listening at port '+listener.address().port)

	}
});

app.get("/",function(req,res){
	console.log("Coming a request!");
	res.sendFile(`${publicPath}/main.html`);
});

app.get("/cart",function(req,res){
	console.log("Coming a request!");
	res.sendFile(`${publicPath}/cart.html`);
});
/*app.get("/menu",function(req,res){
		console.log("Coming a request!");
	res.sendFile(`${publicPath}/menu.html`);
});*/
app.get("/getMenuItems", function(req, res){


})
module.exports.app=app;
