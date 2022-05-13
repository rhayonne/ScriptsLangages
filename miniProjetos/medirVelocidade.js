//Velocidade max até 70km
// a cada mais de 5km do limite aumenta 1 ponto 
// Usar a funcao math.floor para arredontar o resultado
// caso pontos forem maiores que 12 => Carteira Suspensa

verificarVelocidade(150)

function verificarVelocidade(velocidade) {
    const  velMax = 70;
    const pontVel = 5;
    const pontMax = 12;
    if (velocidade <= velMax) {
        return console.log('Você esta dentro da velocidade permitida: ' + velocidade + 'Km/h');
    } else {
        const pontos = Math.floor(((velocidade - velMax) / pontVel));
        if (pontos >= pontMax) {
            return console.log('Carteira esta suspensa com ' + pontos + ' pontos' );
        } else{
            const restante = pontMax - pontos
            console.log(`Você tem ${pontos} pontos na carteira, restam: ${restante} pontos para que sua carteira seja suspensa.`);
        }
    }
}