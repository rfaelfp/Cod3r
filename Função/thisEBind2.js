 function Pessoa() {
    this.idade = 0

    const self = this // tecnica para driblar o NaN
    setInterval(function() { // dispara outra função a partir de um intervalo que passar 
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // o 1000 representa milisegundos, ou seja a cada 1000 milisegundos a função será disparada
                            // tem que utilizar o bind para referenciar o this e a função setInterval utilizar a variável idade
 }

 new Pessoa