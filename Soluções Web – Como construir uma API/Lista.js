let proprietario
let locador
locador = "João"
console.log(locador)

proprietario = locador

console.log(proprietario)

// alert(proprietario)

let nomeVisitante

function checaValor(valor) {
    let checa = true;
    if (valor > 99 && valor < 201)
        return checa
    else {
        checa = false
        return checa
    }
}

console.log(checaValor(80))


let input


function login (input) {
    if (input == "Admin")
        psw()
    else if (input == "" || event.keyCode == 27)
        alert("Cancelado!")
    else
        alert("Não conheço você!")
}

function psw () {
    
}