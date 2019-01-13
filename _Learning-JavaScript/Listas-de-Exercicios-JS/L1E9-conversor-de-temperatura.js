// Conversor de temperatura: Farenheit para Celsius

var f = parseFloat(prompt("Informe a temperatura em Farenheit: "));

var c = (5 * (f-32) / 9);

document.write(f, " Farenheit, equivale a -> ", c.toFixed(2), "°C");