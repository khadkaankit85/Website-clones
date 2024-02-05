const divide= document.querySelector(".divide")
const multiply=document.querySelector(".multiply")
const subtract=document.querySelector(".minus")
const add=document.querySelector(".plus")
const equals=document.querySelector(".equals")
const clear=document.querySelector(".clear")
const negate=document.querySelector(".negate")
const percentage=document.querySelector(".percentage")

let string=" "

let display=document.querySelector(".display")
// display.innerHTML=;

const allButtons= document.querySelectorAll('.button')


const buttonArray=Array.from(allButtons)
buttonArray.forEach(element => {
    element.addEventListener(('click'),()=>{
       if(element==divide){
        // display.append('/')
        calculate
        
        console.log("You clicked divide button")
       }
       
       else if (element==multiply){
        display.append('*')
        console.log("You clicked multiply button")
       }

       else if (element==subtract){
        display.append('-')
        console.log("You clicked subtract button")
       }
       else if (element==add){
        display.append('+')
        console.log("You clicked add button")
       }
       else if (element==equals){
        
        console.log("You clicked equals button")
       }
       else if (element==percentage){
        display.append('%')
        console.log("You clicked percentage button")
       }
       else if (element==negate){
        if(display>0){
        display.prepend('-')}
        console.log("You clicked negate button")
       }
       else if (element==clear){
        display.clear()
        console.log("You clicked clear button")
       }
       else if (element==document.querySelector(".nine")){
        console.log("You clicked nine button")
        display.append('9')
       }
       else if (element==document.querySelector(".eight")){
        console.log("You clicked eight button")
        display.append('8')
       }
       else if (element==document.querySelector(".seven")){
        console.log("You clicked seven button")
        display.append('7')
       }
       else if (element==document.querySelector(".six")){
        console.log("You clicked six button")
        display.append('6')
       }
       else if (element==document.querySelector(".five")){
        console.log("You clicked five button")
        display.append('5')
       }
       else if (element==document.querySelector(".four")){
        console.log("You clicked four button")
        display.append('4')
       }
       else if (element==document.querySelector(".three")){
        console.log("You clicked three button")
        display.append('3')
       }
       else if (element==document.querySelector(".two")){
        console.log("You clicked two button")
        display.append('2')
       }
       else if (element==document.querySelector(".one")){
        console.log("You clicked one button")
        display.append('1')
       }
       else if (element==document.querySelector(".zero")){
        console.log("You clicked zero button")
        display.append('0')
       }
       else if (element==document.querySelector(".point")){
        console.log("You clicked point button")
        display.append('.')
       }
       
    })
})

function calculate(a,b,operator){
    if (operator=='+'){
        display=a+b
    }
    if (operator=='*'){
        display=a*b
    }
    if (operator=='-'){
        display=a-b
    }
    if (operator=='='){
        let string=display.eval()
        display=string
    }
    if (operator=='/'){
        display=a/b
    }
    if (operator=='%'){
        display= a*b/100
    }
    if (operator=='C'){
        display.clear()
    }
}
// console.log(display)let display = document.querySelector(".display");
