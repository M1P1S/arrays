const arrayNumeros = [1,2,3,4];

function multiplicaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNumeros.map(multiplicaPorDez);

//const arraySomada = arrayNumeros.map(num => num * 10);

//console.log(arraySomada);



// reduce()

const numeros = [43, 50, 65, 12];

//Primeira forma 
const soma = numeros.reduce((acc, atual) => atual + acc, 0);

//Segunda forma 
//const soma = numeros.reduce(function (acc, atual) {
//    return atual + acc
//}, 0);

//Terceira forma 
// function operacaoNumerica(acc, atual) {
//     return atual + acc
// }

// const soma = numeros.reduce(operacaoNumerica, 0);

console.log(soma);
