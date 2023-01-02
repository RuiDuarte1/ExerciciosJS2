// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.

const repetir = (item, quantidade) =>{
    let resultado = []

    for(let i = 0; i < quantidade; i++){
        resultado.push(item)
    }

    return resultado
}

console.log(repetir(7, 3));

// const repetir = (item, quantidade) => {
//     return Array(quantidade).fill(item)
// }


// console.log(repetir(7, 3));