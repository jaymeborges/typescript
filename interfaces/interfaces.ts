interface Humano {
    nome: string
    idade?: number
    [prop: string]: any
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
     console.log('ola,' + pessoa.nome)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'Joao',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Ola, meu nome e'
           + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//saudarComOla({nome: 'Jonas', idade: 27, xyv: true })
pessoa.saudar('Skywalker')

// Usando Clases...
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string) {
        console.log('Ola, meu nome e'
           + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// interface Funacao
interface FuncaoCalculo {
    (a: number, b: number): number

}

let potencia

potencia = function(base: number, exp: number): number {
    // Math.pow(3, 10)
    // 3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a)

}

console.log(potencia(3,10))