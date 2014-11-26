var express = require('express');
var app = express();
var request = require('request');
// **********************************************
app.get('/', function (req, res) {
// Donostia. Zubiri-Manteo
var url = 'http://vimeo.com/api/v2/group/filmschool/info.json';
var request = require('request');
request({url:url, json:"true"}, function (error, response, body) {
if (!error && response.statusCode == 200) {
console.log(body);
res.json(body);
} else {
res.json({error:"request error"});
}
});
});
var server = app.listen(process.env.PORT || 3000, function(){
console.log('Listening in port %d', server.address().port);
});
