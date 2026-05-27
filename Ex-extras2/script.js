// Crie um algoritmo que leita o valor inicial da contagem, o 
// valor final e o incremento, mostrando em seguida todos os
// valores no intervalo:

// Ex.: Digite o primeiro valor: 3
// Digite o ultimo valor: 10
// Digite o incremento: 2
// Contagem: 3 5 1 9 Acabou!


let inicio = Number(prompt("Digite o primeiro Valor:"));
let fim = Number(prompt("Digite o último Valor:"));
let incremento = Number(prompt("Digite o incremento:"));


let resultado = "Contagem: ";


while (inicio <= fim) {
    resultado = resultado + inicio + " "; 
    inicio = inicio + incremento; 
}

resultado = resultado + "Acabou!";
alert(resultado);