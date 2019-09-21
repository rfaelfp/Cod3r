const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(10))
console.log(escola.charCodeAt(3)) //tabela UNICODE
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log("Quero adicionar essa informação antes mas vem antes de ".concat(escola).concat("!"))
console.log("Quero adicionar essa informação antes mas vem antes de " + escola + "!")
console.log('3' + 2) //a string ganha!
console.log("Repeat ".repeat(12).concat(escola).concat(" ponto final"))
console.log(escola.replace(3, 'e'))

console.log("Ana,Maria,Carlos".split(','))