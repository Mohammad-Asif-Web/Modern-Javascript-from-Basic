document.write("<h1>Task no. 9 -- Find the greatest number using Math function</h1>");

var num1 = parseFloat(prompt("Enter your first number: "));
var num2 = parseFloat(prompt("Enter your second number: "));
var num3 = parseFloat(prompt("Enter your third number: "));
var num4 = parseFloat(prompt("Enter your fourth number: "));
var num5 = parseFloat(prompt("Enter your fifth number: "));

var maximum = Math.max(num1, num2, num3, num4, num5);

document.write("Your first number was: " + num1)
document.write("<br>Your second number was: " + num2)
document.write("<br>Your three number was: " + num3)
document.write("<br>Your fourth number was: " + num4)
document.write("<br>Your fifth number was: " + num5)

document.write("<br><br>The Maximum Number is: " + maximum);




