var express = require('express');
var app     = express();
var favicon = require('serve-favicon');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));


app.get('/', function (req, res) {
  res.render('index');
});
app.get('/harvest', function (req, res) {
  res.render('erasure');
})


var server = app.listen(process.env.PORT || 5000, function () {
  console.log('Start yer engines.');
});