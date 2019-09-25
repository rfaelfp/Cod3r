//par nome/valor
const saudacao = 'Opa!' //Contexto léxico 1

function exec () {
    const saudacao = 'Fala ai!' //Contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Rafael',
    idade: 28,
    peso: 80,
    endereco: {
        logradouro: 'Rua Equador',
        numero: 140,
        bairro: 'São Pedro'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)