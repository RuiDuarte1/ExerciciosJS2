// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

const soNumeros = (array) =>{
    const filtrar = array.filter(item => typeof item === "number")

    return filtrar
}

console.log(soNumeros(['javascript', 1, 3, 'web']));