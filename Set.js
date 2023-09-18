const nomes =["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const meuSet = new Set([nomes]);

const nomesAtualizados = [...new Set(nomes)]; //Forma Simplificada de escrever o codigo.

console.log(nomesAtualizados);