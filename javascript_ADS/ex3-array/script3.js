//array
var b = 10;
var c = 2
var arr = ['carro', 42, 'moto',32, b >= c]
console.log(typeof(arr))
console.log(arr[0])
console.log(typeof(arr[0]))

var arr1 = [-1,1-20,20,-40,10]

//organiza o array
arr1.sort()
console.log(arr1)

//adiciona algo no final do array
arr1.push("rosa")
console.log(arr1)

//tira a ultima coisa do array
arr1.pop()
console.log(arr1)

//adiciona algo no incio do array
arr1.unshift("preto")
console.log(arr1)

//tira a primeira coisa do array
arr1.shift()
console.log(arr1)

//inverte a ordem o array
arr1.reverse()
console.log(arr1)

//tira uma quantia de itens o primeiro numero é qual começa o segundo numero ate onde vai tirar
arr1.splice(1, 1)
console.log(arr1)

//tira uma quantia de itens o primeiro numero é qual começa o segundo numero ate onde vai tirar e o terceiro vai escrever tudo que tiver na continuidade 
arr1.splice(1, 1, 4,6,5)
console.log(arr1)

//splice porem criando novo array
let numero = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,0,1,2,3,4,5,6,7,8,9,10]
console.log(primeiro)
console.log(numero)
let numeros_negativos= numero.splice(0, 11)
console.log(numero)
console.log(numeros_negativos)

//junta duas variaves virando um array
let titulo = "dr."
let nome = "joão"
let nome_titulo = titulo.concat(nome)
console.log(nome_titulo)


//atividade
let meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setemro","outubro","novembro","dezembro"]
let primeiro_trimestre = meses.slice(0,3)
let segundo_trimestre = meses.slice(3,6)
let terceiro_trimestre = meses.slice(6,9)
let quarto_trimestre = meses.slice(9,12)
console.log(meses)
console.log(primeiro_trimestre)
console.log(segundo_trimestre)
console.log(terceiro_trimestre)
console.log(quarto_trimestre)

//filtrando numeros
var numeros = [1,2,3,4,5,6,7,8,9,10]
var numeros_pares = numeros.filter(x => x % 2 === 0)
console.log(numeros_pares)
var numeros_impares = numeros.filter(y => y % 2 != 0)
console.log(numeros_impares)

var numero_filtrados = numero.filter(
    function(valor){
        return valor <= 5
    }
)
console.log(numero_filtrados)

    function numeros_maiores(valor){
    return valor > 5
}

var grandes = numeros.filter(numeros_maiores)
console.log(grandes)

//atividade
var funcionarios =[
    {nome: "joão", idade: 23},
    {nome: "mauro", idade: 55},
    {nome: "carlos", idade: 20},
    {nome: "joni", idade: 40},
    {nome: "paulo", idade: 66},
]

var corte_idade = funcionarios.filter(
    function(valor){
        console.log(valor.idade >= 30, valor.nome)
    }
)

var produtos = [
    {id: 1, descrição: "celular", categoria: 1},
    {id: 2, descrição: "geladeira", categoria: 2},
    {id: 3, descrição: "nootbook", categoria: 1},
    {id: 4, descrição: "sofa", categoria: 3},
    {id: 5, descrição: "cadeira;", categoria: 3},
    {id: 6, descrição: "cpu", categoria: 1},
    {id: 7, descrição: "ventilador", categoria: 2},
    {id: 8, descrição: "mouse", categoria: 1},
    {id: 9, descrição: "microondas", categoria: 2}
]
 
var eletronicos = produtos.filter(
    function(valor){
        console.log(valor.categoria == 1, valor.id)
    }
)