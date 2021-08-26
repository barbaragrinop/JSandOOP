console.log(`Trabalhando com condicionais`);

const estados = new Array(
    'salvador', 
    'sao paulo',
    'rio de janeiro'
);
const idadeComprador = 21;

if(idadeComprador >= 18){
    console.log("compradorMaior de idade")
    estados.splice(2, 1);
    console.log(estados)
} else{
    console.log("Não pode vender");
}


