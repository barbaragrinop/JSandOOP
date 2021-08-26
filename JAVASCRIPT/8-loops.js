console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
    'salvador', 
    'sao paulo',
    'rio de janeiro'
);

const idadeComprador = 18;
const estaAcompanhado = false;
let passagemComprada = true;
const destino = 'rio de janeiro';

console.log(`Destinos possíveis: ${listaDeDestinos}`);

const podeComprar = idadeComprador >=18 && estaAcompanhado == true;
let contador = 0;
let destinoExiste = false;
while(contador < 3)
{
    if( listaDeDestinos[contador] == destino) {
        console.log(`existe`);
        destinoExiste = true;
        break;
    } 
    contador += 1;
}

console.log("Destino existe? ", destinoExiste);

if(podeComprar && destinoExiste)
{
    console.log('Não foi')
}
else{
    console.log("Desculpe temos um erro")
}



for(let i = 0; i <= listaDeDestinos.length; i ++)
{
    listaDeDestinos.length;
    if( listaDeDestinos[i] == destino) {
        destinoExiste = true;
    } 
}







