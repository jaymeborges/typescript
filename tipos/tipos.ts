// string
let nome = 'Joao'
console.log(nome)

//numbers
let idade = 27
//idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies = false
//possuiHobbies = 1
console.log(possuiHobbies)

// tipos exlicitos
let minhaidade
minhaidade = 27
console.log(typeof minhaidade)
//minhaidade = 'idade e 27'
console.log(typeof minhaidade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]

console.log(hobbies)

// tuplas
let endereco: [string, number] = ["Av Principal",99]

endereco = ["Rua Importante", 1260]
console.log(endereco)

// enums
enum Cor {
    Cinza, //0
    Verde = 100, //100
    Azul = 2 //2
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)

// any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)