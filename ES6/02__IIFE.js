// document.write("<h1>Tutorial No. 02 -- Immediately Invoked Function Expresseion (IIFE) in Javascript ES6</h1>");

const demo = function(firstName, lastName, age){
    // let firstName = 'muhammad '
    // let lastName = 'asif'
    console.log(`my name is ${firstName + lastName} and I am ${age} years old.`);
}('Muhammad', " asif", 26);

// demo()   //It will show error, bcz we can't call IIFE to globally, it is private function

const math = (function(){
    let a = 5;
    let b = 20;
    const pi = 3.1416;
    console.log(`the total is: ${a + b + pi}`);
})();   //Now if we call this function to outside of this, it will show error
// math()


//  But if we do the same thing in 'var' keyword it will access
var myMath = (function(){
    var a = 'muhammad asif'
    console.log(a);
})
myMath()

// So it is same as ES5 Expressions. In ES6, let and const declaration makes it more easier for programmers, bcz it works in block scope. 




















