const alunos = [`Ana`, `Marcos`, `Maria`, `Mauro`];
const medias = [7, 4.5, 8, 7.5];


// Como não usado o primeiro paramentro "aluno", o mesmo pode ser substituido pelo _
const reprovados = alunos.filter((_, indice) => {
    return (medias[indice] < 7); // Aqui vai aparecer os alunos reprovados. retorna true ou false para cada elemento do array
   
    //return (medias[indice]>= 7); // Aqui vai aparecer os alunos aprovados.  
})

console.log(reprovados);