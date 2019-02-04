var express = require('express');
var app = express();

app.listen(8080, function () {
  console.log('Berhasil Menjalankan Server di 8080!');
  console.log('Akses Hello World!: localhost:8080/tugas1');
});

app.get('/tugas1', function (req, res) {
  res.send('Hello World!');
});

//app.listen(8080);
