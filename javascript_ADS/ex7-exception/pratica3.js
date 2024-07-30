function processoNome(nome,callback){
    if(typeof nome !== "string"){
        callback(new Error("O nome deve ser uma string"))
        return
    }
    
    if(nome.length === 0){
        callback(new Error("O nome não pode estar vazio"))
        return
    }
    callback(null,"Nome processaso com sucesso")
}

processoNome("marcelo", (error,result) => {
    if(error){
        console.log("occoreu um erro ", error.messagem)
    }else{
        console.log("rsult")
    }
})