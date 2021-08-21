// document.write("<h1>Tutorial No. 04 -- Function Constructor and New Keyword in advance js</h1>");


var Person = function(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.dob = function(currentYear){
        console.log(this.name + ' is born in ' + (currentYear - this.age))
    }
}

var rafiq = new Person ('rafiq', 30, 'student');
var asif = new Person ('Asif', 26, 'Web developer');
let karim = new Person ('Karim', 22, 'part time job' );
asif.dob(2021);

var Student = function (name, id, section, grade){
    this.Name = name;
    this.ID = id;
    this.Section = section;
    this.Grade = grade;
    this.msg = function(advice){
        console.log('Hi ' + this.Name + '. you are passed.' + advice)
    }
}

var sohel = new Student('Md. Sohel', 22, 'A', 'A-');
sohel.msg(' You are slow in english.')




























