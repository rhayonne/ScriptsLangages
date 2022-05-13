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








