// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

const primeiroUltimo = (elementos) =>{
    const primeiro = elementos.shift()
    const ultimo = elementos.pop()

    return [primeiro, ultimo]
}

console.log(primeiroUltimo([7, 14, 'alo']));