document.write("<h1>Tutorial 10 --  Area of Various Shapes</h1>");

var base = parseFloat(prompt("Enter your base: "));
var height = parseFloat(prompt("Enter your Height: "));
var trapA = parseFloat(prompt("Enter Trapezium A value: "));
var trapB = parseFloat(prompt("Enter Trapezium B value: "));

var square = base * height;
var rectangle = (base * height) / 2;
var trapezium = (trapA + trapB) * height / 2;

document.write("Your Square value is " + square);
document.write("<br>");
document.write("Your Rectangle value is " + rectangle);
document.write("<br>");
document.write("Your Trapezium value is " + trapezium);
document.write("<br>");


















