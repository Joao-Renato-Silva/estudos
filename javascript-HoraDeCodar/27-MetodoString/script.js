// length
var nome = "matheus"
console.log(nome.length)//mostra a quanta e letras que ten ba string

var obj = "bola"
console.log(obj.length)

// indexOF

console.log(nome[2])//qual letra esta no numero 2

var frase = "o rato roeu a roupa do rei de roma"
console.log(frase.indexOf("rato"))// mostra onde começa a palavra

// slice

var roeu = frase.slice(2, 6)// corta de onde quer começar ate onde quer terminar
console.log(roeu)

// replace

var novaFrase = frase.replace("roeu", "comeu")// muda uma palavra pela outra na string
console.log(novaFrase)
