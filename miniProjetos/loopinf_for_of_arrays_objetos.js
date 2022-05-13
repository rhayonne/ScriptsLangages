console.log('Inicio de apuração: ');

const objetos = ['Carro', 'Bicicleta', 'Moto', 'Onibus', 'Trem'];

let carro = {
    marca: 'Volks',
    cor: 'branco',
    ano: '2000',
    combustivel: 'Gasolina',
    fatura: undefined,
    obs: 'Documentação em dia!'

}
carro.fatura = true;
if (carro.fatura == true) {
    console.log('Carro esta com os documentos em dia');
} else {
    for (let procura in carro) {
        console.log(procura, carro[procura]);
    };
}
