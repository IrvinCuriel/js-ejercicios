let fs = require('fs');

let archivo = fs.readFileSync('a_example', 'utf-8');
console.log(archivo);

var separador = "\n";
var conjuntoingredientes = require('./funstringarreglo');
var informacion = conjuntoingredientes(archivo, separador);
console.log(informacion);
var longinformacion = informacion.length;
console.log(longinformacion);

//*****************************************************************************
var remover = informacion.splice(0, 1);
var remover = informacion.splice((informacion.length-1), 1);

console.log(informacion);
console.log(longinformacion);


