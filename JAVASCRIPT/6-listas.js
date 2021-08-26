console.log(`Trabalhando com listas`);

const estados = new Array(
    'salvador', 
    'sao paulo',
    'rio de janeiro'
);

estados.push('curitiba'); //adicionando

console.log(estados);

estados.splice(2,0); // tirando

console.log(estados);

console.log(estados[0])

