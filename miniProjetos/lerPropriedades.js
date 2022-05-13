// Criar um metodo para ler propriedades de um objeto e
// exoibir somente as proprieadades do tipo string que estao nesse objeto


const carro = {
    Marca: 'Chevrolet',
    Cor: 'Branco',
    Ano: '2000',
    Combustivel: 'Gasolina',
    
}

const film = {
    Titulo : 'O vento levou',
    Ano: '1980',
    Genero: 'Drama'
}

const escolha = film; // cira variavel que recebe o obj para ser utilizado dentro da funcao

function imprimeCar(obj) {
    for (let obj in escolha) {
        console.log(obj, escolha[obj]); //imprime o objeto chamando o tipo e proprio objeto
    }

}
console.log(imprimeCar()); 
