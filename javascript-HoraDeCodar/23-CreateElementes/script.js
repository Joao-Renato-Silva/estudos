var lista = ["maça", "peira", "mamão", "melão", "uva", "macarrão"]

var listaUl = document.createElement("ul")

var body = document.getElementsByTagName("body")

body[0].appendChild(listaUl)

var listaNoBody = document.getElementsByTagName("ul")

for (var i = 0; i < lista.length; i++){
    var listaLi = document.createElement("li")

    var textoLi = document.createTextNode(lista[i])

    listaLi.appendChild(textoLi)
    listaNoBody[0].appendChild(listaLi)
}