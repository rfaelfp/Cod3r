const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem usar o callback
const notasBaixas1  = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// usando callback
const notasBaixas2 = notas.filter(function (nota) {  //filtra os elementos de um array em cima de um determinado critério que vai ser uma função callback que vai retornar true ou false. Para cada elemento se chama essa função se for true aquele elemento deve ser adicionado no array que está sendo gerado.
    return nota < 7                           //não altera o array original ele permence exatamente como ele é
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

