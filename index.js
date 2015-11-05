var express = require('express')
var app = express()
// https://nodejs.org/api/path.html
var path = require('path');
var temperatura = require("./temperature.js");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs
app.set('view engine', 'ejs'); // http://expressjs.com/api.html#app.set
var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout' '
// Serve static files
app.use(express.static('.')); // http://expressjs.com/api.html#app.use#
app.use(expressLayouts);
// Luego la consultamos con app.get('port')
app.set('port', (process.env.PORT || 8080));
/*
* body-parser is a piece of express middleware that
* reads a form's input and stores it as a javascript
* object accessible through `req.body`
*
* 'body-parser' must be installed (via `npm install --save body-parser`)
* For more info see: https://github.com/expressjs/body-parser
*/
// instruct the app to use the `bodyParser()` middleware for all routes
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function(req, final){
	final.render('index');
});
// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements

app.post('/', function(req, final){
	var temperature =  new temperatura();
	temperature.initialize(req.body.ini_temp)
	var valor_final = temperature.calculate();
	final.render('final', {respuesta: valor_final});
});
app.listen(app.get('port'), function() {
console.log("Node app is running at localhost:" + app.get('port'));
});
