const str = "Hello World";

const iterator = str[Symbol.iterator]();

let character = iterator.next();

while (!character.done && character.value !== " ") {
    console.log(character.value);
    character = iterator.next();
}