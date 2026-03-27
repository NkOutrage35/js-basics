// Functions with Template Literal
function createGreeting(firstName, timeOfDay = "Hello"){
    return `${timeOfDay}, ${firstName}!`;
}

let message1 = createGreeting("Sarah", "Good Morning");
let message2 = createGreeting("James", "Good Evening");
let message3 = createGreeting("Alex");

console.log(message1);
console.log(message2);
console.log(message3);