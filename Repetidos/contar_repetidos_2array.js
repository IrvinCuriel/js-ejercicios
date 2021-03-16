// En este ejemplo primero hay que comparar el de mayor long con el de menos ademas de
// hace falta crear la condicion de que cuando la coincidencia sea el mismo numero de la LONGITUD
// que cree un nuevo arreglocon con uno de los dos

var array1 = new Array('hola', 'adios', 'buena', 'tarede', 'noche', 'mañana');
var array2 = new Array('adios', 'hasta', 'noche', 'tarede');
var iguales=0;
for (var i=0; i < array1.length; i++)
{
	for (var j=0; j < array1.length; j++)
	{
		if (array1[i] == array2[j])
			iguales++;
	}
}
console.log(iguales);
