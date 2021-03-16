module.exports = function(dividirArray,separador) {
  var nuevoarreglo = [];
   var arrayDeCadenas = dividirArray.split(separador);
   for (var i=0; i < arrayDeCadenas.length; i++) {
      nuevoarreglo.push(arrayDeCadenas[i]);
   }
   return nuevoarreglo;
}
