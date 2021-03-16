
let ejemplo =  [1,2,2,5,4,6,7,8,8,8];

var iguales=[];
for (var i=0; i < ejemplo.length; i++) {
  var actual = ejemplo[i];
  var posterior = ejemplo[i+1];
		if (actual === posterior) {
      iguales.push(actual);
    }
}
console.log(iguales);

var arreglouno = [];
var arreglodos = [];
var sumatoria=0;
for (var i = 0; i < iguales.length; i++) {
  var primerrep = iguales[i];
  var comparar = iguales[i+1];

    if (primerrep = comparar) {
      	sumatoria++;
        arreglouno.push(primerrep);
    } else {
      sumatoria++;
      arreglodos.push(arreglodos);
    }
}

console.log(`el numero mas repetido es:  ${arreglouno[1]}`);
console.log(`cantidad de veces repetida:  ${sumatoria}` );

//*******************************************************************************

//OBTENER EL VALOR MAXIMO MEDIENTE ARREGLO JS
  var arreglo  = [1,2,2,5,4,6,7,8,8,8];
  maximo = 0;
  for(var i = 0, len = arreglo.length; i < len; i++) {
      if(maximo < arreglo[i]) {
         maximo = arreglo[i];
      }
  }
  console.log('OBTENER EL VALOR MAXIMO MEDIENTE ARREGLO JS');
  console.log(maximo);

//OBTENER EL VALOR MAXIMO MEDIENTE FUNCION MATH
  var mayor = Math.max(1,2,2,5,4,6,7,8,8,8);
  console.log('OBTENER EL VALOR MAXIMO MEDIENTE FUNCION MATH');
  console.log(mayor);

//OBTENER EL VALOR MAXIMO MEDIENTE FUNCION MATH y spreed operator
var spreadmayor = Math.max(...ejemplo);
console.log('OBTENER EL VALOR MAXIMO MEDIENTE FUNCION MATH y spreed operator');
console.log(spreadmayor);

//*******************************************************************************

// FUNCION PARA OBTENER "DICCIONARIO DE ARREGLO"
function numeroRepetido() {
  let dict = {};
  let nuevoarreglo = [1,2,2,5,4,6,7,8,8,8];
  for (let numero of nuevoarreglo) {
    if (numero in dict) {
      ++dict[numero];
    } else {
    dict[numero] = 1;
    }
  }
  //console.log(dict);
  return dict;
}
var arraydict = numeroRepetido();
console.log('Array DICCIONARIO DE ARREGLO');
console.log(arraydict);

//*******************************************************************************

// OBJETO O ARRAY ?
 console.log('Es array???');
 console.log(Array.isArray(arraydict));
 var tipo = arraydict;
 console.log('que tipo es ');
 console.log(tipo);
 console.log(typeof tipo);
//*******************************************************************************

 var objeto1 = arraydict;
 var valobj1 = Object.values(objeto1); // arreglo con los valores del objeto
 var keysobj1 = Object.keys(objeto1); // arreglo con los keys del objeto

 //OBTENER EL VALOR MAXIMO MEDIENTE FUNCION MATH y spreed operator
 var maxvalue = Math.max(...valobj1);
 console.log('Veces que se repite el numero');
 console.log(maxvalue);

 //OBTENER EL KEY DEL VALOR MAXIMO
 function getKeyByValue(object, value) {
   return Object.keys(object).find(key => object[key] === value);
 }
 console.log('Número mas repetido de forma seguida');
 console.log(getKeyByValue(objeto1, maxvalue));

//*******************************************************************************

//pruebas
//var prueba = {1: 10, 2: 20, 3: 30 }
//console.log(prueba);
//++prueba[2];
//console.log(prueba);
