/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(txtIdNumeroUno.value) + parseInt(txtIdNumeroDos.value)

	alert("La suma es " + resultado)
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(txtIdNumeroUno.value) - parseInt(txtIdNumeroDos.value)

	alert("La resta es " + resultado)
}

function multiplicar()
{ 
		let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(txtIdNumeroUno.value) * parseInt(txtIdNumeroDos.value)
	
	alert("La multiplicacion es " + resultado)
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(txtIdNumeroUno.value) / parseInt(txtIdNumeroDos.value)
	
	alert("La division es " + resultado)
}

