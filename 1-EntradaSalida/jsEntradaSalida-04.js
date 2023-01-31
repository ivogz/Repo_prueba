/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre=txtIdNombre.Value;
	txtIdNombre.value = prompt("¿Cuál es tu nombre?");
	alert(txtIdNombre.value);
}

