const name = prompt("Olá, qual é o seu nome?");

while (name === "") {
  name = prompt("Olá, qual é o seu nome?");
}

const welcome = document.getElementById("name");
welcome.innerHTML = name;

let points = 0;

function goodChoice1() {
  window.alert("Boa escolha! Vamos à primeira pergunta:");
  const question1 = prompt("1. O que é CSS? \n----------------------------------------\nA. CSS (Cascading Style Sheets) é uma linguagem de programação para automatizar páginas web.\nB. CSS (Cascading Style Sheets) é um conjunto de folhas para estilizar somente textos.\nC. CSS (Cascading Style Sheets) é um mecanismo para adicionar estilo a um documento web.\n\n(Digite A/B/C)").toUpperCase();
  if (question1 === "C") {
    alert("Parabéns, você acertou! :) \n\nVamos para a próxima...");
    ++points;
  } else {
    alert(":/ Não foi dessa vez... \n\nVamos ver se você acerta na próxima...");
  }
  const question2 = prompt("2. Quando foi lançado o CSS?\n---------------------------------------- \nA. 1992. \nB. 1996. \nC. 2002.\n\n(Digite A/B/C)").toUpperCase();
  if (question2 === "B") {
    alert("Parabéns, você acertou! :) \n\nVamos para a próxima...");
    ++points;
  } else {
    alert(":/ Não foi dessa vez... \n\nVamos ver se você acerta na próxima...");
  }
  const question3 = prompt("3. Qual é a propriedade que eu posso usar em CSS para modificar o tamanho das letras do texto?\n---------------------------------------- \nA. font-size.\nB. text-size.\nC. letter-size.\n\n(Digite A/B/C)").toUpperCase();
  if (question3 === "A") {
    alert("Parabéns, você acertou! :) \n\nO jogo acabou...");
    ++points;
  } else {
    alert(":/ Não foi dessa vez... \n\nO jogo acabou...");
  }
  alert(name.toUpperCase() + "\nSua Pontuação foi: \n" + points);
  if (points < 1) {
    var showPointsToUser = document.getElementById("final-points-0");
    showPointsToUser.innerHTML = points;
    document.getElementById("result").scrollIntoView();
  } else if (2 > points >= 1) {
    var showPointsToUser = document.getElementById("final-points-1-2");
    showPointsToUser.innerHTML = points;
    document.getElementById("result").scrollIntoView();
  } else {
    var showPointsToUser = document.getElementById("final-points-3");
    showPointsToUser.innerHTML = points;
    document.getElementById("result").scrollIntoView();
  }
}

function goodChoice2() {
  window.alert("Boa escolha! Vamos à primeira pergunta:");
  const question1 = prompt("1. Em que ano foi criado o Javascript? \n------------------------\nA. 2008\nB. 1991\nC. 1995\n\n(Digite A/B/C)").toUpperCase();
  if (question1 === "C") {
    alert("Parabéns, você acertou! :) \n\nVamos para a próxima...");
    ++points;
  } else {
    alert(":/ Não foi dessa vez... \n\nVamos ver se você acerta na próxima...");
  }
  const question2 = prompt("2. Qual o nome do(a) criador(a) do JS?\n------------------------ \nA. Brendan Eich. \nB. Ada Lovelace. \nC. Steve Jobs.\n\n(Digite A/B/C)").toUpperCase();
  if (question2 === "A") {
    alert("Parabéns, você acertou! :) \n\nVamos para a próxima...");
    ++points;
  } else {
    alert(":/ Não foi dessa vez... \n\nVamos ver se você acerta na próxima...");
  }
  const question3 = prompt("3. Por que o JS é uma excelente linguagem para aprender?\n------------------------ \nA. Porque as aplicações são quase infinitas e é uma das linguagens que mais cresce no mercado de trabalho. \nB. Porque é uma linguagem de baixo nível.\nC. Porque o JS é aplicado para obtenção de resultado eficiente e descritivo. \n(Digite A/B/C)").toUpperCase();

  if (question3 === "A") {
    alert("Parabéns, você acertou! :) \n\nO jogo acabou...");
    ++points;
  } else {
    alert(":/ Não foi dessa vez... \n\nO jogo acabou...");
  }
  alert(name.toUpperCase() + "\nSua Pontuação foi: \n" + points);

  if (points < 1) {
    const showPointsToUser = document.getElementById("final-points-0");
    showPointsToUser.innerHTML = points;
    document.getElementById("result").scrollIntoView();
  } else if (2 > points >= 1) {
    const showPointsToUser = document.getElementById("final-points-1-2");
    showPointsToUser.innerHTML = points;
    document.getElementById("result").scrollIntoView();
  } else {
    const showPointsToUser = document.getElementById("final-points-3");
    showPointsToUser.innerHTML = points;
    document.getElementById("result").scrollIntoView();
  }
}

function showAnswerTheme1() {
  document.getElementById("answers-theme-1").style.display = "block";
}

function showAnswerTheme2() {
  document.getElementById("answers-theme-2").style.display = "block";
}

function playAgain() {
  points = 0;
  document.getElementById("user-points").innerHTML = `
  <p id="final-points-0" class="final-points-0"></p>
  <p id="final-points-1-2" class="final-points-1-2"></p>
  <p id="final-points-3" class="final-points-3"></p>
  `
  document.getElementById("choice").scrollIntoView();
}

if (reload()) {
  window.scrollTo(0, 0);
}