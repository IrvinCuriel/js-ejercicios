let x = 10;

const p = new Promise((resolve, reject) =>{
  if (x == 10) {
    resolve('La variable es igual a 10');
  } else {
    reject('La variable no es igual a 10');
  }
});

p.then(res =>{
  console.log('success:' + res);
})
.catch(error =>{
  console.log('error:' + error);
});
