class Player{
    
    constructor(name,age,heigth,weigth){
        this.name = name
        this.age = age
        this.heigth = heigth
        this.weigth = weigth
    }

    getAge(){
        console.log(`${this.name} is age ${this.age}`)
    }

    getHeight(){
        console.log(`${this.name} is ${this.heigth}cm`)
    }
    
    getWeight(){
        console.log(`${this.name} weighs ${this.weigth}kg`)
    }
}

let p1 = new Player("joão", 25, 190, 30)
p1.getAge() 
p1.getHeight() 
p1.getWeight() 
console.log(p1)

let p2 = new Player("bruno", 42, 175, 90)
p1.getAge() 
p1.getHeight() 
p1.getWeight() 
console.log(p2)

class Calculator {
	// Write functions to add(), subtract(), multiply() and divide()
	add(num1, num2){
		return num1+num2
	}
	subtract(num1, num2){
		return num1-num2
	}
	multiply(num1, num2){
        return num1*num2
    }
	divide(num1, num2){
		return num1/num2
	}

}
