function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch (mesDelAño) {
		case "Enero":
			alert("Que comienzes bien el año!!");
			break;
		case "Marzo":
			alert("A clases!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!"); 
			break;
	
		default:
			alert("Es indistinto");
			break;
	}


}//entregado