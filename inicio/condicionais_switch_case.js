//SWITCH et CASE
let permissao;
permissao = 'Chefe';

switch (permissao) {
    case 'comum':
        console.log('Voce esta logado com o usuario ' + permissao + '.');
        break;

    case 'Vendedor':
        console.log('Voce esta logado com o usuario ' + permissao + '.');
        break;

    case 'Gerente':
        console.log('Voce esta logado com o usuario ' + permissao + '.');
        break;

    case 'Chefe':
        console.log('Bom dia ' + permissao + ' Estamos contente em te ver :)');
        break;

    default:
        console.log('Voce nao tem permissao para acessar');
}






