// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
// têm a quantidade de dígitos indicada pelo segundo parâmetro.

const filtrarQuantidadeDigitos = (numeros, quantidadeDesejada) =>{
    return numeros.filter(numero => {
        const quantidadeDigitos = String(numero).length

        return quantidadeDigitos === quantidadeDesejada
    })
}

console.log(filtrarQuantidadeDigitos([5, 9, 1, 125, 11], 1));
console.log(filtrarQuantidadeDigitos([38, 2, 365, 10, 125, 11], 2));