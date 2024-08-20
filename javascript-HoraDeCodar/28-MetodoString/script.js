// ToUpperCase e ToLowerCase

var frase = "esta é uma frase que vai ficar em maiusculo"
 var fraseCaixAlta = frase.toLocaleUpperCase()

 console.log(fraseCaixAlta)

 console.log(fraseCaixAlta.toLocaleLowerCase())

// trim

var nome = "      joao       "
var nomeTrim = nome.trim()
console.log(nome)
console.log(nomeTrim)

// split

console.log(frase.split(" "))

var tags = "php, javascript, html, css"

console.log(tags.split(", "))

// lastIndexOf

var fraseDois = "eu quero a ultima palavra, apenas a ultima palavra"

console.log(fraseDois.indexOf("palavra"))

console.log(fraseDois.lastIndexOf("palavra"))