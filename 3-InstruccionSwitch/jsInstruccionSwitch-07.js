function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje;

	switch (destinoIngresado) {
		case "Bariloche":
			mensaje = "oeste";
			break;
		case "Ushuaia":
			mensaje = "sur";
			break;
		case "Cataratas":
			mensaje = "norte";
			break;
		case "Mar del plata":
			mensaje = "este";
			break;
	}

	alert(mensaje);

}//entregado