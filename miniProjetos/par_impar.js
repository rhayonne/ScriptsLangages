//Receber um valor e verificar até ele, qual numero é par ou impar

verParImpar(150)

function verParImpar(vlr) {
    for (let i = 0; i <= vlr; i++){
        if (i % 2 === 0){
            console.log(`O numero ${i} é par`);
        } else{
            console.log(`O numero ${i} Impar `);
        }
    }
    
}