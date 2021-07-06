document.write("<h1>Tutorial no. 19 -- Function in JS</h1>");

document.write("creating a function<br>");

document.write("calling a function<br>");
document.write("how to assing function into a variable<br>");
document.write("returning function value by return keyword");
document.write("<br><br>");
document.write("<br>");



function square(){
    var num = 5
    var result = num * num

    document.write(result);
}
square();
document.write("<br><br>");

// Function for Multiplication
function mul(num1, num2){   // num1, num2 is called parameter and this is function declaration
    var result = num1 * num2
    document.write("Multiplication result: " + result);
}

mul(4, 5);  //mul(4, 5) are argument and this is function call
document.write("<br>");
mul(5, 10);
document.write("<br><br>");

//Function for summation
function sum(num1, num2, num3){
    var result = num1 + num2 + num3
    document.write("Addition result: " + result);
}
sum(4, 5, 6);
document.write("<br><br>");

//Function for substration
function sub(x, y){
    subResult = x - y
    document.write("substration result: " + subResult);
}
sub(90, 20);
document.write("<br><br>");

//Function for Return Result

function myfunction(i, j, k){
    var result = i + j + k;
    return result;
}
document.write("function return result: " + myfunction(3, 4, 5));
document.write("<br>");

// return result by function assign in var
var ans2 = myfunction(10, 12, 15);
document.write("return result by var: " + ans2);
document.write("<br><br>");

// Function by "ZONAYED" "HATE COLOME JAVASCRIPT"
document.write("<h2>Starting Function by ZONAYED হাতে কলমে জাভাস্ক্রিপ্ট</h2>");

//  Two way to declaration of function -- First way
function funcName(){
    document.write("Hello, this is first way");
}
funcName();
document.write("<br>");


//  Second way
var funcName = function(){
    document.write("Hello, this is second way");
}
funcName();
document.write("<br><br>");

//  Passing arguments as STRING AND NUMBER
function printMyName(name, age){
    var myself = document.write("My name is " + name + " and my age is " + age);
    return myself;
}
printMyName('muhammad asif', 26);
document.write("<br><br>");

// Passing a function as an arguments into a another function
function callMyName(name, callback){
    var myAge = 26;
    callback(myAge);
    document.write("<br>Is it interesting? Yes, It is Mr. " + name);
}

function hello(age){
    document.write("I am pass through argument and my age is " + age)
}
callMyName("Muhammad Asif", hello,);
document.write("<br><br>");

//  For this reason, we can return a function from another function

function msg(name){
    document.write("Welcome Mr. " + name);
    return function menu(age, food){
        document.write(". you must be " + age + "! Do you like " + food);
    }
}
msg("Muhammad Asif")(26, "Coffee");
document.write("<br><br>");

//আর্গুমেন্ট পাস করলে সেটার একটা কপি পাস হয়, রেফারেন্স পাস হয় না।
document.write("<h4>আর্গুমেন্ট পাস করলে সেটার একটা কপি পাস হয়, রেফারেন্স পাস হয় না। -- the code is below</h4>");
function changeValue(a){
    document.write("<br>value of inside function before changing: " + a);
    a = 10;
    document.write("<br>value of a inside function after changing: " + a)
}


var a = 100;
document.write("a value is used before changing the function " + a)
changeValue(a);
document.write("<br>a value is used after changing the function " + a);  // a output should be return 10 but this output is returnig 100, so the a value is pass as a copy, not reference.
document.write("<br>");

document.write("<h3>pass the function value by object</h3>");
var obj = {
    name : 'asif',
    age : 26,
    game : function(){
        var pubg = "play unknown battle ground";
        return pubg;
    }
}
document.write("my name is " + obj.name + ", my age is " + obj.age + " and My game is " + obj.game());





































