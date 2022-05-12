//Tipos de Comparadores FALSY
//undefined
//null
//0
//False
//''
// NaN - not a number

//Quando usamos os comparadores de variaveis, o js vai verificar se a variavel pertence à algun dos comparadores FALSY, se não a variavel é true então, ela é retornada

function testaFalsy (arg) { //funcao para testar o Falsy
     return  false || arg;
}

console.log(testaFalsy('rhayonne'));

let corPerso = 'Vermelho';
let corPad = 'Azul';
let corPerfil = corPerso || corPad;
console.log(corPerfil); //ele vai exibir vermelho por que 1 das variaveis corresponde as exigencias, ela é verdadeira.
corPerso = '';
corPerfil = corPerso || corPad;
console.log(corPerfil); //Nesse caso ele vai exibir azul por que a primeira premissa é falsa mas a segunda é verdadeira e nao faz parte de FALSY