// A função arrow tem duas grandes características:
// A primeira é que é uma função mais enxuta se escreve menos como mesmo efeito.
// A segunda é ela vincula o this com a função não alterando o seu escopo dentro da sua aplicação. global, window - Contexto léxico.
// O this então pode variar dependendo de sua utilização.

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar //armazenou a função falar em uma variável
falar() // Conflito entre paradigmas: funcional e orientado objeto

const falarDePessoa = pessoa.falar.bind(pessoa) // método responsável por amarrar para assumir a execução quando for chamado.
falarDePessoa()