function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;
	horaDelDia = parseInt(horaDelDia);
	
	let periodoDelDia; 

	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			periodoDelDia = "de mañana";
			break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			periodoDelDia = "de tarde";
			break;
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			periodoDelDia = "de noche";
			break;
		default: 
			periodoDelDia = "inexistente"

	}
	
	alert("Es " + periodoDelDia); 

}//entregado