const ethanolValue = document.querySelector('#ethanol').value;
const gasolineValue = document.querySelector('#gasoline').value;
const calcButtom = document.querySelector('#calc');

function calculate() {
  const ethanolMax = gasolineValue * 0.70 ;
  console.log(ethanolMax, ethanolValue, gasolineValue);
  
  if ( parseFloat(ethanolValue) <= ethanolMax ) {
    let result = ("O Etanol compensa mais! \nEstimando através dos valores informados, o etanol vai compensar sempre que estiver abaixo de " + "\nR$ " + ethanolMax);
    let showResult = document.getElementById("result");
    showResult.innerHTML = result;
  } else {
    let result = ("A gasolina compensa mais!  \nEstimando através dos valores informados, o etanol vai compensar sempre que estiver abaixo de " + "\nR$ " + ethanolMax);
    let showResult = document.getElementById("result");
    showResult.innerHTML = result;
  }
};


