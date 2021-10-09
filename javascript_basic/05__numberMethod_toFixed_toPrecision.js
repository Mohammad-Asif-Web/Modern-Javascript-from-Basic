document.write("<h1>Tutorial 05 --  number method | to Fixed | to Precision</h1>");
document.write("toString Function -- It converts number to string.<br><br>");
document.write("parseInt Function -- It converts string to number<br><br>");
document.write("parseFloat Function -- It converts string to decimal numbers.<br><br>");
document.write("toFixed Function -- Its used to see the decimal numbers after decimal point. It shows that how many decimal number you want to see after decimal poins.<br><br>");
document.write("toPrecision -- toPrecision method -- It shows value of total number. its like a length of number, start counts from first number.<br><br>");
document.write("Number method -- This Number function converts any string to number. Also returns Boolean value like 1 for True and 0 for False");


//Converting number to string
var num = 20;
toString(num);
console.log(typeof(num));

//Converting string to Integer Number
var str = "1540";
parseInt(str);
console.log(str);

//Decimal numbers use parseFloat
var strfloat = "20.25";
parseFloat(strfloat);
console.log(strfloat);

//toFixed method -- Its used to see the decimal numbers after decimal point. It shows that how many decimal number you want to see after decimal poins.
var number = 25.3567;
console.log(number.toFixed(2));

//toPrecision method -- It shows value of tatal number. its like a length of number, start counts from first number.
console.log(number.toPrecision(3));
console.log(number.toPrecision(2));

//Number method -- this Number function converts any string to number. Also returns Boolean vaule like 1 for True and 0 for False.
console.log(Number("1540")); 
console.log(Number(true));
console.log(Number(0));

//cheking the Number function typeof data
console.log(typeof(Number("12")));















