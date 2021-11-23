"use strict";
function saudarComOla(pessoa) {
    console.log('ola,' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'Joao',
    idade: 27,
    saudar(sobrenome) {
        console.log('Ola, meu nome e'
            + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Jonas', idade: 27, xyv: true })
pessoa.saudar('Skywalker');
// Usando Clases...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log('Ola, meu nome e'
            + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
