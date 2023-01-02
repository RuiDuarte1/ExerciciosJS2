// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao
// objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas

const inverterObjeto = (objeto) =>{
   const paresChaveValorInvertido = Object.entries(objeto).map(parChaveValor => parChaveValor.reverse())
   
   return Object.fromEntries(paresChaveValorInvertido)
}

console.log(inverterObjeto({ a: 1, b: 2, c: 3}));