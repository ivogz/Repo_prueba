function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch (mesDelAño) {
		case "Febrero":
			alert("28 días o 29 en año bisiesto");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("30 días");
			break;
		default:
			alert("31 días");
			break;
	}

}//entregado