/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let Fahrenheit;
    let Centigrados;

    Fahrenheit = document.getElementById("txtIdTemperatura").value;
    Fahrenheit = parseInt(Fahrenheit);

    Centigrados = (Fahrenheit - 32) / 1.8;

    alert(Fahrenheit + "º Fahrenheits equivalen a " + Centigrados + "º centigrados");
}

function CentigradosFahrenheit () 
{
	let Fahrenheit;
    let Centigrados;

    Centigrados = document.getElementById("txtIdTemperatura").value;
    Centigrados = parseInt(Centigrados);

    Fahrenheit = Centigrados * 1.8 + 32;

    alert(Centigrados + "º Centigrados equivalen a " + Fahrenheit + "º fahrenheit");
}
