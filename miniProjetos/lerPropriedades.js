// Criar um metodo para ler propriedades de um objeto e
// exoibir somente as proprieadades do tipo string que estao nesse objeto


const carro = {
    Marca: 'Chevrolet',
    Cor: 'Branco',
    Ano: 2000,
    Combustivel: 'Gasolina',

}

const film = {
    Titulo: 'O vento levou',
    Ano: 1980,
    Genero: 'Drama'
}

const escolha = film; // cira variavel que recebe o obj para ser utilizado dentro da funcao

console.log(imprimeCar(escolha));

function imprimeCar(obj) {
    for(prop in obj){
        if (typeof obj[prop] === 'string') {
            console.log(prop, obj[prop]);
        }
    }
}


