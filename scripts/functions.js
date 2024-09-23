/* 
Call functions by using their name (i.e myFunc) in the console, or
in parts of your html document using the script tag
*/

// Function Syntax
function myFunc(param1, param2) {
    console.log(this);
    return param1 + param2;
}

// Arrow Function Syntax
const myArrFunc = () => {
    return param1 + param2;
}

function colors() {
    console.log("red");
    console.log("blue");
    console.log("purple");
}

let myColors = colors;

console.log(myColors)

let dumb = 'dumb';
let stinky = 'stinky';

function adamBrunner(dumb, stinky) {
    console.log('Hello Adam, you are ' + dumb +' and ' + stinky)
}

let y = takeOverTheWorld('Pinky', 'Brain');

function takeOverTheWorld(Genius, Insane) {
    return Genius + Insane + "Go back to the drawing board";
}

console.log(takeOverTheWorld());

function calc() {
    let in1 = document.getElementById("input1")
    let num1 = Number(in1.value);
    let in2 = document.getElementById("input2")
    let num2 = Number(in2.value);

    let answer = num1 + num2;
    document.getElementById("solution").innerHTML = answer;
}