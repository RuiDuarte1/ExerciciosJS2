// Criar uma função que receba um array de números e retorne o menor número desse array.

// const menorNumero = (numeros) =>{
//     return Math.min(...numeros)
// }

const menorNumero = (numeros) =>{
    let menor = numeros[0]

    for(let i in numeros)
    if(numeros[i] < menor){
        menor = numeros[i]
    }

    return menor
}

console.log(menorNumero([10, 5, 7]));