let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // função arrow sempe é uma função anônima
    return 2 * a
}

dobro = a => 2 * a // pode tirar o parênteses quando tem somente um parâmetro. Quando vc tira chave da função você tem um return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // as duas formas são corretas para escrever uma função arrow no segundo caso tem parâmetro mas o javascript permite não preenche-lo.
console.log(ola())

