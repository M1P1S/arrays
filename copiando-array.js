const notas = [7, 7, 8, 9];

                       //"..." significa operador de espalhamento   
const novasNotas = [5, ...notas, 10]; //Desta forma podemos acrescentar tanto no inicio como no final.

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);