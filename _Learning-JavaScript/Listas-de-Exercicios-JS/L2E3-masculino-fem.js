var sexo = prompt("Digite M (masculino) ou F (feminino): ")

if (sexo === "M") {
    document.write("M - masculino");
} else if (sexo === "F") {
    document.write("F - feminino");
} else {
    document.write("sexo inválido");
}