// Перше завдання
let name = prompt("What is your name?");
alert("Hello, " + name + "! How are you?");


//Друге завдання
let firstDigit = parseInt(prompt("Enter the first number"));
let secondDigit = parseInt(prompt("Enter the second number"));

console.log(firstDigit + secondDigit);
console.log(firstDigit - secondDigit);
console.log(firstDigit * secondDigit);
console.log(firstDigit / secondDigit);


//Третє завдання
let firstValue = prompt("Enter any value");
let secondValue = prompt("Enter another value");

console.log(firstValue === secondValue);


//Четверте завдання
let digit_1 = parseInt(prompt("Enter the first number"));
let digit_2 = parseInt(prompt("Enter the second number"));
let digit_3 = parseInt(prompt("Enter the third number"));

console.log((digit_1 + digit_2 + digit_3) / 3);


//П'яте завдання
let digit = parseInt(prompt("Enter the five-digit number"));

let digit5 = digit % 10;
digit = (digit - digit5) / 10;
let digit4 = digit % 10;
digit = (digit - digit4) / 10;
let digit3 = digit % 10;
digit = (digit - digit3) / 10;
let digit2 = digit % 10;
digit = (digit - digit2) / 10;

console.log(digit + " " + digit2 + " " + digit3 + " " + digit4 + " " + digit5);
//
