const numeros = [5, 12, 8, 7, 3, 22, 14, 9, 2, 11];
let somaPares = 0;

for (let i = 0; i < 10; i++) {

    if (numeros[i] % 2 === 0) {
        somaPares = somaPares + numeros[i];
    }
}

alert("Vetor: " + numeros);
alert("Soma dos números pares: " + somaPares);