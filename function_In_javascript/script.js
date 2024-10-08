// FUNCTION IN JAVASCRIPT 
//Function declaration
//Function expression
//Arrow function 
//parameter and argument 
//Return statement 


//AnonymosFunction - is a function without a name, often used in callbacks 
//or immediately invoked function expressions (IIFEs).

//1. Assigning an Anonymous Function to a Variable
const greet = function() {
   console.log("Hello, World!");
 };
 
 greet(); // Output: "Hello, World!"

//2. Anonymous Function as a Callback
const numbers = [1, 2, 3];
const squares = numbers.map(function(num) {
  return num * num;
});

console.log(squares); // Output: [1, 4, 9]

// or instead like this 
const medics = ['paracitamol', 'panadol', 'ibupain']

const medicalitics = medics.map((caps)=>
caps.toUpperCase())



//3. Immediately Invoked Function Expression (IIFE)
(function() {
   console.log("This function runs immediately!");
 })();

//4. Anonymous Arrow Function
const add = (a, b) => a + b;

console.log(add(2, 3)); // Output: 5


//Callback function

//Higher Order Function - takes other function as argurment 
//or return function as output


//Closures - A closure is created when a function is defined
 //inside another function and accesses variables from its parent scope.
 function closureSamp(){

let sample = 'new people'

function innerFunc(){
   console.log(sample)
}

return innerFunc()


 }



//Function helps us to create code that can be used multiple times

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
 
 //THE RETURN KEYWORD -The return value is "returned" back to the "caller":
 
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
  