// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
// números de strings.

const comparar = (x, y) => {
    if(typeof x != typeof y){
        return false
    }else{
        return x >= y
    }
   
}

console.log(comparar(0, 0));

