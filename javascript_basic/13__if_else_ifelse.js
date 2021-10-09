document.write("<h1>Tutorial 13 --  if, else, if..else</h1>");

// checking even/odd numbers2
document.write("Checking even/odd numbers")
document.write("<br>")
var num = parseFloat(prompt("Enter you number: "));

if(num%2 == 0)
    document.write(num + " is even number");

else
    document.write(num + " is odd number");