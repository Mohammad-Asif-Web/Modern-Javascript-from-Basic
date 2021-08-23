// document.write("<h1>Tutorial No. 03 -- Template Literal and String Method in Javascript ES6</h1>");

//  In EcmaScript 5 -- we can concat multiple variables by + sign, but it is more boring to write code and take much time. example

var name = 'Muhammad asif'
var age = 25;
var job = 'student'

console.log('My name is ' + name + ". and I am " + age + ' years old. and I am a ' + job);

// To fixe this Problem, ES6 brings a new method called template literal. we can add multiple 'strings' by ``this sign and get variable access by ${} this sign. If we again print the previous console --
console.log(`my name is ${name}. I am a ${job} and I am ${age} years old`);


//  Another example for return function expression
function birth (age){
    return `my date of birth is ${2021 - age}`
}
var dob = birth(26);
console.log(dob);


//  NEW STRING METHOD -- Four types of string methods, they are -- 1. startsWith    2.endsWith  3.includes  4.repeat

//  1. startWith method
let start = 'my name is asif';
let startResult = start.startsWith('my');
console.log(startResult);

//  2. endsWith method
let end = 'I love programming'
let endResult = end.endsWith('my');
console.log(endResult);

//  3. includes method
let inc = 'javascript is a script language'
let incResult = inc.includes('script');
let inc2 = inc.includes('dynamic')
console.log(incResult);
console.log(inc2);

//  4. repeat method
let rpt = 'Hi js'
let rptResult = rpt.repeat(5);
console.log(rptResult);

//another example
console.log(`I always want to say ${' Alhamdulillah'.repeat(5)}`);

// Remember this string method only works in strings not boolean or Number because it is string.






