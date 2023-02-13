/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   

    let largo;
    let ancho;
    let cantidad;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    cantidad = ((largo + ancho) *2)*3;

    alert("Se necesitan comprar " + cantidad + " hilos de alambre");

}
function Circulo () 
{
    let radio;
    let perimetro;
    let alambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio)

    perimetro = 3.14 * radio * 2;
    alambre = perimetro * 2;

    alert("Se necesita comprar "+ alambre +" hilos de alambre")
	
}
function Materiales () 
{
	
    let largo;
    let ancho;
    let perimetro;
    let bolsasCemento;
    let bolsasCal;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = (largo + ancho)*2;
    bolsasCemento = perimetro *2;
    bolsasCal = perimetro *3;

    alert("Se necesitan " + bolsasCemento + " bolsas de cemento y "+ bolsasCal + " bolsas de cal");

}