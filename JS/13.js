"use strict"

/*Elabora un programa donde muestre los dias de la semana, cuando el usuario ingrese los 7 primeros numeros

lunes     - 1
martes    - 2
miercoles - 3
jueves    - 4
viernes   - 5 
sabado    - 6 
domingo   - 7 
*/

var numero = new Number;

alert("Digite un numero del 1 al 7 para que se muestre un dia de la semana");

numero = Number(prompt("Digite el numero"));

switch (numero) {
    case 1: alert("Lunes")
        break;
    
    case 2: alert("Martes")
        break;

    case 3: alert("Miercoles")
        break;

    case 4: alert("Jueves")
        break;

    case 5: alert("Viernes")
        break;

    case 6: alert("Sabado")
        break;

    case 7: alert("Domingo")
        break;

    default: alert("Ingresa un numero del 1 al 7")
        break;
}