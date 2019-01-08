// Store values in variables
const celsiusInput = document.querySelector('#celsiusValue > input');
const fahrenheitInput = document.querySelector('#fahrenheitValue > input');
const kelvinInput = document.querySelector('#kelvinValue > input');

// Round the number 
function roundNumber(number) {
  return Math.round( number * 100 ) / 100; 
}

// Converts the temperature C -> F and C -> K
function celsiusToFK() {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 1.80) + 32;
  const kelvin = celsius + 273.15;
  fahrenheitInput.value = roundNumber(fahrenheit);
  kelvinInput.value = roundNumber(kelvin);
}

// Converts the temperature F -> C and F -> K
function fahrenheitToCK() {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = (fahrenheit - 32) / 1.80;
  const kelvin = ((fahrenheit - 32) / 1.8) + 273.15;
  celsiusInput.value = roundNumber(celsius);
  kelvinInput.value = roundNumber(kelvin);
}

// Converts the temperature K -> C and K -> F
function kelvinToCF() {
  const kelvin = parseFloat(kelvinInput.value);
  const celsius = kelvin - 273.15;
  const fahrenheit = ((kelvin - 273.15) * 1.8) + 32;
  celsiusInput.value = roundNumber(celsius);
  fahrenheitInput.value = roundNumber(fahrenheit);
}

// Add Event Listener
celsiusInput.addEventListener('input', celsiusToFK);
fahrenheitInput.addEventListener('input', fahrenheitToCK);
kelvinInput.addEventListener('input', kelvinToCF);