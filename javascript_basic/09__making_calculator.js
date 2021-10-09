document.write("<h1>Tutorial 09 --  Making Own Calculator</h1>");


var num1 = prompt("Enter your first number: ");
var num2 = prompt("Enter your Second number: ");

var num1 = parseFloat(num1);
var num2 = parseFloat(num2);

var sum, sub, mul, div, mod;

sum = num1 + num2;
sub = num1 - num2;
mul = num1 * num2;
div = num1 / num2;
rem = num1 % num2;

document.write("your addiction is " + sum);
document.write("<br>");
document.write("your subtraction is " + sub);
document.write("<br>");
document.write("your multiplication is " + mul);
document.write("<br>");
document.write("your division is " + div);
document.write("<br>");
document.write("your remainder is " + mod);
document.write("<br><br>");
document.write("you have entered num1 is " + num1);
document.write("<br>");
document.write("you have entered num2 is " + num2)



