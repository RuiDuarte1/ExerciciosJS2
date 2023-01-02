// Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
// ou seja, sem as vogais.

const removerVogais = (frase) =>{
   return frase.replace(/[aeiou]/ig, '')
}

console.log(removerVogais('chocolate'));
console.log(removerVogais('volante'));