function divisao(a,b){
    if(b,a === 0){
        throw Error(" não é possivel dividir com 0")
    }
    return a/b
}

try{
    const resultado = divisao(0,10)
    console.log("resultado " + resultado)
}catch(error){
    console.log("ocorreu uma exceção" + error.message)
}