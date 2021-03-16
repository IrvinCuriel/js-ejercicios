// buscar --> tablas de hash
// normalize

let text = "hola esto es una prueba, Hola, espero que esto sea una prueba positiva!";


function normalize(palabra) {
  return palabra.toLowerCase().replace(",", "").replace(".", "").replace("!", "");
}


// con expreciones regulares "matchear"
/*
function normalize(palabra) {
  return palabra.toLowerCase().replace(/[.!,]/g , "");
}
*/

function palabraRepetida(palabra) {
  let dict = {};
  let separador = text.split(" ");
  for (let palabra of separador) {
    if (normalize(palabra) in dict) {
      ++dict[normalize(palabra)];
    } else {
    dict[normalize(palabra)] = 1;
    }
  }
  console.log(dict);
}

palabraRepetida(text);
