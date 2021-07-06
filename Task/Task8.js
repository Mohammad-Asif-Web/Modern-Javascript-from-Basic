document.write("<h1>Task no. 8 -- Find the greatest number Using Ternary Operator</h1>");

var num1 = Number(prompt("Enter your first number: "));
var num2 = Number(prompt("Enter your second number: "));
var num3 = Number(prompt("Enter your third number: "));

 var result =  num1 > num2 && num1 > num3 ? "first number is big" : num2 > num1 && num2 > num3 ? "second number is big" : "third number is big";

document.write(result);







