let usuarios = [
  {
  id: 1,
  nombre: 'Mario'
  },
  {
    id: 2,
    nombre: 'Elena'
  }
];

let telefonos = [
  {
  id: 1,
  telefono: '12345678'
  },
  {
    id: 2,
    telefono: '87654321'
  }
];

let edades = [
  {id: 1, edad: 10},
  {id: 2, edad: 20}
];

const obtenerUsuario = (id, callback, error) =>{
  return new Promise((resolve, reject) =>{
    if (usuarios.find(usuario => usuario.id === id)) {
      console.log('El usuario existe!');
      //callback
      callback(id);
    } else {
      //error
      error('El usuario no existe')
    }
  });
};

const obtenerTelefono = (id, callback, error) =>{
  return new Promise((resolve, reject) =>{
    if (telefonos.find(telefono => telefono.id === id)) {
      console.log('El telefono existe!');
      //callback
      callback(id);
    } else {
      //error
      error('El telefono no existe')
    }
  });
};

const obtenerEdad = (id, callback, error) =>{
    const edad = edades.find(edad => edad.id === id);
    if (edad) {
      //callback
      callback('El usuario tiene ' + edad.edad + ' años');
    } else {
      //error
      error('No se encontro la edad');
    }
};

obtenerUsuario(2, id =>{
    // Siguiente función
    obtenerTelefono(id, resTelefono =>{
          //Seguir Codigo
          obtenerEdad(resTelefono, resEdad =>{
              console.log(resEdad);
          }, errorEdad =>{
              console.error(errorEdad);
          });
    }, errorTelefono =>{
      console.error(errorTelefono);
    });
}, error => {
    console.error(error);
});
