"use strict"

// crear aun programa que cree un numero random del 1 al 10, despues te pida un numero de igual manera del 1 al 10 y al final te diga si acertaste o fallaste y muestre que numero era el que habia creado

var numeroRandom = Math.round(Math.random()*10);
var pedirUnNumero = Number(prompt("Digite un numero"));

if (pedirUnNumero == numeroRandom) {
    alert("Acertaste");
}else{
    alert("Fallaste");
}
document.write("El numero es " + numeroRandom);