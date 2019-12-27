// Função em JS first-class Object (citizens)
// Higher-order function   

//criar de forma literal
function fun1() { }

//armazenar uma variável - função anônima
const fun2 = function () { }

//armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2] //permite armazenar dentro do array uma função literal ou função de variável (fun1, fun2)
console.log(array[0] (2, 3))

//pode armazenar função em atributos de objetos 
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como parâmetro para outra função
function run(fun) {
    fun()    
} 

run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)