// declararo variables 
let num = 0

// ingreso de valores
num = parseInt(prompt("Ingrese cantidad de días"))
let n1 = parseFloat(num);

let anio = Math.floor(n1 / 365);
let modAnio = n1 % 365;

let semanas = Math.floor(modAnio / 7);
let modSema = semanas % 7;

let dias = modSema;

document.write("<p>El número ingresado " + n1 + " equivale: </p>")
document.write("<p>" + anio + " año(s), " + semanas + " semanas, " + dias + " días.</p>");