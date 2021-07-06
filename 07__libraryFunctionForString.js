document.write("<h1>Tutorial 07 --  Library Functions for String</h1>");

//Length Function --
document.write("1. length Function -- This function returns the number value of strings ");
//method no. 1
var name = "Bangladesh";
var len = name.length;

document.write("<br><br>Example:- <br>")
document.write("the number of characher is " + len);
document.write("<br>");

//method no. 2
var word = "muhammad";
document.write("the word is " + word.length);

//Prompt Function --
document.write("<br><br>2. prompt() Function -- This function takes the input from the user and returns value of that user input. This is works as scanf() in C Lang.");
document.write("<br><br>Example:- <br>");

// var input = prompt("Enter your name: ");
// document.write("number of character of input is " + input.length);

//charAT Function --
document.write("<br><br>3. charAT() Function -- This function returns a specific number from a string. Index number starts from 0");
document.write("<br><br>Example:- <br>");
var specific = "javascript";

document.write(specific.charAt(4));     //here output is s which index number is 4 counting from 0.
document.write("<br>");
document.write(specific.charAt(6));     //here output is r which index number is 6 counting from 0.

//toUpperCase Function --
document.write("<br><br>4. toUpperCase Function() -- It converts the string to UpperCase letter.");
document.write("<br><br>Example:- <br>");

var myName = "Muhammad";
myName = myName.toUpperCase();
document.write(myName);

//toLowerCase Function --
document.write("<br><br>5. toLowerCase() Function -- It converts the string to lowerCase letter.");
document.write("<br><br>Example:- <br>");

var myName = "CODING IS MY HOBBY";
myName = myName.toLowerCase();
document.write(myName);

//concat Function --
document.write("<br><br>6. concat() Function -- It adds string one with another. works same as string Concatenation just using as a function");
document.write("<br><br>Example:- <br>");

var text1 = "I live in ";
var text2 = "Bangladesh";
var text = text1.concat(text2);
document.write(text);

//slice Function --
document.write("<br><br>7. slice Function -- slice means cutting the string letter not delete. we can add two value between slice(starting, ending).");
document.write("<br><br>Example:- <br>");
var text = "bangladesh";
var slice1 = text.slice(0, 2);
document.write(slice1);


  