const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela','Vinicius', 'Renan', 'Renata' ,'Daisy', 'Camilo']
 
const sala1 = alunos.slice(0,alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1)

console.log(sala2)

//O método slice() retorna uma cópia de parte de uma array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O array original não é modificado.

//O méto push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array