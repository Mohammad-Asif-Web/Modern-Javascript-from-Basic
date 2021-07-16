document.write("<h1>Tutorial No. 26 -- Scope and Hoisting explained in Javascript</h1>");

//Global Variable - Global Scope -- we can use this scoped in everywhere.
var globalVar = "I am Global<br>";  //global scoped

//Local Variable - Function Scope -- this variable only accessed to  specific place where it defined only.
function local(){
    var localVar = "I am local<br>";
    document.write(localVar);
    document.write(globalVar);  // also we can using globla variable

    if(true){
        document.write("this is if statement - " + globalVar);  //the global variable acceseed
        document.write(localVar);   //this is not accesed.
    
        var insideIf = "I am inside if"
    };

    document.write(insideIf +"<br>");   //this can accessed in local but not globally

}
local();

// document.write(insideIf);   //but this is not accessed in outside


//Hoisting 
function hoisting(){
    var test = "hoisting test";     // here value is assigned first
    document.write(test);
}
hoisting();     //this is showing output

function hoistingTwo(){
    // var test;    it works like it. only defined the value, not assigned
    console.log(test);   
    var test = "hoisting test";
}
hoistingTwo();      // But this is showing undefined because the variable is not assigned first.
//to solve this problem Programmers use let and const.


//Use of let -- this is used for a specific block scoped in locally.

function letTest(){
    let localVar = 30;

    if(true){
        let inside = "Inside If";
        console.log(inside);    //this is accessing
    }

    if(true){
        console.log(inside);    //this wont access because let is a block scoped it only used in a specific block.
    }
}

letTest();

//use of const -- const declared value can not be reassigned like var.
//Example:
const PI = 3.1416;
PI = 2;
console.log(PI);    // the output is showing error, because the constant value can not be reassigned where variable(var) do it.















































