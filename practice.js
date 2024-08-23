
//SHORT PRACTICE

//closure
const foluke =()=>{
    const koko = 'job'
    
    const folake =()=>{
    console.log(koko)
    }
    
    
    
    return folake()
     
    }
    
     foluke()
    
     
     //strings 
     const intro = `Lets See The Calculation`
    
     console.log(intro)
     
    // strings method
    console.log(intro.length)
    
     const firstlet = intro[1]
     console.log(firstlet)
    
     console.log(intro.length - 1)
    
    
     //case method 
     console.log(intro.toUpperCase())
     console.log(intro.toLocaleLowerCase())
    
     //indexof()
    
    let meee = intro.indexOf('See')
    
    console.log(meee)
    
    //includes
    
     const check = intro.includes('See')
     console.log(check)
    
     // starts and end
     const etstart = intro.startsWith('Lets')
     console.log(etstart)
    
    //Hoisting
    
    //funtions 
     function help (people){
       return people * people 
     }
    
     console.log(help(100))
    
    
     const word =(oro)=>{
    console.log(`ki lo fe so, ${oro * 2}`)
     }
    
     word(100)
    
    
     const aye =(a,b,c)=> {
       return  b * c + a
     }
    
    const open = aye(2,4,5)
    console.log(open)
    
    const funny =()=>{
    
    let emma = 100 
    
    if (emma > 1000){
       console.log('Good Job')
    }else{
       console.log('Long Way to go')
    } 
    
    return emma
    }
    
    funny()  



// JAVASCRIPT BASIC OPERATORS 
console.log(2+2)
console.log(true && true)
console.log(10 === 10)

let agee = 10

agee *= 5
agee -= 5
agee += 5
agee /= 5
console.log(agee)



 

