// Question 1
let char1 = prompt("Enter a character:");

// Get ASCII code of the character
let ascii = char1.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
    console.log("Input is a number");
} else if (ascii >= 65 && ascii <= 90) {
    console.log("Input is an uppercase letter");
} else if (ascii >= 97 && ascii <= 122) {
    console.log("Input is a lowercase letter");
} else {
    console.log("Input is neither a number nor a letter");
}

// Question 2
let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else if (num2 > num1) {
    console.log("The larger number is: " + num2);
} else {
    console.log("Both integers are equal");
}

// Question 3
let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero");
}

// Question 4
let char = prompt("Enter a character:").toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log("The character is a vowel");
} else {
    console.log("The character is not a vowel");
}

// Question 5
const correctPassword = "password123"; // Store correct password
let userPassword = prompt("Enter your password:");

if (!userPassword) {
    console.log("Please enter your password");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}

                                // Question 6
// Original faulty code: 

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// else
//     greeting = "Good evening";
// }

// Corrected code:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);





