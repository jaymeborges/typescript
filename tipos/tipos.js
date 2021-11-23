"use strict";
// string
let nome = 'Joao';
console.log(nome);
//numbers
let idade = 27;
//idade = 'Ana'
idade = 27.5;
console.log(idade);
// boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
// tipos exlicitos
let minhaidade;
minhaidade = 27;
console.log(typeof minhaidade);
//minhaidade = 'idade e 27'
console.log(typeof minhaidade);
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99];
endereco = ["Rua Importante", 1260];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul"; //2
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
