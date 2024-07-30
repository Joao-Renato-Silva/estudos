class funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome
        this.idade = idade
        this.cargo = cargo
    }

    seApresentar(){
    }

    trabalhar(){
    }
}
class gerente extends funcionario{
    constructor(nome, idade, cargo, departamento){
        super(nome,idade,cargo)
        this.departamento = departamento
    }

    gerenciar(){
        const nome = this.nome
        console.log( nome + " Você é o gerente do departamento de " + this.departamento)
    }
}
class desenvolvedor extends funcionario{
    constructor(nome, idade, cargo,linguagem){
        super(nome,idade,cargo)
        this.linguagem = linguagem
    }
    
    programar(){
        const nome = this.nome
        const programador = this.linguagem 
        if(programador != "JavaScript"){
            console.log("Você é um desenvolvedor Back-End")
        }else{
            console.log(nome +" Você é um programador Web/Front-End")
        }
    }
}

claudio = new gerente("claudio", 43, "gerente", "TI")
console.log(claudio)
claudio.gerenciar()

joão = new desenvolvedor("joão", 21, "desenvolveor", "JavaScript")
console.log(joão)
joão.programar()

