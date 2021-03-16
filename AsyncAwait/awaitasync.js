// ****************************************************************
/*
function showData(){
  const json = getData();

  console.log(`Nombre de: ${json.nombre}`);
  console.log(`Tipo de: ${json.category}`);
}

function getData(){
  fetch('http://localhost:3000/api')
  .then(response => response.json())
  .then(json => {
    console.table(json);
  })
  .catch(err => {
    console.error(err);
  });
}

showData();
*/
// ****************************************************************
/*
function showData(){
  const json = getData();

  console.log(`Nombre de: ${json.nombre}`);
  console.log(`Tipo de: ${json.category}`);
}

function getData(){
  fetch('http://localhost:3000/api')
  .then(response => response.json())
  .then(json => {
    return json;
  })
  .catch(err => {
    console.error(err);
  });
}

showData();
*/
// *****************************************************************
/*
async function showData(){
  const json = await getData();

  console.log(`Nombre de: ${json.nombre}`);
  console.log(`Tipo de: ${json.category}`);
}

function getData(){
  fetch('http://localhost:3000/api')
  .then(response => response.json())
  .then(json => json);
}

showData();
*/
// *****************************************************************

async function showData(){

  try {

    const json = await getData();

    console.log(`Nombre de: ${json.nombre}`);
    console.log(`Tipo de: ${json.category}`);

  } catch (err) {
    console.error(err);
  }

}

function getData(){
  fetch('http://localhost:3000/api')
  .then(response => response.json())
  .then(json => json);
}

showData();
