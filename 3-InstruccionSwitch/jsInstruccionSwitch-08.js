function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje;

	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = "ta fresco";
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = "hace calooooor";
			break;
	}

	alert(mensaje);
}//entregado