/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	// toma de datos
	let numeroUno;
	let numeroDos;
	let resultadoDeSuma;
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultadoDeSuma = parseInt(txtIdNumeroUno.value) + parseInt(txtIdNumeroDos.value)

	alert(resultadoDeSuma);
}

