function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);


	if(edadIngresada >= 13 && edadIngresada <= 17)
	{

		alert("Sos adolescente");

	}
}//FIN DE LA FUNCIÓN