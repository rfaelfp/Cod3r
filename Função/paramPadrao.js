// Estrategia 1 para gerar valor padrão 

function soma1(a, b, c) {
    a = a || 1 // a recebe a ou o valor 1
    b = b || 1 // b recebe b ou o valor 1
    c = c || 1 // c recebe c ou o valor 1
    return a + b + c 
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(1 , 2, 3))
console.log(soma1(0, 0, 0)) // o problema nessa estrategia é que o 0 recebe o valor falso. 

// estrategia 2, 3 e 4 para gera valor padão
function soma2 (a, b, c) {
    a = a !== undefined ? a : 1 // Operador ternário - atalho para a instrunção if
    b = 1 in arguments ? b : 1 // in argumets = dentro de b (indice 1) existe valor? se não pege 1 como o valor
    c = isNaN(c) ? 1 : c // testa se a variável passada não é um numero se não for um numero retonar o valor padrão se for um numero retona a entrada
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0,))

// valor padrão do ES2015

function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(1, 2, 3))
console.log(soma3(0, 0, 0))