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

//  Skipping index number destructuring --- we can skip any index number by ','comma
const player = ['sakib', 'rahim', 'mushfique', 'riyad', 'tamim', 'fizz'];
const [name1, name2, , , , x] = player;
console.log(name1); 
console.log(x);


//  declare a new title to variable --- use colon: then write new variable titile
const police = {
    policeName : 'ajmal sheikh',
    age : '35',
    address : {
        district : 'kurigram',
        subDistrict : 'sadar',
        code : 3300
    }
}

const {policeName: newName, age:hisAge, address: {district: hisdistrict, subDistrict: hisSub}} = police;

console.log(newName);
console.log(hisAge);
console.log(hisdistrict);
console.log(hisSub);

// default variables destructuring
const army = {
    armyName : 'muhammad',
    armyAge : 30,

    // if we comment spouse property, then the output will displayed default value "your spouse name here"
    //or if we uncomment spouse property, then the output will displayed "tahmina" value.
    spouse : "tahmina",     //just comment or uncomment to see the output of "spouse"
    country : {
        countryName : 'Bangladesh',
        continental : 'Asia',
        planet : 'Earth',
        subPlanet : {}
    }
}
const {armyName, armyAge, spouse = "your spouse name here"} = army;
console.log(armyName);
console.log(spouse);


// Rest parameter Destructuring
const navy = {
    navyName : "barbarosa",
    navyAge : 38,
    navyCountry : "Turkey",
    navyAttack : 20,
    attackWon : 18
}
const {navyName, navyAge, ...navyOther} = navy;
console.log(navyOther);
// Also we we can Destructure from REst..parameters
const {navyCountry, navyAttack, attackWon} = navyOther;
console.log(navyCountry);
console.log(attackWon);


















































