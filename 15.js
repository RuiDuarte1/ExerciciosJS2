// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

const paresDeIndicesPares = (numeros) => {
    return numeros.filter((numero, indice) => {
        const par = numero % 2 === 0
        const indicePar = indice % 2 === 0

        return par && indicePar
    })
}

console.log(paresDeIndicesPares([1, 2, 3, 4]));
console.log(paresDeIndicesPares([10, 70, 22, 43]));