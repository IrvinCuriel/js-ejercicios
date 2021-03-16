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

const obtenerUsuario = id =>{
  return new Promise((resolve, reject) =>{
    if (usuarios.find(usuario => usuario.id === id)) {
      //resolve('El usuario existe!');
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
      resolve('El telefono existe!');
    } else {
      reject('El telefono no existe');
    }
  });
};

obtenerUsuario(2)
.then(res =>{
    //console.log(res);
    return res;
})
.then(mensaje =>{
    console.log(mensaje);
})
.catch(error =>{
    console.error(error);
});
