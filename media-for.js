// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0

// for (let i = 0; i < notas.length; i++) {
//     somaDasNotas += notas[i];
// }

// const media = somaDasNotas / notas.length;

// console.log(`A média das notas é ${media}.`)
//console.log(somaDasNotas);

const notas1 = [10,6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[j].length; j++) {
        media += notasGerais[i][j]/notasGerais[i].length;
    }
}

media = media/notasGerais.length

console.log(media)

