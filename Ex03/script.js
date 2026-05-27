let numeros = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
    let numeroDigitado = Number(prompt("Digite o número da posição " + i + ":"));
    numeros[i] = numeroDigitado;
}

let numeroChave = Number(prompt("Digite um número para pesquisar no vetor:"));

for (let i = 0; i < 10; i++) {
    if (numeros[i] === numeroChave) {
        contador = contador + 1; 
    }
}

alert("Vetor digitado: " + numeros);
alert("O número " + numeroChave + " aparece " + contador + " vezes no vetor.");