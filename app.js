
// SOME ADVANCE JAVASCRIPT THAT WILL BE USEFUL FOR INTERVIEWS 
// SCOPE IN JAVASCRIPT
// Global Scope
const nick ='tolu'

const nickOP = () =>{
console.log(nick)
}

nickOP()

// Function Scope / Local Scope 
const someFunction = () =>{
   const name = 'folusho'
   console.log(name)

}

 
someFunction()
// Block Scope 
{let block = 'BlockSample'
   console.log(block)
}

if (true){
   console.log('we thanks God')
}

for (let i = 0; i > 10; i++){
   console.log(i)
}

// while (){
   
// }

 

// //  THE CONTROL STATEMENT
 
//  const age = 11

//  if (age > 18) {
// console.log('You may enter');
//  }else if (age == 18){
//     console.log('You just turned 18')
//  }else {
//     console.log('Grow up!')
//  }


//  let light = 0

//  if (light === 14){
//    console.log('blue')
//    }else if (light > 14){
//    console.log('red')
//    }else{
//       console.log('switch off the light')
//    }

let food = 10


if (food > 12) {
   console.log(`bring ${food} food for people`)
}else {
   console.log('NO, FOOD HERE!')
}


// let workTime = prompt('what is the recommended work time', '');
 
// if (workTime === '8am') {
// alert('punctual')
// }else if(workTime === '8:30am'){
//    alert('not bad you are still welcome')
// }else{
//    alert('null')
// }

// TEST FOR SEMICOLON
// console.log('this will show an error')
// [1,2].forEach(alert)

// alert('this code will work now');
// [1,2].forEach(alert)


const age = 19;
const isCool = true;

//is cool and is above the age of 18

if(isCool && age > 18){
   console.log('you may enter!')
}else {
   console.log('you cannot enter')
}

//testing out operators 
// AND 

console.log(true && false)
console.log(false && true)
console.log(true && true)
// OR 
console.log(true || true )
console.log(true || false)
console.log(false || false)

// NOT
let a = true

console.log(!a)


// EQUALITY
console.log(true === true) 
console.log(true === false)
console.log(false === true)

// GREATER THAN/ LESS THAN
console.log(true > false) 
console.log(false > true)
console.log(true < false)

// FUNCTION IN JAVASCRIPT 

// FUNCTION DECLARATION (DEFINING FUNCTION)
function square(number){
   return number * number
 }

 //A FUNCTION CALL (calling/invoking/executing a function)

let result = square(5)
console.log(result)
console.log(square(10))

//example 1
 function folusho(love){
return love * love
 }

let lovely = folusho(10)
console.log(lovely)
console.log(folusho(20))

// example 2
function happiness(time){
   return time*time
   }

let giveStat = happiness(10)
console.log(giveStat)
console.log(happiness(20))


// //A function declration 
// function name(param){
//      //statements
//      //have access to 'this' keyword
// }

// // A function expression
// const name = function(params){
//    //statements
// }

//name()

// //An arrow function 
// const name = (params)=> {
//    //statement
// }

function sayHi(name) {
   console.log(`Hi, ${name}`)
}

sayHi('folusho')
sayHi('leke')
sayHi('janet')


//practice example
function kola(game){
   return game * game
}

let printKOla = kola(100)
console.log(printKOla)

function sayHello(name){
   console.log(`Hello ${name}`)
}

sayHello('janet')
sayHello('folusho')
sayHello('Leke')
 
let countries = ['Nigeria', 'ghana','bene republic']

const User = (destination)=> {
console.log(`Am traveling to ${destination}`)
}

User(countries)

//creating my own custom log using function
const folulog =(input)=> {
   console.log(`${input}`)
}

folulog(countries[0])

const Market =(up,down, end)=>{
   console.log(`What the market says, Up${up}  Down${down}  End${end}`)
   }
   Market(200, 100, 0)

//THE RETURN KEYWORD 

// Returns undefined

function kol(){
   return
}

let koll = kol()
console.log(koll)


function bool(){
   return true
   return false
}

let boolean = bool()
console.log(boolean)


function add(a, b){
   return a * b
}

