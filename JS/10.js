"use strict"

//Leer 2 numeros; si son iguales que los multiplique, si el primer numero es mayor  que el segundo que los reste y si no que los sume

var numero1 = new Number;
var numero2 = new Number;
var operacion = new Number;

numero1 = Number(prompt("Digite el primer numero"));
numero2 = Number(prompt("Digite el segundo numero"));

if (numero1 == numero2) {
    operacion = numero1 * numero2;
    alert("los numero se multiplican al ser iguales y el resultado es " + operacion);
}else if (numero1 > numero2) {
    operacion = numero1 - numero2;
    alert(" Los numero se restan al ser el numero 1 mayor y el resultado es " + operacion);
    
} else {
    operacion = numero1 + numero2;
    alert("Al ser el segundo numero mayor estos se sumaron y el resultado es " + operacion);
}