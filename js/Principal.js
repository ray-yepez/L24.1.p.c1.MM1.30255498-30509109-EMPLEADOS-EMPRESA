import Empleado from "./Empleado.js";
import Empresa from "./Empresa.js";

let emp = new Empresa();

//(Mary, ‘F’),(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)

let jose = new Empleado("José","M");
let carlos = new Empleado("Carlos","M");
let pedro = new Empleado("Pedro","M");
let mary = new Empleado("Mary","F");

emp.procesarEmp(jose);
emp.procesarEmp(carlos);
emp.procesarEmp(pedro);
emp.procesarEmp(mary);

let salida = document.getElementById("salida");

salida.innerHTML = "Cantidad de hombres que trabajan en la empresa: " + emp.hombres;
salida.innerHTML += "<br>Porcentaje de mujeres que trabajan en la empresa: " + emp.pctjMujeres() + "%";
