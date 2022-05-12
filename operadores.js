// operadores Aritimeticos(Matematicos)
// +, -, *, /, **
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario)

// Operadores de Inclemento
// ++, --
let idade = 18;
console.log(++idade); //vai inclementar antes
console.log(idade++); // incrementa depois
console.log(idade);
console.log(idade--);
console.log(idade);
console.log(--idade);

// Operadores Atribuiçao
let valorTeclado = 100;
console.log(valorTeclado);

valorTeclado += valorTeclado; // valorteclado + valorteclado
console.log(valorTeclado);
valorTeclado - valorTeclado; // valorteclado - valorteclado


//Operadores Comparacao
// igualdade estrita
console.log(1 === 1); // compara os valores e o tipo
console.log('1' === 1); //comparacao string e inteiro (usar sempre que possivel dessa forma com 3 iguais)

//Igualdade solta/Libre
console.log(1 == 1); //compara o valor mais nao o tipo
console.log('1' === 1); //compara o valor mas nao o tipo

//Operador Ternario
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'Comum'; //e maior que 100 PREMIUM se nao, COMUM
console.log;

// Operadores Logicos
//logico E (&&)
console.log(true && true);
console.log(true && false);
let maioIdade = true;
let possueTrabalho = false;
let podeAplicar = maioIdade && possueTrabalho;
console.log(' Pode aplicar? ' + podeAplicar);

//operador logico OU (||)

let maioIdade2 = false;
let possueTrabalho2 = false;
let podeAplicar2 = maioIdade2 || possueTrabalho2;
console.log(' Pode aplicar usando OU (||)? ' + podeAplicar);

// Operador NOT (!)
let candidatoRec = !podeAplicar;
console.log('Candidato pode aplicar com NOT (!)' + candidatoRec);

// Operadores Bitwise




