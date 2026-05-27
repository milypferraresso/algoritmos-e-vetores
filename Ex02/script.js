let numeros = [];

for (let i = 0; i < 7; i++) {
    let numeroDigitado = Number(prompt("Digite um número:"));
    
    numeros[i] = numeroDigitado;
}

alert("Vetor gerado: " + numeros);