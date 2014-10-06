var express = require('express');
var app     = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.render('index');
});
app.get('/harvest', function (req, res) {
  res.render('erasure');
})


var server = app.listen(5000, function () {
  console.log('Start yer engines.');
});