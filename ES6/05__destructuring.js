// document.write("<h1>Tutorial No. 05 -- Destructuring in Javascript ES6</h1>");

//  In Traditional data structuring
var muhammad = ['asif', 26, 'student'];
var name = muhammad[0];
var age = muhammad[1];
var job = muhammad[2];
console.log(`${name}, ${age}, ${job}`);

//  In ES6 deStructuring
const muhammad6 = ['asif', 25, 'engineer'];
const [name6, age6, job6] = muhammad6;
console.log(`${name6} - ${age6} - ${job}`);

//In ES6 --- Array Destructuring
const number = [10, 20, 30, 40 , 50];
let [num1, num2, ...z] = number
console.log(num1);
console.log(num2);
console.log(z);
console.log(z[0]);
console.log(z[1]);
console.log(z[2]);

//  swap variables
let a, b;
a = 10;
b = 20;
[a,b] = [b,a]
console.log(a);
console.log(b);

//  basic objects destructuring
const student = {
    id : 50,
    fullName : 'asif',
    gpa : 3.50
}
const {id, gpa, fullName} = student;
console.log(id);
console.log(gpa);
console.log(fullName);

// nested objects destructuring

const country = {
    cName : 'bangladesh',
    zila : 64,
    language : {
        native : 'bangla',
        standard : 'english',
        other : 'hindi'
    }
}
const {cName, zila, language:{native, standard, other}} = country;
console.log(cName);
console.log(zila);
console.log(native);
console.log(standard);
console.log(other);

// destructuring Functions with multiple parameters with variables

const vehicle = (car, bike) => {
    let {volvo, tesla, bmw} = car;
    let {yamaha, honda, favorite: {first, second}} = bike
    console.log(` 
    volvo is ${volvo} car,
    tesla is ${tesla} car,
    BMW is ${bmw} car.
    first choice is ${first},
    second choice is ${second},
    third choice is ${honda}
    `);
}

let car = {
    volvo : 'american',
    tesla : 'european',
    bmw : 'canadian'
}
let bike = {
    yamaha : 'R15',
    honda : 'xBlade',
    favorite : {
        first : 'FZS',
        second : 'MT15'
    }
}
vehicle(car, bike);























