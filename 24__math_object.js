document.write("<h1>Tutorial no. 24 -- Math Object in Javascript</h1>");

var mathOne = Math.sqrt(25);
document.write("1. math.sqrt = " + mathOne);
document.write("<br><br>");

var mathtwo = Math.abs(-10);
document.write("2. math.abs = " + mathtwo);
document.write("<br><br>");

var mathSin = Math.sin(2);
document.write("3. math.sin = " + mathSin)
document.write("<br><br>");

var mathCos = Math.cos(2);
document.write("4. math.cos = " + mathCos)
document.write("<br><br>");

var mathPow = Math.pow(5, 2);
document.write("5. math.Pow = " + mathPow);
document.write("<br><br>");

//Math.floor -- It gets down to the lowest real number what you have entered.
var mathFloor = Math.floor(3.5);
document.write("The lowes real number is = " + mathFloor);
document.write("<br><br>");

//Math.ceil -- Its opposite of Math.floor. It gets upto the highest number what you have entered.
var mathCeil = Math.ceil(3.5);
document.write("The highest real number is = " + mathCeil);
document.write("<br><br>");

//Math.max -- It finds the maximum number which you entered.
var mathMax = Math.max(2, -2, 3, -3, 10, -20, 5, -13,);
document.write("The maximum number is = " + mathMax);
document.write("<br><br>");

//Math.random -- It gives a random number. the value must be contain between 0 to below 1, not 1.
var mathRandom = Math.random();
document.write("The random number is = " + mathRandom);
document.write("<br><br>");

//we can get this random number in interger value by multiply by any real numbers.
// I multiplied 7. because the integer value will give output till 7. and aslo i added 1, because the value dont show 0. If I remove 1, then the value will shows 0.
var mathInt = Math.floor(Math.random() * 7) + 1;
document.write("The real Random number is = " + mathInt);
document.write("<br><br>");

var mathIntTwo = Math.floor(Math.random() *11) + 10;
document.write("the real number shows output from 10 to 20 = " + mathIntTwo);




























