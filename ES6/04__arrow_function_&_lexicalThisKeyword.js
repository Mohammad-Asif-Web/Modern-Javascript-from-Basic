// document.write("<h1>Tutorial No. 04 -- Arrow Function and Lexical this Keyword in Javascript ES6</h1>");


// Differences & Limitations:-
// Does not have its own bindings to this or super, and should not be used as methods.
// Does not have new.target keyword.
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Can not be used as constructors.
// Can not use yield, within its body.

//  In ES5 -- We can write function
var aFunc = function(){
    console.log('A Demo ES5 Function Expression');
}
aFunc();

//  now if we write this in Arrow Function
const aFunc6 = () => console.log(`a Demo ES6 Arrow Function`);
aFunc6();   //The difference is we don't need function keyword, just need a new syntax '=>'. that's why its called Arrow Function. this is so clean code. Also we don't need to use curly brace '{}'.


//  AUTOMATIC RETURN by Arrow Function
//first we declare a variable
const dob = [1996, 1986, 2017, 1989];

// now using this function as ES5
const currentAge5 = dob.map(function(oneDob){
    return 2018 - oneDob;
})
currentAge5;


//  Now if we do this in ES6 --
const currentAge6 = dob.map(oneDob => 2018 - oneDob);
currentAge6;
// here we don't need to use 'return' keyword. the code line is so clean and small.

//  MULTIPLE ARGUMENT EXAMPLE  by Arrow Function
//  In the previous example, we had one arguments. we know that map() takes three arguments. now for multiple arguments Arrow function stores the arguments inside bracket '()'.
const currentAge62 = dob.map((oneDob, index) => `${index}: ${2018 - oneDob}`);
currentAge62;


//  MULTIPLE LINES CODE
const currentAge622 = dob.map(oneDob =>{
    const age = 2018 - oneDob
    return age;
})
currentAge622;


//  In ES5 -- this is function statement and its totally valid
myName();
function myName(){
    console.log('asif');
};


// but this is not valid in ES5 -- because this is function expression
// myName2();
// const myName2 = function(){
//     console.log('asif');
// }


// so in ES6 -- we can't call a function without define it because Arrow function is a function expression, example
// myName6();
// const myName6 = () => console.log('this is expression');    //this is error



// document.write(`LEXICAL 'this' KEYWORD`);
 const lex5 = {
     aFunc: function(){
         console.log(this);
         return function(){
             console.log(this);
         }
     }
 }
lex5.aFunc()();

//Now if we do this same thing in ES6 Arrow Function--
const lex6 ={
    aFunc: () => {
        console.log(this);
        return () => console.log(this);
    }
}
lex6.aFunc()();


// Mixed function by Arrow and normal function
const lex56 = {
    aFunc : function(){
        console.log(this);
        return () => console.log(this);
    }
}
lex56.aFunc()();


//  With IIFE -- we can write arrow function
(() => {
    console.log(`this is Arrow function with IIFE`);
})();


//  MDN REFERENCE
const materials = ['hydrogen', 'boron', 'oxygen', 'beryllium'];

console.log(materials.map(element => element.length));

// Comparing traditional functions to arrow functions
const trad = function(a){
    return a + 100;
}
console.log(trad(20));

//Arrow function break down
const trad2 = a => a + 100; //Remove body curly brace and return keyword and argument parentheses
console.log(trad2(50));

// For example, if you have multiple arguments or no arguments, you'll need to re-introduce parentheses around the arguments:
const arrow2 = (a, b) => a + b + 100;
console.log(arrow2(10, 20));

//Without arguments
let a = 4;
let b = 2;
const withOutArg = () => a + b + 100;
console.log(withOutArg());


// if the body requires additional lines of processing, you'll need to re-introduce braces PLUS the "return" keyword.
const arrow3 = (c, d) => {
    let chuck = 42;
    return c + d + chuck;
}
console.log(arrow3(10, 20));

const bob = (para1, para2) => {
    let name = 'asif'
    return `${name} your total amount is ${para1 + para2}`
}
console.log(bob(50,  20));


// Arrow functions used as methods--Arrow functions do not have their own 'this'
'use strict'
var obj = {
    i : 10,
    b: () => console.log(this.i, this),
    c: function(){
        console.log(this.i, this);
    }
}
obj.b();
obj.c()


// The `call, apply and bind` methods are NOT suitable for Arrow function, because Arrow functions establish "this" based on the scope
// First Traditional Function Example 
let obj2 = {
    num : 100
}
let add = function (a, b, c){
    return this.num + a + b + c;
}
//call
let callResult = add.call(obj2, 1, 2, 3);
console.log(callResult);
//apply
// let applyArr = [1, 2, 3]
const appResult = add.apply(obj2, [1, 2, 3]);
console.log(appResult);
//bind
let bindResult = add.bind(obj2);
console.log(bindResult(1, 2, 3));

//  Now Arrow Function Example --

var objArrow = {
    num : 100
}

var addArrow = (a, b, c) => this.num + a + b + c;
//call
var callArrow = addArrow.call(objArrow, 1, 2, 3);
callArrow;
//apply
const arrArrow = [1, 2, 3]
console.log(addArrow.apply(objArrow, arrArrow));
//bind
const bindArrow = addArrow.bind(objArrow);
console.log(bindArrow(1, 2, 3));
// Perhaps the greatest benefit of using Arrow functions is with DOM-level methods (setTimeout, setInterval, addEventListener) that usually required some kind of closure, call, apply or bind to ensure the function executed in the proper scope.

//  FUNCTION INSIDE OBJECTS -- Traditional example
const obj3 = {
    count : 10,
    doLater : function(){
        setTimeout(function(){  // the Function executes on the window scope
            this.count++;
            console.log(this.count);
        }, 300)
    }
}
obj3.doLater(); // console prints "NaN", because the property "count" is not in the window scope.
let obj3Result = obj3.count;
console.log(obj3Result);

//  FUNCTION INSIDE OBJECTS -- Arrow Function example
const obj4 = {
    count : 10,
    doLater : function(){   // of course, arrow functions are not suited for methods
        setTimeout(() => {  //   since the arrow function was created within the "obj", it assumes the object's "this"
            this.count++;
            console.log(this.count);
        }, 300);
    }
}
obj4.doLater();



// No binding of arguments
var arguments= [2, 3, 4];
var argArr = () => arguments[1];
argArr();

function foo(n){
    var f = () => arguments[1] + n;
    return f();
}
console.log(foo(3));


// Use of the new operator
// Arrow functions cannot be used as constructors and will throw an error when used with new.
// let Foo = () => {};
// var foo = new Foo();



















