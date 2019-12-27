let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // dentro do contexto léxico do node é armazenado por módulos por isso não é armazenado no global. Essa situação ocorre quando utilizado o arrow
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // nesse cenário a função arrow é mais forte que o bind
comparaComThisArrow(module.exports)
