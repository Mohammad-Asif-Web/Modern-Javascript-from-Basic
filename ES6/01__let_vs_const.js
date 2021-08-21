// document.write("<h1>Tutorial No. 01 -- Let vs Const in Javascript ES6</h1>");

//  we can declare and change the value by 'var' in ES5
var a = 'Muhammad asif'
console.log(a);
//now changing the variable value and its totally valid with no error.
a = 'asif hussain'
console.log(a);


// and  if we do the same thing in 'let'
let a6 = 'Muhammad asif'
console.log(a6);
//now changing the value of a6 and the output is same as ES5
a6 = 'asif hussain'
console.log(a6);


//but if we do the same thing in 'const'
const c6 = 'Muhammad asif'
console.log(c6);
//now changing the value of c6 and its not valid with errors. That means you can't reassign a new value to 'const' variable
// c6 = 'asif hussain'
// console.log(c6);


//  DIFFERENCE IN SOCPING OF let vs const
//  'var' keyword maintains function scopes and 'let' and 'const' maintains block scope

//here this 'var' keyword scopes access to all place in this function. bcz 'var' keyword works in function scope.
function es5Var(){
    if(true){
        var a = 5;
    }
    console.log('value: ' + a);
}
es5Var();



//  now if we do the same thing in let or const it will throw errors
function es6con(){
    if(true){
        const con6 = 6;
    }
    console.log('value: ' + con6);
}
// es6Con();    ////uncomment this line to see error

function es6Let(){
    if(true){
        let let6 = 6;
    }
    console.log('value: ' + let6);
}
// es6Let();   ////uncomment this line to see error
//  so this happens,'let' and 'const' works in bloce scope. its declared in 'if' statement and it will get scope to if block, it can't access to outside of 'if' block.



//  DIFFERENCE IN HOISING 'var' vs 'let and const'
console.log(avar);
var avar = 'i am  defined here' //it printing undefined not errors.

// If we do the same thing in 'let' vs 'const' it will throw error.
// console.log(alet);
// let alet = 'i am defined';      // so we can't do the same thing in let or const


let x = 10;
function demo(){
    let x = 20;
    console.log(x);
    {
        let x = 30;
        console.log(x);
    }
}
demo();
console.log(x);






