document.write("<h1>Tutorial 12 --  Relational and Logical operator</h1>");
document.write("Relational operator : ->, >, >=, <, <=, ==, ===, !=, !==");
document.write("<br>");
document.write("Logical Operator: &&, ||, !")
document.write("<br><br>");

//Relational Operator
document.write("Relational Operator")
document.write("<br>");

//   == Operator -   It will checked just value;
var a = 20;
var b = 20;
var str = "20";

document.write(a==b);   //its true, cz 20 20 value is equal
document.write("<br>");
document.write(a==str); //it also true, cz the str has 20 value and the == operator only checked the value, that why ist true;
document.write("<br>");

//   ===  Operator -  It will checked value and data type;
document.write(a===b);  // its true, cz the value and data type are same.
document.write("<br>");
document.write(a===str);    //its false, cz the value is same, but data type is not same. reason is, str has 20 value but str is a STRING data type. And === checked the data type also, that's why its false.
document.write("<br><br>");

//Logical Operator
document.write("Logical Operator")
document.write("<br>");

// &&(and) Operator - It will return true when all condition will be true, otherwise it will return false.
var num1 = 20;
var num2 = 30;
var num3 = 40;

document.write(num1<num2 && num2<num3);
document.write("<br><br>");

// ||(or) Operator - It will return true if one condition is true, otherwise it will return false,, if every condition is false

document.write(num3>num2 || num1>num2);



























