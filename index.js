var express = require("express");
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var app = express();

app.get('/',function (req,res) {
    res.sendfile('form.html');
});

app.post('/upload', upload.single('document'), function (req, res, next) {
  var json = {"size":req.file.size.toString()};
  res.end(JSON.stringify(json));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Header Parser Microservice app established!');
});