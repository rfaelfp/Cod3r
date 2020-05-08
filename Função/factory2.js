function criarProduto (nome, preco) {
    return {
        nome, 
        preco, 
        desconto: 0.1
    }
}


console.log(criarProduto('Notebook', 14588))
console.log(criarProduto('iPad', 2599.44))