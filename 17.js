// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

const somaArray = (numeros) =>{
    const soma = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0)

    return soma
}

console.log(somaArray([10, 10, 10]));