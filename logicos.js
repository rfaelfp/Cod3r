function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //operador lógico ou
    const comprarTv50  = trabalho1 && trabalho2 //operador lógico and
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor - operador exclusivo é verdadeiro quando for diferente - duas negações lógicas para converter para boolean
    const comprarTv32 = trabalho1 != trabalho2 // a diferença também simula um ou excluisivo (xor)
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //aqui pe a criação do objeto sem a necessidade de chave valor ex.: comprarSorvete: comprarSorvete, se não declarar a chave o ECMAScript cria a chave com o mesmo nome da constante/variável.
    
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))