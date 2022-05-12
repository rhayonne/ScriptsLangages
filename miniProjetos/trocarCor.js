let a = 'vermelho';
let b = 'azul';


console.log('Valor a: ' + a + ' | ' + 'Valor de b: ' + b);
function trocCor(a, b) {
    let aux = a;
    a = b;
    b = aux;
    return console.log('Novo valor de a: ' + a +' |' + ' Novo valor de b: ' + b);
}

console.log(trocCor(a,b));