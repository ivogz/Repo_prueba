function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch (mesDelAño) {
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno!");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío!");
			break;
		default:
			alert("Ya pasamos el invierno!!");
			break;
	}




}//Entregado