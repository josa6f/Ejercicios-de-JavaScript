"use strict"

/*Una fruteria ofrece las manzanas con descuento, segun la siguiente tabla

         numero de kilos                     % de descuento
              0 - 2                                0%
              2.01 - 5                             10%
              5.01 -10                             15%
              10.01 en adelante                    20%

Determina cuanto pagara una persona que compra manzanas en esa fruteria, kilo de manzana a 8 dolares*/

const precio = 5;
var kilos = new Number;
var total = new Number;
var descuento = new Number;
var tDescuento = new Number;
var tConDescuento = new Number;

kilos = Number(prompt("¿Cuantos kilos llevara?"));

total = kilos * precio;

if (kilos > 0 && kilos <= 2) {
    alert("Su total a pagar es: $ " + total);
    
}else if (kilos >= 2.01 && kilos <= 5) {
    tDescuento = total * .10;
    tConDescuento = total - tDescuento;
    alert("Su total a pagar es: $ " + tConDescuento);
}else if (kilos >= 5.01 && kilos <= 10) {
    tDescuento = total * .15;
    tConDescuento = total - tDescuento;
    alert("Su total a pagar es: $ " + tConDescuento);
}else{
    tDescuento = total * .20;
    tConDescuento = total - tDescuento;
    alert("Su total a pagar es: $ " + tConDescuento);
}