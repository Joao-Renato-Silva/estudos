var arr = [1,2,2,5,5,12,3,8,9,10]

/*for(i = 0 ;i < arr.length; i++){
    console.log(`a numero ${i} tem o valor de ${arr[i]}`)
}
*/

for(let i in arr){
    console.log(`a numero ${i} tem o valor de ${arr[i]}`)
}

let i = arr.indexOf(12)
console.log(i)