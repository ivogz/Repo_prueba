function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let aleatorio;

	aleatorio = Math.floor(Math.random()*10);
	aleatorio = parseInt(aleatorio)

	if(aleatorio > 8)
	{

		alert("EXCELENTE")

	}
	
	
	else
	{


		if(aleatorio > 4 && aleatorio < 8)
		{
			
		alert("Aprobado");	

		}
		else
		{

		alert("Vamos que se puede");
		
		}
	}
	
}//entregado