const sum = add(100,10)
console.log(sum)


// SAMPLE OF FUNCTION TEST
const omojesu = (bible, prayer, fasting) =>{
console.log(`${bible}, ${prayer}, ${fasting }`)
}

function multiplyByTwo(vale){
   if(isNaN(vale)){
      return'Value must be a number'
   }

const resut = vale * 2
return resut 
}

console.log(multiplyByTwo('this is a string'))

function alajo(owomi){
   return owomi * 2
}

console.log(alajo(10))

//ARGURMENT AND PARAMETER
//Paramters - used when defining a func
//Arguments - passed when making a func call
const SayCome =(lastName,Myage = 0)=>{
   console.log(`Good, ${lastName}  ${Myage}`)
}

SayCome('Ogunjimi',)

//default parameter function 
const addOp =(z=10,y=20)=>{
   return z + y
}

// let zyOp = addOp(1,2)
let zyOp = addOp()
console.log(zyOp)
 



// ARROW FUNCTION 
const applyColor =()=> {
   parent.classList.add('background-color')
   }

   // callback function

   const transferOP =(applyColor)=> {
   }

// Extra arrow function 

// one line function, for shorter code with only one parameter
const circle = no => no * no

const ans = circle(10)

console.log(ans)

//SCOPE IN JAVASCRIPT 
// Global Scope

// const outer = () =>{
//    const  outerVar = 'Hello!'


// const inner = () => {
//    const innerVar = 'Hi';
//    console.log(outerVar,innerVar)
// }

// return inner;

//  }

// const innerFn = outer();

// innerFn();

const init = () => {
   const hobby ='Learning Javascript'


const displayHobby = () =>{
   console.log(hobby)
}


const ola = () =>{
const breakthrough = 'happiness'
console.log(breakthrough)
}


displayHobby()
 ola ()
 
}

// const myFunc = init()

// myFunc();

console.log(init())
// init()

const ignites = () =>{
   const op = 'job1'
   
   const jobstart = () => {
      console.log(op)
   }

jobstart()
}

// const readyJob = ignites()
// readyJob()

console.log(ignites()) 


const happy = () =>{
const party = 'time'


const timer = () =>{
   console.log(party)
}

timer()

}

happy()

//STRING IN FULL DETAILS 

const single = 'Hello'
const double = "Hello"

const summ = (a, b) => a * b;


const backticks = `${summ(2, 7)}`

console.log(single)
console.log(double)
console.log(backticks)

const greeter = "Hi, I\'m folusho, but people call me \"jimi\""
console.log(greeter)


// STRINGS METHODS IN JAVASCRIPT 


// .LENGTH PROPERTY
const namee = 'jimi is good programmer'
// console.log(namee[0])
console.log(namee.length)


//getting a specific letter of a string or the last one 
const  firstName = namee[0]
const lastName = namee[namee.length - 1]// using this saves us from counting 
console.log(firstName + lastName)

//CASE STRING METHOD
const mixedCaseString = 'Hello! How are you'

//converting it to lower case and upper case(host this in a variable )

const lowerCaseString = mixedCaseString.toLowerCase()
const upperCaseString = mixedCaseString.toUpperCase()
console.log(lowerCaseString)
console.log(upperCaseString)

//SEARCHING FOR A SUBSTRING STRING 

const hobbies = 'I love HTML, CSS and JavaScript, JavaScript.';

//indexof
const firstIndex = hobbies.indexOf('JavaScript',)
// console.log(index)

//lastIndexOf()
const lastIndex = hobbies.lastIndexOf('JavaScript',)
// console.log(firstIndex,lastIndex);

 //includes()
const includesJavaScript = hobbies.includes('react');

console.log(includesJavaScript)


//startsWith()
console.log(hobbies.startsWith(''))
console.log(hobbies.endsWith('t.'))

//endsWith()



// Returns the position of the first 
//occurrence of a substring.

// @param searchString — The substring to search 
//for in the string

// @param position — The index at which to 
//begin searching the String object. 
//If omitted, search starts at the beginning 
//of the string.



// GETTING FOR A SUBSTRING 
const exampleString = 'hotdog is a good food';

