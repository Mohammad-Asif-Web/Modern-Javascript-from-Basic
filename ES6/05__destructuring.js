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

//  Destructuring Objects
const zonayedObj = {
    nameObj: 'Zonayed Ahmed',
    ageObj: 21,
    professionalObj: 'Student'
}
var nameObj5 = zonayedObj.nameObj;
var ageObj5 = zonayedObj.ageObj;
var professionalObj5 = zonayedObj.professionalObj;
console.log(`${nameObj5} - ${ageObj5} - ${professionalObj5}`);

//In ES6
const {nameObj6, ageObj6, professionalObj6} = zonayedObj;
console.log(`${nameObj6}`);













