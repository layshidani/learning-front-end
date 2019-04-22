function getValues() {
  let ethanolValue = parseFloat(document.getElementById('ethanol').value);
  let gasValue = parseFloat(document.getElementById('gasoline').value);

  let showResult = calculate(ethanolValue, gasValue);

  document.getElementById('result').innerHTML = showResult;
}


function calculate(e, gas) {
  let ethanolMax = gas * 0.70;

  const isEthanol = 'Abasteça com ETANOL...' + '\n O preço do etanol compensa até R$ ' + ethanolMax.toFixed(3);
  const isGas = 'Abasteça com GASOLINA...' + '\n O preço do etanol compensa até R$ ' + ethanolMax.toFixed(3);
  
  if (e > ethanolMax) {
    return isGas;
  } 
  return isEthanol;
};

document.getElementById('calc').addEventListener('click', getValues);

