console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = false;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada){
  console.log("Boa Viagem!!");
  listaDeDestinos.splice(1,1);//removendo item
}else{
  console.log("Não é maior de idade e não posso vender");
}  

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
  console.log("Boa Viagem!!");
}else if(idadeComprador < 18 && temPassagemComprada){
  if(estaAcompanhada){
    console.log("Boa Viagem!!");
  }else{
    console.log("Você não pode embarcar");
  }
}else{
  console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);