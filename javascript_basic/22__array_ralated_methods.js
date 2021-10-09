document.write("<h1>Tutorial no. 22 -- Array related methods in JS</h1>");

//  concat method.
// document.write("<h4>Array concat method</h4>")
var arrOne = ["asif", "kawser", "muhsin", "noman", "tushar"];
// document.write(arrOne);
// document.write("<br>");

// var stale = arrOne.concat("biplob", "saikat");
// document.write("After concat : -- " + stale);

//  Adding value by splice method
document.write("<br><br>Adding value by splice() method<br>");

arrOne.splice(2, 0, "rahim", "karim");
document.write(arrOne);
document.write("<br>")
// sort() method. -- it sorts value by alphabetically.
document.write("<br>sort() method:<br>")
var arrSort = arrOne.sort();
document.write(arrSort + "<br>");

// Reverse sort method  
document.write("<br>reverse() method<br>")
var namereverse = arrOne.reverse();
document.write(namereverse);

// Number sorting method -- for sorting number sort() method can't use. to sort numbers, need a function. which value must be like a-b;
document.write("<br><br>How to sort numbers<br>")
var num = [5, 2, 20, 13, 3, 42, 8, 32, 1];

num.sort(function(a, b){
    return a - b;
})
document.write(num);

// Numbers reverse sorting method ---
document.write("<br><br>Numbers reverse sorting method<br>")
num.sort(function(a, b){
    return b - a;
})
document.write(num);


















