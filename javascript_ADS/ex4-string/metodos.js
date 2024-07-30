var frase = "o seu nome é joão "
var quantia = frase.length

console.log(quantia)

var caps = frase.toLocaleUpperCase()
var caps_baixo = frase.toLocaleLowerCase()

console.log(caps)
console.log(caps_baixo)

var posição = frase.indexOf("joão")
console.log(posição)

var procura = frase.includes("joão")
console.log(procura)

var joao = frase.substring(13,)
console.log(joao)

var numeros = "1,2,3,4,5,6,7"
var arr = numeros.split(",")
console.log(arr)

var erro = "          espaços            "
var certo = erro.trim()
console.log(certo)

var tudo = frase.concat(joao)
console.log(tudo)