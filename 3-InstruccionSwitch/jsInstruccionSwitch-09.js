function mostrar()
{
	var estacionIngresada = txtIdEstacion.value;
	let destinoIngresado = txtIdDestino.value;
	let tarifaBase = 15000;
	let aumentoDescuento;
	let precioFinal;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					aumentoDescuento = 0.2;
					break;
				case "Cataratas":
				case "Cordoba":
					aumentoDescuento = -0.1;
					break;
				case "Mar del plata":
					aumentoDescuento = -0.2;
					break;
			
			}
		break;
	
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					aumentoDescuento = -0.2;
					break;
				case "Cataratas":
				case "Cordoba":
					aumentoDescuento = 0.1;
					break;
				case "Mar del plata":
					aumentoDescuento = 0.2;
					break;
			
			}
		break;

		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumentoDescuento = 0.1;
					break;
				case "Cordoba":
				aumentoDescuento = 0;
				break;
			}

	}

	precioFinal = tarifaBase + (tarifaBase * aumentoDescuento);
	alert( "El precio final es de $" + precioFinal);


}//entregado