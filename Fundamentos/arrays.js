const valores = [7.7, 4.2, 3.4, 5.4]
console.log(valores [0], valores [3])
console.log(valores [4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())//retira o ultimo valor do array
delete valores[0]//retira o valor do indice indicado
console.log(valores)

console.log(typeof valores)