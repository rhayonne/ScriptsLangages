// Usado para repetir algo
// Tipos de looping
// -> for
// -> while
// -> Do..while
// -> for..in
// -> for..of


//for

for (let i = 1; i <= 10; i++) {

    //console.log('Primeiro for index ' + i);
    if (i % 2 !== 0) { //Usando modulos para achar numero impar
        //Analisa quantas vezes o numero 2 cabe em i e se depois dessa divisao, vai sobrar algo
        //se nao for igual à zero (resultado da divisao) o numero é impar
        console.log(i + ' é um nuemro impar');
    }
    else {
        console.log(i + ' é um numero par ');
    }
}
console.log('\n\n');
// Loop inverso
for (let i = 20; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log('Index em numeracao decrescente ' + i);
    } else if (i == 0) {
        console.log(i + ' é um numero neutro');
    }
    else {
        console.log(i + ' é impar em decrescente');
    }
}

// WHILE
//While vai verificar a condicao antes de executar
let i = 5;
while (i >= 1) {
    if (i % 2 !== 0) {
        console.log('Loop: em numeracao decrescente em impar ' + i);
    }
    i--;
}


// do...while
// vai executar uma vez para depois verificar a condicional
let n = 0;
do {
    console.log('digitando ' + n);
    n++;
} while (n <= 10);

console.log('\n');
console.log('\n');


// for..in
console.log('For usando um objeto');


const pessoa = {
    nome: 'Joao',
    idade: 20
};


for (let chave in pessoa) {
    console.log(chave, pessoa.nome); //acessando o objeto com poto
    console.log(chave, pessoa['idade']); //acessando um objeto com []
}


console.log('\n\nArray, indice em cores');

const cores = ['Vermelho', 'Azul', 'Verde'] //Array cores

for (let indice in cores) { // estancia o objeto (indice) à partir do array (cores)
    console.log(indice, cores[indice]); // Imprime os indices do array

}


//for..of // Essa forma é muito mais simples e mais usual no dia a dia
console.log('\n\nImprimindo array com for..of: ');
for (let cor of cores){ //instancia um objeto do tipo classe cores
    console.log(cor); //imprime objeto instanciado
}





