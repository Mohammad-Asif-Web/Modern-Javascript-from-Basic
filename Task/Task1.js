document.write("<h1>Task no. 1</h1>");
document.write("Get first name from user. get last name from user. Add this name without using library function. Print full name. get total length of full name. Convert this name into upper case. print the 2nd position from full name.");
document.write("<br><br>Answer :-<br><br>");


var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");

var fullName = firstName + lastName;
document.write(fullName);
document.write("<br>");

var len = fullName.length;
document.write("Your Full Name length is " + len + ".");
document.write("<br>");

var convert = fullName.toUpperCase();
document.write(convert);
document.write("<br>");

var cut = fullName.slice(8, 13);
document.write(cut);

