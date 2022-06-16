console.log(`Trabalhando com listas`);
//ctrl + k + c comenta linhas selecionadas ctrl + k + u tira
// CONST SALVADOR = `SALVADOR`;
// CONST SAOPAULO = `SÃO PAULO`;
// CONST RIODEJANEIRO = `RIO DE JANEIRO`;

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Curitiba`);//adicionando item na lista
console.log("Destinos possíveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);