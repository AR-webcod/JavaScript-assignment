// chapter # 5 
// Ans 1 & 2
var num1 = 3;
var num2 = 5;

var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");
var diff = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + diff + "<br>");
var product = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + product + "<br>");
var quotient = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + quotient + "<br>");
var remainder = num1 % num2;
document.write("Remainder of " + num1 + " and " + num2 + " is " + remainder + "<br>");

// Ans 3
var myNum;
document.write("Value after variable declaration is: " + myNum + "<br>");
myNum = 5;
document.write("Initial value: " + myNum + "<br>");
myNum++;
document.write("Value after increment is: " + myNum + "<br>");
myNum = myNum + 7;
document.write("Value after addition is: " + myNum + "<br>");
myNum--;
document.write("Value after decrement is: " + myNum + "<br>");
var outputRemainder = myNum % 3;
document.write("The remainder is: " + outputRemainder + "<br>");

// Ans 4
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");

// Ans 5
var tableNum = 4;
document.write("Table of " + tableNum + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

// Ans 6
// Celsius to Fahrenheit: $F = (C \times 9 / 5) + 32
// Fahrenheit to Celsius: $C = (F - 32) \times 5 / 9

// Celsius to Fahrenheit
var celsius = 25;
var toFahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + toFahrenheit + "°F<br>");

// Fahrenheit to Celsius
var fahrenheit = 70;
var toCelsius = (fahrenheit - 32) * 5 / 9;
document.write(fahrenheit + "°F is " + toCelsius + "°C");


// Ans 7
var item1Price = 650; 
var item2Price = 100; 
var item1Qty = 3; 
var item2Qty = 7; 
var shippingCharges = 100; 

var totalOrder = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Qty + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Qty + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalOrder); var item1Price = 650; 
var item2Price = 100; 
var item1Qty = 3; 
var item2Qty = 7; 
var shippingCharges = 100; 

var totalOrder = (item1Price * item1Qty) + (item2Price * item2Qty) + shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Qty + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Qty + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalOrder);

// Ans 8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

