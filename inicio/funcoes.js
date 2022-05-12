//Funcao deve ter nome VERBO + Substantif
let corSite = "azul";
function resetacor(cor, tonalidade) {
    corSite = cor + ' ' + tonalidade;
};

// testando sem parametro
/* console.log(corSite);
resetacor();
console.log(corSite); */

console.log(corSite);
resetacor("vermelho"); //passando o parametro vermelho
console.log(corSite);

console.log(corSite);
resetacor("vermelho", "Claro"); //passando dois parametros
console.log(corSite);

// tipos Funcoes

//realiza uma tarefa e nao devolve nada

function dizerNome() {
    console.log('Rhayonne')
};
dizerNome();

//Funcao com retorno
function multiplicarPorDois(valor) {
    return valor * 2;
}

console.log(multiplicarPorDois(5));

let resultado = multiplicarPorDois(5); //recebe o valor da funcao

console.log(resultado);










