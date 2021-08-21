// document.write("<h1>Tutorial No. 05 -- Inheritance in advance js</h1>");


var Person = function(name, age, job){
    this.nickName = name;
    this.yourAge = age;
    this.yourJob = job;
}
// var asif = new Person('MD. ASIF', 25, 'SOFTWARE ENGINEER');
// console.log(asif);

//  adding new function method to prototype
Person.prototype.dob = function(){
    console.log('you are born in ' + (2021 - this.yourAge));
}
var asif = new Person('md asif', 25, 'student');
asif.dob();

//  adding new data to prototype and accessing it from variable 'asif'
Person.prototype.yourCountry = 'Bangladesh'
console.log(asif.yourCountry);

// document.write('<br>Constructor Inheritance');
//Now this is the main explanation in js inheritance, how we can regular use this method.
var newPerson = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}

// var newTeacher = function(name, age, job) {
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.subject = subject;
// }


//  In newTeacher Constructor function is same as newPerson person without this.subject. so we don't need to rewrite this same data. we can access it by call() method, in below--
var newTeacher = function(name, age, job, subject){
    newPerson.call(this, name, age, job);
    this.subject = subject;
}
var rahim = new newTeacher('rahim khan', 20, 'student', 'bangla');
console.log(rahim);
//Individually we can access this variable
console.log(rahim.name);
console.log(rahim.age);
console.log(rahim.job);
console.log(rahim.subject);


// We can too access newPerson data. In below--
var karim = new newPerson('Karim rahman', 32, 'business')
console.log(karim);




//  New Prototype example
var People = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
}

People.prototype.printName = function(){
    console.log('Name: ' + this.name);
}

var Madam = function(name, age, job, subject){
    People.call(this, name, age, job);
    this.subject = subject;
}


//  To access the all property of People object into Madam object, we can use this method -- Object.create. Its assigning all property to madam object.
Madam.prototype = Object.create(People.prototype);

// adding another property to People object
People.prototype.another = function(msg){
    console.log('this is ' + msg + ' function');
}


//example of People object by variable 'khan'
var khan = new People('Khan hussain', 29, 'Student', 'Physics')
console.log(khan);
khan.printName();
khan.another('khan');
var bool = khan instanceof People
console.log(bool);

//example of Madam object by variable 'hussain'
var hussain = new Madam('hussain ahmed', 30, 'engineer', 'chemestry')
console.log(hussain);
hussain.printName('hussain ahmed');
hussain.another('hussain ahmed')
var bool2 = hussain instanceof Madam
console.log(bool2);



















