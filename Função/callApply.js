function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4999,
    desc: 0.15, 
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro = {
    preco: 49990,
    desc: 0.2
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// passagem de parâmetros no call e no apply

console.log(getPreco.call(carro, 0.17, '$')) // o primeiro é o contexto e os outros os parâmetros
console.log(getPreco.apply(carro, [0.17, '$'])) // o contexto fica fora do array e os parâmetros dentro do array