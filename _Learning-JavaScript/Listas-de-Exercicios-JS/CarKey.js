var age = prompt("Quantos anos você tem? ")

if (Number(age) < 18) {
	alert(":/ Sinto muito, mas você ainda não tem idade para dirigir ... desligando...");
} else if (Number(age) > 18) {
	alert(":) Lingando... Boa viagem!");
} else if (Number(age) === 18) {
	alert(":D Hey, 1º ano como motorisra! Parabéns! Boa viagem!");
}