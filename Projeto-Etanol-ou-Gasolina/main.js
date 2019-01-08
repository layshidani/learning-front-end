const ethanol = document.getElementById("ethanol");
const gasoline = document.getElementById("gasoline");

const calculate = function calculate(ethanol, gasoline) {
  const ethanolMax = ( parseFloat(gasoline) * 0.70 );
  console.log(ethanolMax, ethanol, gasoline);
  
  if ( parseFloat(ethanol) < ethanolMax ) {
    let result = ("O Etanol compensa mais! \nEstimando através dos valores informados, o etanol vai compensar sempre que estiver abaixo de " + "\nR$ " + ethanolMax);
    let showResult = document.getElementById("result");
    showResult.innerHTML = result;
  } else {
    let result = ("A gasolina compensa mais!  \nEstimando através dos valores informados, o etanol vai compensar sempre que estiver abaixo de " + "\nR$ " + ethanolMax);
    let showResult = document.getElementById("result");
    showResult.innerHTML = result;
  }
};

