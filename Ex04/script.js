let vetorOriginal = [];
let vetorSemDuplicatas = [];

for (let i = 0; i < 10; i++) {
    let numeroDigitado = Number(prompt("Digite o número " + (i + 1) + ":"));
    vetorOriginal[i] = numeroDigitado;
}

for (let i = 0; i < 10; i++) {
    if (vetorSemDuplicatas.includes(vetorOriginal[i]) === false) {
        vetorSemDuplicatas.push(vetorOriginal[i]);
    }
}

alert("Vetor Original: " + vetorOriginal);
alert("Vetor Sem Duplicatas: " + vetorSemDuplicatas);