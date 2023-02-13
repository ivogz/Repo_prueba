/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
    let precioLamparas;
    let cantidadLamparas;
    let precioFinal;
    let marca;
    let descuento;
    let impuesto;

    descuento = 1;
    marca = document.getElementById("Marca").value;
    precioLamparas = 35;
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);
    
    if(cantidadLamparas >= 6)
    {
        descuento = 0.5;
    }

    else
    {

        if(cantidadLamparas == 5 )
        {

            if(marca == "ArgentinaLuz")
            {
                descuento = 0.6;
            }

            else
            {
                descuento = 0.7;
            }

        }

        else
        {

            if(cantidadLamparas == 4)
            {

                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    descuento = 0.75;
                }

                else
                {
                    descuento = 0.8;
                }

            }

            else
            {
                
                if(cantidadLamparas == 3)
                {
                    if(marca == "ArgentinaLuz")
                    {
                        descuento = 0.85;
                    }
                    
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            descuento = 0.9;
                        }

                        else
                        {
                            descuento = 0.95;
                        }
                    }
                }


            }

        }

    }

    precioLamparas= cantidadLamparas * precioLamparas;
    precioFinal = precioLamparas * descuento;

    if(precioFinal >= 120)
    {
        impuesto = precioFinal * 0.1;
        precioFinal = precioFinal + impuesto;

        alert("Usted pagó " + impuesto + " de IIBB.")

    }

    document.getElementById("txtIdprecioDescuento").value = precioFinal;

}
