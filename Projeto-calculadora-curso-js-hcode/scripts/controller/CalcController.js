class CalcController {
  constructor() {
    // _ diz que é privado e não fica acessível fora da classe
    this._displayCalc = "0";
    this._currentDate;
    this.initialize;
  }

  initialize() {
    let displayCalcEl = document.querySelector('#display');
    let dateEl = document.querySelector('#data');
    let timeEl = document.querySelector('#hora');

    displayCalcEl.innerHTML = '123';
    dateEl.innerHTML = '18/02';
    timeEl.innerHTML = '13:26';
  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(value) {
    this._displayCalc = value;
  }

  get currentDate() {
    return this._currentDate;
  }

  set currentDate(value) {
    this._currentDate = value;
  }
}