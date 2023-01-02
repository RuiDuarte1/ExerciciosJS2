// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela

const contarPalavras = (frase) =>{
    const palavras = frase.split(" ")

    return `sua frase tem ${palavras.length} palavras`
}

console.log(contarPalavras('sou uma frase'));