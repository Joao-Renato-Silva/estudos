const numeros = [1,2,3,4,5,]

try{
    const doubleNumbers = numeros.map((num) =>{
        if(typeof num !== "number"){
            throw new Error("só pode usar numeros")
        }
        return num * 2
    })

    console.log(doubleNumbers)

}catch(erro){
    console.log('ocorreu uma execeção: ' + error.message)
}
