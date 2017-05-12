var express = require('express');
var app = express();
app.use(express.static('www'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));







app.listen(8000,function(){
	console.log('服务器已运行......')
});
