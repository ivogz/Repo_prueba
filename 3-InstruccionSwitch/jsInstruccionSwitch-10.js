function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	let destinoIngresado = txtIdDestino.value;
	let seViaja;
	let noSeViaja;
	let mensaje;

	seViaja = "Se viaja";
	noSeViaja = "No se viaja";

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					mensaje = seViaja;
					break;
			
				default:
					mensaje = noSeViaja;
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Mar del plata":
				case "Cataratas":
					mensaje = seViaja;
					break;
				
				default:
					mensaje = noSeViaja;
					break;
			}
			break;

		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
					mensaje = noSeViaja;
					break;
			
				default:
					mensaje = seViaja;
					break;
			}
			break;

			default:
				mensaje = seViaja;
			break;

	}
	alert(mensaje);
}//