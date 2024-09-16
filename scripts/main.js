document.getElementById("heading").innerHTML = "Hello World";


let dontCare = null; //Null
let dontKnow = undefined; //Undefined
let isFriday = true; //Boolean, true or false
let number = 5; const pi = 3.14; //Number
const hugeString = "9007199254740991"; //Big Integer
let firstName = 'albert'; let lastName = 'einstein'; //String
const mySymbol = Symbol('mySymbol'); //Symbol
let car = {brand: 'BMW', mode: 'X5', cylinders: 8}; //Object
let transferFunds = function(){}; //Function

let x = 5; //Like in algebra
let y = 'text'; //Can hold numbers, strings, booleans, functions
let price = 100; //Can be initialized or not initialized
let price1; //Can have numbers in name, cannot start with numbers
let Price; //Are case sensitive
let pricePerCamel; //Standard is to use camel case

let gross = 5000;
let taxes = 4900;
let bacon = gross - taxes; // = 100 :(

let batman = 'Batman';
let superman = 'Superman';
let madMovie = batman + 'vs' + superman; //'Batman vs Superman'

let trickQuestions = batman + bacon; // ?

let practice = {boolin: true, numba: 2, strangus: 'fortnite'};
let ads = (2 + 42);
let ermm = ('fartnite ' + 'battle pass');
console.log(ermm + ads);

const firstname = "Joel";
const lastname = "Frasier";
const middlename = "Darryl ";
const nametitle = 'Sir ';

function combinename(fname, lname){
	return nametitle + " " + fname + " " +   middlename + "" + lname;
 }

alert(combinename(firstname, lastname));