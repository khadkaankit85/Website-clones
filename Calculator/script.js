const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const subtract = document.querySelector(".minus");
const add = document.querySelector(".plus");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const negate = document.querySelector(".negate");
const percentage = document.querySelector(".percentage");

let string = [];
let display = document.querySelector(".display");

const allButtons = document.querySelectorAll('.button');
const buttonArray = Array.from(allButtons);

buttonArray.forEach(element => {
    element.addEventListener(('click'), () => {

        if (element == divide) {
            string.push('/');
            console.log("You clicked divide button");
        } else if (element == multiply) {
            string.push('*');
            console.log("You clicked multiply button");
        } else if (element == subtract) {
            string.push('-');
            console.log("You clicked subtract button");
        } else if (element == add) {
            string.push("+");
            console.log("You clicked add button");
        } else if (element == equals) {
            console.log(string);
            try {
                let result = eval(string.join(""));
                console.log(result);
                if (isNaN(result)) {
                    display.innerHTML = ':(';
                } else {
                    display.innerHTML = result;
                    string = [result];
                }
                console.log("You clicked equals button");
            } catch (e) {
                console.log('error');
                display.innerHTML = ':(';
            }
        } else if (element == percentage) {
            string.push('*0.01');
            console.log("You clicked percentage button");
        } else if (element == negate) {
            let currentDisplay = parseFloat(display.innerHTML);
            if (!isNaN(currentDisplay)) {
                display.innerHTML = -currentDisplay;
                string = [display.innerHTML];
            }
            console.log("You clicked negate button");
        } else if (element == clear) {
            string.length = 0;
            display.innerHTML = '';
            console.log("You clicked clear button");
        } else if (element.classList.contains("number")) {
            string.push(element.textContent);
            console.log(`You clicked ${element.textContent} button`);
        } else if (element == document.querySelector(".point")) {
            string.push('.');
            console.log("You clicked point button");
        }
    })
});
