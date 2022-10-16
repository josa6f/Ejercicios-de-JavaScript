"use strict"

/* Hacer un programa que tenga un menu con las siguientes opciones

Opcion 1: elevar un numero a una potencia X
Opcion 2: sacar raiz cuadrada de un numero 
Opcion 3: salir
*/

var numeroOpcion = new Number;
var numero = new Number;
var potencia = new Number;
var operacion = new Number;

alert("*************Menu*************");
alert("Opcion 1: elevar un numero a una potencia X y opcion 2: sacar raiz cuadrada de un numero");

numeroOpcion = Number(prompt("Digite la opcion que nececite"));

switch (numeroOpcion) {
    case 1:  
    numero = Number(prompt("Digite el numero que quiere elevar a la potencia"));
    potencia = Number(prompt("Digite la potencia"));
    operacion = Math.pow(numero,potencia);
    alert("El numero " + numero + " a la potencia ^ " + potencia + "es: " + operacion); 
        break;

    case 2:
        numero = Number(prompt("Digite el numero al que le quiere sacar raiz cuadrada"));
        operacion = Math.sqrt(numero);
        alert(" La Raiz cuadrada de " + numero + "es igual a " + operacion);
        break;

    case 3: alert("Salir");
        break;
    default: alert("solo hay dos opciones, 1 y 2");
        break;
}

