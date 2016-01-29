//Importamos Express tras instalarlo vía NPM
var express = require('express');

// Definimos App como la función del módulo Express
var App = express();

// Definimos algunas variables que usaremos en las distintas funciones
var port = process.env.PORT || 3000;
var options = {
  root: __dirname
};

// Definimos funciones para luego usarlas al recibir una petición en el router
function getHTML(req, res) {
  res.sendFile('./index.html', options, (err) => {
    if (err) throw err;
    console.log('Sirviendo index.html')
  })
};

// Definimos las rutas
App.get('/', getHTML);

// Escuchamos el puerto de Express
App.listen(port, function () {
  console.log('Aplicacion escuchando en el puerto: ' + port)
});
