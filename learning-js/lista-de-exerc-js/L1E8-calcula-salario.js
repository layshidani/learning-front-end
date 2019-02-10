// Calculadora de salário

var valorHora = prompt("Informe quanto você ganha por hora trabalhada R$ ");
var horas = prompt("Informe quantas horas você trabalhou neste mês: ")

var total = parseInt(valorHora) * parseInt(horas);

document.write("Salário R$ ", total.toFixed(2));