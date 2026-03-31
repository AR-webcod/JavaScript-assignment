// Question 1
let city = prompt("Enter city name:");

if (city === "Karachi") {
    console.log("Welcome to city of lights");
} else {
    console.log("Welcome to " + city);
}

// Question 2
let gender = prompt("Enter your gender (male/female):").toLowerCase();

if (gender === "male") {
    console.log("Good Morning Sir");
} else if (gender === "female") {
    console.log("Good Morning Ma’am");
} else {
    console.log("Invalid input");
}

// Question 3
let color = prompt("Enter traffic signal color (Red, Yellow, Green):").toLowerCase();

if (color === "red") {
    console.log("Must Stop");
} else if (color === "yellow") {
    console.log("Ready to move");
} else if (color === "green") {
    console.log("Move now");
} else {
    console.log("Invalid color");
}

// Question 4
let fuel = parseFloat(prompt("Enter remaining fuel in liters:"));

if (fuel < 0.25) {
    console.log("Please refill the fuel in your car");
} else {
    console.log("Fuel level is sufficient");
}

// Question 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Question 6
let totalMarks = parseFloat(prompt("Enter total marks:"));
let marksObtained = parseFloat(prompt("Enter marks obtained in three subjects (sum):"));

let percentage = (marksObtained / totalMarks) * 100;

let grade;
let remarks;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

console.log(`Total Marks: ${totalMarks}`);
console.log(`Marks Obtained: ${marksObtained}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);
console.log(`Remarks: ${remarks}`);

// Question 7
let number1 = parseInt(prompt("Enter a number:"));

if (number1 % 3 === 0) {
    console.log(number1 + " is divisible by 3");
} else {
    console.log(number1 + " is not divisible by 3");
}

// Question 8
let number2 = parseInt(prompt("Enter a number:"));

if (number2 % 2 === 0) {
    console.log(number2 + " is an even number");
} else {
    console.log(number2 + " is an odd number");
}

// Question 9
let T = parseFloat(prompt("Enter temperature:"));

if (T > 40) {
    console.log("It is too hot outside.");
} else if (T > 30) {
    console.log("The Weather today is Normal.");
} else if (T > 20) {
    console.log("Today's Weather is cool.");
} else if (T > 10) {
    console.log("OMG! Today's weather is so Cool.");
} else {
    console.log("Weather is very cold or below the threshold.");
}

// Question 10
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");

let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Cannot divide by zero.";
    }
} else if (operation === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
    } else {
        result = "Error: Cannot perform modulus division by zero.";
    }
} else {
    result = "Invalid operation!";
}

console.log("Result: " + result);


