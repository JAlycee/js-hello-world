console.log("testing");
const input = require('readline-sync');

let myName = input.question("What's your name? ");
let myAge = Number(input.question("\nHow old are you? "));
let myPhrase;
/*
Everything in the parenthesis must be true or false
Curly Braces are conditionally ran
if statements can be unlimited in conditions
*/
if (myAge < 18) {  //When a condition comes out to true, I skip the rest of the block and go straight to console.log()//
    myPhrase = "Parental supervision advised.";
} else if (myAge < 26) {
    myPhrase = "Imagine paying for health insurance...";
} /*else {  //when no conditions are true, do this//
    myPhrase = "Imagine having health insurance... ☹️";
}*/
console.log("\nHello, " + myName + ". " + myPhrase);