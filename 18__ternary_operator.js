document.write("<h1>Tutorial no. 18 -- ternary operator </h1>");

document.write("This operator has three parts. the first part is condition, second and third part is print part. If condition is true then first part will print, If condition is false then third part will print");
document.write("<br><br>");

//  For  basic ternary operator
// var number = Number(prompt("Enter a number: "));

// var result = number > 0 ? "positive" : "negative"
// document.write("You entered " + number + " and this is " + result + " number.");

//  For  Multiple ternary operator
var number = Number(prompt("Enter a number: "));

var result = number > 0 ? "positive" : number < 0 ? "negative" : "zero";
document.write("You entered " + number + " and this is " + result + " number.");























