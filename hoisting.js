console.log('a = ', a)
var a = 2
console.log('a = ', a)

function teste() {
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)
}
teste()

//o içamento só funciona com o var não funcionando com let

console.log('b = ', b)
let b = 2
console.log('b = ', b)