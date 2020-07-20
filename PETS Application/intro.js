/*var springColors = [ 'Amarelo','Vermelho','Verde','Azul','Amarelo' ]

var temperatures = [ 47.5, 63.7, 50.2, 40.5];

var pickles = {
    type:'cat',
    name: 'Pickles',
    weight: 7,
    likes: ["purring","ganching","chunning"]

};*/

 /*function Pet(type, name, weight, likes)
{
    this.type = type;
    this.name = name;
    this.weight = weight;
    this.likes = likes;
}*/

function Pessoa(nome, cor, profissao, morada)
{
    this.nome = nome;
    this.morada = morada;
    this.cor = cor;
    this.profissao = profissao;
}

function ToDo(task,who, dueDate,  done)
{
    this.task = task;
    this.who = who;
    this.dueDate = dueDate;
    this.done = done;
}

window.onload = init;

function init()
{
    /*console.log(springColors);
    console.log(temperatures);
    console.log(pickles);

var pickles = new Pet("cat","Pickles","7",["sleeping","eating","walking"]);
console.log (pickles);

picklesJSON = JSON.stringify(pickles);

//console.log(picklesJSON);

var salon = new Pet("dog","Salon","8",["running","eating","jumping"]);
console.log(salon);

salonJSON = JSON.stringify(salon);
//console.log(salonJSON);

var petsArray = [ pickles, salon ];

petsArrayJSON = JSON.stringify(petsArray);
console.log(petsArrayJSON);


otherPetsArray = JSON.parse(petsArrayJSON);
console.log(otherPetsArray);
*/

var jorgeMonenteiro = new Pessoa("Jorge","black","CCIE","São Paulo");

if(jorgeMonenteiro.nome == "Jorge")
{
    console.log("Esses são os dados do meu chara: ");
    console.log(jorgeMonenteiro);
}

else
{
  var jorge = JSON.stringify(jorgeMonenteiro);
  console.log(jorge)
}

var lavarDentes = new ToDo("Escovar os Dentes","Jorge Costa","07-07-2020",false);

console.log(lavarDentes);

//Comverter o objecto lavarDentes para o formato JSON (SERIALIZE)
var lavarDentesJSON = JSON.stringify(lavarDentes);

console.log(lavarDentesJSON);
  

}