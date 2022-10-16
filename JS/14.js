"use strict"

/* Elabora un programa que me muestre el significado de aniversario de cada decada hasta los 60

Hojalata    - 10 años
Porcelana   - 20 años
Perlas      - 30 años
Rubi        - 40 años
Oro         - 50 años
Diamante    - 60 años
*/

var aniversario = new Number;

aniversario = Number(prompt("Digite los años de su aniversario"));

switch (aniversario) {
    case 10: alert("Aniversario de Hojalata")
        break;
    case 20: alert("Aniversario de Porcelana")
        break;
    case 30: alert("Aniversario de Perlas")
        break;
    case 40: alert("Aniversario de Rubi")
        break;
    case 50: alert("Aniversario de Oro")
        break;
    case 60: alert("Aniversario de Diamante")
        break;
    default:alert("Usted no tiene aniversario")
        break;
}