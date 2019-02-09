// Conversor de temperatura:  Celsius para Farenheit

var c = parseFloat(prompt("Informe a temperatura em Celsius: "));

var f = (c * 9/5) + 32;

document.write(c, "°C, equivale a -> ", f.toFixed(2), "F");