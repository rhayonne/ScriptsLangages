//Criar uma funcao que retorna a soma de todos os multiplos de 3 e 5
//dentro de um limite



somar(10)
function somar(limite) {
    let mult3 = 0; let mul5 = 0; let soma = 0;
    for (i = 0; i <= limite; i++) { //for do numero limite
        if (i % 3 === 0) {
            mult3 += i;
        } else if (i % 5 === 0) {
            mul5 += i;
        }
    }
    soma = mul5 + mult3; //colocar sempre fora do looping
    return console.log(soma);
} 