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

const obtenerUsuario = id =>{
  return new Promise((resolve, reject) =>{
    if (usuarios.find(usuario => usuario.id === id)) {
      console.log('El usuario existe!');
      resolve(obtenerTelefono(id))
    } else {
      reject('El usuario no existe');
    }
  });
};

const obtenerTelefono = id =>{
  return new Promise((resolve, reject) =>{
    if (telefonos.find(telefono => telefono.id === id)) {
      console.log('El telefono existe!');
      resolve(obtenerEdad(id));
    } else {
      reject('El telefono no existe');
    }
  });
};

const obtenerEdad = id =>{
  return new Promise((resolve, reject) =>{
    const edad = edades.find(edad => edad.id === id);
    if (edad) {
      resolve('El usuario tiene ' + edad.edad + ' años');
    } else {
      reject('No se encontro la edad');
    }
  });
};

obtenerUsuario(2)
.then(resUsuario =>{
    return resUsuario;
})
.then(resTel =>{
    return resTel;
})
.then(mensaje =>{
    console.log(mensaje);
})
.catch(error =>{
    console.error(error);
});