//slice()
const dog = exampleString.slice(3,6)
console.log(dog)

//split() a string
 const superSample = 'The quick brown fox jumps over the lazy dog'

 //split()
 const letters = superSample.split(' ')

 console.log(letters)


//reverse()

const superX = 'test';// tset

const reversedString = superX.split("").reverse().join("")
console.log(reversedString)


//repeat()

const dogSays = 'woof'

console.log(dogSays.repeat(5))

//trim()
const tooMuch = ' He has too much money '

const letstrimthis = tooMuch.trim()
console.log(letstrimthis)


// DAY 2 PRACTICE OF PREVIOUSE TOPICS 


// FUNCTION PRACTICE IN JAVASCRIPT

// 1. Calculate the Total Price of Items in a Shopping Cart
 const ecomerce = (priceOfProduct) => {
 let totalSum = 0

 for (let i = 0; i < priceOfProduct.length; i++)
      totalSum += priceOfProduct[i]

 return totalSum
 }

//shopping cart 
const shoppingCart = [10, 30, 20, 50, 60 ]
console.log('total product price is' + ecomerce(shoppingCart))




//2. Check if a String is a Palindrome

function isPalindrome(str){

   // removes all the non alphanumeric and converts to lowercase 
const cleanedStr = str.toLowerCase().replace(/[^a-z0-9)]/g, '');

//check if the cleaned string is the same as foward and backward

const reverseStr = cleanedStr.split('').reverse().join('')

return cleanedStr === reverseStr

}

console.log(isPalindrome('race car'))
 

// STINGS PRACTICE IN JAVASCRIPT 

// 1. Write a function that takes a user's
//  first name and last name as input and returns
//   a greeting message using template literals (backticks).

const greetUser=(firtsname,lastname)=>{
console.log(`Good morning Mr ${firtsname}, ${lastname}`)
}

console.log(greetUser('Emmanuel', 'ogunjimi'))


//2. Write a function that takes a string as
//  input and returns the number of characters 
//  in that string.

const stringOp=(str)=>{

let charCount = ''
charCount = str
const kipo = charCount.length

return kipo
}


console.log(stringOp('welcome home '))


 

// 3.Write a function that checks if a specific 
// word appears at least twice in a given string 
// using indexOf() and lastIndexOf(). The function
//  should return true if the word appears more than once,
//   otherwise false.

const wordsTime =()=>{
   
}



// 4. Write a function that takes a string as input and
//  returns an object with two properties: the string
//   in uppercase and the string in lowercase.

// 5.Write a function that extracts a substring from a given
//  string using slice(), trims any leading or trailing whitespace
//   using trim(), and checks if the substring starts with a specific
//    character using startsWith() and ends with another character using endsWith().


// REVIEW OF STRING 
const guestList = 'Our guests are: emma, jacob, isabella, ethan';
 
//1. Get a length of the string. Store it in a variable called length.
const lenght =  guestList.length
console.log(lenght)

//2.Uppercase the entire string.
//Store the result in variable called uppercaseGuestList. 

const uppercaseGuestList = guestList.toUpperCase()
console.log(uppercaseGuestList)


// 3.Check wether 'ETHAN' is on the uppercaseGuestList.
// Store the answer in a variable called isEthaOnnTheList.
// The data type of the variable must be a boolean.
const isEthaOnnTheList = uppercaseGuestList.includes('ETHAN');
console.log(isEthaOnnTheList); // true


//4. Create a substring that only contains the following:
//'EMMA, JACOB, ISABELLA, EHTAN'.
//Store the answer in a variable called substringGuests.
const substringGuests = uppercaseGuestList.slice(16)
console.log(substringGuests);

5. //Out of the substring you just created,
//create an array of names of people that are on the list 
//Store that array in a variable called guests.
const guests = substringGuests.split(",")
console.log(guests)



// ARRAY IN JAVASCRIPT // SAMPLE
function suma(arr) {
   let sum = 0

   for (let i = 0; i < arr.length; i++)
      sum += arr[i];

   return sum
}

let arr = [12, 3, 4, 15]
console.log('sum of given array is' + suma(arr))