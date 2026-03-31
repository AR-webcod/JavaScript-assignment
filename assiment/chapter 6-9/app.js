// chapter # 6-9
// Ans 1
var a = 10;
document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("........................................<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

//  Ans 2
// --a; (Decrements a to 1)
// --a - --b; (1 - 0 = 1)
// --a - --b + ++b; (1 + 1 = 2)
// --a - --b + ++b + b--; (2 + 1 = 3)

// a is 1, b is 0, and result is 3.

// Ans 3
var name = prompt("Enter your name:");
alert("Hello " + name + "! Welcome to JS Land.");

// Ans 5
var num = prompt("Enter a number for the multiplication table:", 5);
num = num || 5;

document.write("<h2>Multiplication Table of " + num + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

// Ans 6
var sub1 = prompt("Enter first subject name:");
var sub2 = prompt("Enter second subject name:");
var sub3 = prompt("Enter third subject name:");
var totalMarks = 100;
var marks1 = parseInt(prompt("Enter marks for " + sub1 + ":"));
var marks2 = parseInt(prompt("Enter marks for " + sub2 + ":"));
var marks3 = parseInt(prompt("Enter marks for " + sub3 + ":"));
var totalObtained = marks1 + marks2 + marks3;
var grandTotal = totalMarks * 3;
var percentage = (totalObtained / grandTotal) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + marks1 + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + marks2 + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + marks3 + "%</td></tr>");
document.write("<tr><td><b>Total</b></td><td><b>" + grandTotal + "</b></td><td><b>" + totalObtained + "</b></td><td><b>" + percentage.toFixed(2) + "%</b></td></tr>");
document.write("</table>");


