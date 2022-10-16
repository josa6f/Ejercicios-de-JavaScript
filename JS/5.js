"use strict"

//una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuanto debera pagar finalmente por su compra

var cantidad = new Number;
var descuento = new Number;
var total = new Number;

cantidad = Number(prompt("Digite el total"));

if (cantidad < 100) {
    alert("El total a pagar es: " + cantidad);
} else if (cantidad > 100) {
    descuento = cantidad * .15;
    total = cantidad - descuento;
    alert("la cantidad a pagar es: " + total);
    
}

