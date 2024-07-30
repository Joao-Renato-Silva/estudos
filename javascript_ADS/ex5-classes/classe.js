class carro{
    
    constructor (modelo, ano){
        this.modelo = modelo
        this.ano = ano
    }

    falar(){
        console.log("este é o modelo " + this.modelo + " lançado no ano de " + this.ano)
    }

}


c1 = new carro("fiesta", "2000")
c1.falar()

c2 = new carro("c4", "2018")
c2.falar()

class pessoa{
    constructor(nome, serie){
        this.nome = nome
        this.serie = serie
    }
    fala(){
        console.log("Seja bem vindo " + this.nome + " agora você esta na " + this.serie + " serie")
    }
}

aluno1 = new pessoa("joão","5")
aluno1.fala()

aluno2 = new pessoa("ana","6")
aluno2.fala()
