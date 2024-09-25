// Basic Iterator Syntax
const str = "Hello World";

const iterator = str[Symbol.iterator]();

let character = iterator.next();

while (!character.done && character.value !== " ") {
    console.log(character.value);
    character = iterator.next();
}


//erm cant remember what this is but it seems important
const obj = {
    name: "John",
    age: 30,
    city: "New York"
};

const newObj = {
    ...obj,
    age: 31,
}

const slideString = "erm wtf ";

const slideIterator = slideString[Symbol.iterator]();

let slide = slideIterator.next();

function ermwtf() {
    while (!slide.done && slide.value !== " ") {
        console.log(slide.value);
        slide = slideIterator.next();
    }
}