// // OPERATORS  
// ARITHMETHIC OPERATOR 

console.log(2+2); //Addition 
console.log(8-5); //Substraction
console.log(10 * 2); //Multiplication
console.log(10 / 2); //Divide
console.log(15 % 2);//reminder not divide
console.log(2 ** 3) //exponentiation
 
// increment operator (only works with let)
let people = 5
people++
console.log(people)

// decrement  operator(only works with let)
let student = 10
student--
console.log(student)


// CONCATINATION OPERATOR
console.log('Happy' + ' ' + 'People')
console.log('Game' + ' ' + 'Oclock' + ' ' + 10)

// ASSIGNMENT OPERATOR
let children = 10 // ordinary assignment operator
//compound assignment operator
children += 5
children *=5
children /=5
children -=5
children %= 5
console.log(children)

//COMPARISON OPERATOR - result usually a boolean
// ==
// !=
// >
// <
// >=
// <=
// ===
// !==

console.log(10 == 10)
console.log(10 === 5)
console.log(10 != 5)
console.log(10 > 5)
console.log(10 < 5 )
console.log(10 >= 11)
console.log(10 <= 10)


//LOGICAL OPERATOR  
// // OR OPERATOR(||)
// // Basics of OR OPERATOR
// alert( true || true ); // true
// alert( false || true ); // true
// alert( true || false ); // true
// alert( false || false ); // false

// AND OPERATOR(&&)
console.log(true && true) //true
console.log(true && false ) //false
console.log(false && true) //false
console.log(10 > 5 && 3)
console.log(true > false)
console.log(false > true)

//NOT (!)
console.log(!true )
console.log(!false)
 


//DAYS

// modulus - commonly used to check even number or not
//divider by right and dividen by left
const isEven =(num)=> {
    return num % 2 === 0;
}

console.log(isEven(10))
console.log(isEven(15))

//division - divider by right and dividen by left


//CONCATINATION OPERATOR
const name1 = 'abike'
const name2 = 'Ademide'

const fullname = name1 + ' ' + name2
console.log(fullname)


//ASSIGNMENT OPERATOR 

//basic assignment operator 
let card = 'credit-card'

//compound assignment operator - performs calculation on 
//variable with changing or extendiing it 

let newUsers = 10
newUsers += 5
newUsers *= 5
newUsers /= 5
newUsers %= 5

//advance compound assignmnet operator - 
//Using Functions to Update a Variable(alternatie creating a reusable code)

let score = 10;
const updateScore =(points)=>{
score += points;
}
updateScore(5);
console.log(score)
updateScore(10)
console.log(score)

//updating object property using 
//compound assignment operator (Assignment)

//Updating an Array Element Based on its Current Value

//Using Loops to Update a Variable


//DAYS (SEP 16)
// Exponetial arithmetic operator
let expo = 2 ** 4
// console.log(expo) // 16

// Negative Exponents - always have a fraction as a result
let expoNeg = 2 ** -4
// console.log(expoNeg) //

// Fractional Exponents - used to calculate roots 
let rootExpo = 9 ** 0.5

// Associativity - is right-associative, meaning
// expressions are evaluated from right to left.

let associativeExpo = 2 ** 3 ** 2
console.log(associativeExpo) //512


// Differences from Math.pow() - Alternative
let matpow = math.pow(3,4)
console.log(matpow) // 81



//DAYS
//DAYS
//DAYS
//DAYS
//DAYS
//DAYS