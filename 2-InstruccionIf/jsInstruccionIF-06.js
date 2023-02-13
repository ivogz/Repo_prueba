function mostrar()
{
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);


	if(edadIngresada > 18)
	{

		alert("Sos mayor de edad");

	}
	
	else
	{

		if(edadIngresada >= 13 && edadIngresada <= 17)
		{

		alert("Sos adolescente");

		}

		else
		{
		
			alert("Sos menor de edad");

		}

	}

}