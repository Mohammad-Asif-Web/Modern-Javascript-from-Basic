document.write("<h1>Tutorial no. 25 -- Date object & It's Methods in Javascript</h1>");

document.write("<h2>get date method</h2><br><br>");

// Date = only date function contains all value like year, months, day, time, and local standard time.
var global = new Date();
document.write(global);
document.write("<br><br>");

var year = new Date().getFullYear()
document.write("The Current Year - " + year);
document.write("<br><br>");

var month = new Date().getMonth();
document.write("The Current Months is - " + month)
document.write("<br>the month value starts from 0 to 11.")
document.write("<br><br>");

var day = new Date().getDay();
document.write("The Current days " + day);
document.write("<br>The days count start from sunday and the days value starts from 0 to 6")
document.write("<br><br>");

var hour = new Date().getHours();
document.write("Now the Hours is " + hour)
document.write("<br><br>");

var minute = new Date().getMinutes();
document.write("The Current minutes is " + minute);
document.write("<br><br>");

var second = new Date().getSeconds();
document.write("The updated seconds is " + second);
document.write("<br><br>");

var time = new Date().getTime();
document.write("The Updated time is " + time);
document.write("<br><br>");

document.write("<h2>set date method</h2>");

document.write("set date method is same as get method. just it need to declare the value in function ()<br><br>");

var d = new Date();
d.setMonth(11); //declare months in function()
document.write(d);




















