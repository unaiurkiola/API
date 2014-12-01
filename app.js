
// view engine example
var express = require('express'),
exphbs = require('express-handlebars');
var app = express();
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
var request = require('request');
// **********************************************
app.get('/', function (req, res) {

	var url = 'http://vimeo.com/api/v2/group/filmschool/info.json';
	var request = require('request');
		request({url:url, json:"true"}, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					console.log(body);

					

					res.render('vimeo',body);
				} else {

					
					res.json({error:"request error"});
				}
				});
				});
		var server = app.listen(process.env.PORT || 3000, function(){
		console.log('Listening in port %d', server.address().port);
});

	
