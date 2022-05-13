//Escrever uma funcao que usa 2 numeros e retorna o maior entre eles

let numA ;
let numB ;

function LerNumeros(numA, numB) {
    if (numA > numB) {
        return console.log('Primeiro numero ' + numA + ' é maior que segundo numero ' + numB + '.');
    } else if (numA == numB) {
        return console.log('Primeiro numero ' + numA + ' é igual ao segundo numero ' + numB + '.');
    } else if (numA < numB) {
        return console.log('Primeiro numero ' + numA + ' é menor que segundo numero ' + numB + '.');
     }else{
         console.log('Nao foi possivel verificar os numeros: ' + numA + ' e '+ numB);
     }

}

console.log(LerNumeros('a',-2));
console.log('\n\n');
console.log('Verificando o maior numero: ');
let maxNum = maiorNum(52,20);
console.log(maxNum);
function maiorNum(numA, numB){
    if(numA > numB){
        return numA;
    }else{
        return numB;
    }
}

function maxNumTernaria(numA, numB) { //exemplo ternario
    return numA>numB ? numA: numB;    
}
console.log(maxNumTernaria(6,3));