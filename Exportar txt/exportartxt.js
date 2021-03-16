var probando = [1, 'estoy', 'probando'];

const fs = require('fs');

let promesaEscritura = new Promise((resolve, reject) => {
  fs.writeFile('prueba_archivo_salida.txt', probando, (error) => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });
});

promesaEscritura
.then(() => {
  console.log('Se ha realizado la escritura del archivo satisfactoriamente');
})
.catch(() => {
  console.log('Ha ocurrido un error:', error);
});
