// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá
// ser de duas casas decimais, arredondando se necessário.

const areaTriangulo = (base, altura) =>{
    const resultado =  (base * altura) / 2

    return resultado.toFixed(2)
}

console.log(areaTriangulo(7, 9));