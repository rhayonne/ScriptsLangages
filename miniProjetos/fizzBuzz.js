// Ler um numero 
//Se o numero for divisivel por 3 Fizz
//Se o numero for divisivel por 5 Buzz
//Se for divisivel por 3 e 5 FizzBuzz
//Se nao for divisivel => mostra numero
//Se nao for numero => Não é numero

let result = fizzBuzz('bra');
console.log(result);

function fizzBuzz(num) {
    if (num % 3 == 0) {
        return console.log('Fizz ');
    } else if (num % 5 == 0) {
        return console.log('Buzz ');
    } else if (num % 3 == 0 && num % 5 == 0) {
        return console.log('FizzBuzz ');
    } else if (typeof num !== 'number') { //verificando se a variavel é do tipo number
        return console.log('Não é um numero');
    } else {
        console.log(num);
    }
}




//Outra maneira de fazer
console.log('\n\n');
console.log(fizzBuzz);
for (num = 1; num <= 20; num++) {
    if (num % 3 == 0) {
        console.log('Fizz ');
    } else if (num % 5 == 0) {
        console.log('Buzz ');
    } else if (num % 3 == 0 && num % 5 == 0) {
        console.log('FizzBuzz ');
    } else if (typeof num !== 'number') { //verificando se a variavel é do tipo number
        console.log('Não é um numero');
    } else {
        console.log(num);
    }
}