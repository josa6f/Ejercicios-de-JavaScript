"use strict"

//En un lamacen se hace un 20% de descuento a los clientes cuya compra supere los 100%. ¿Cual sera la cantidad que pagara una personapor su compra?

var precio = new Number;
var total = new Number;
var descuento = new Number;

precio = Number(prompt("Digite la cantidad a pagar $ "));

if (precio >= 100) {
    total = precio * .20;
    descuento = precio - total;
    alert("Su total a pagar es $ " + descuento);
    
}else{
    alert("su total a pagar es $ " + precio);
}