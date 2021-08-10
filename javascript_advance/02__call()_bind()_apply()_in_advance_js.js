// document.write("<h1>Tutorial No. 30 -- call(), bind() and apply() method in advance js</h1>");

// call() method:
var myCustomObj = {
    name : 'muhammad asif',
    age : 26,
    job : 'student',
    anotherObj : {
        name : 'asif hossain',
        value : function(){
            console.log('My name is ' + this.name);
        }
    }
}
myCustomObj.anotherObj.value();

// calling the output from myCustomObj
// myCustomObj.anotherObj.value.call(myCustomObj.age);

//using this method between two different objects
var findDate = {
    name : 'finding real date',
    dob : 1990,
    age : function(currentYear){
        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old')
    }
}

var asif = {
    name : 'Muhammad asif',
    dob : 1994
}

findDate.age.call(asif, 2021);

// apply() method from same example--
var myCustomObj = {
    name : 'muhammad asif',
    age : 26,
    job : 'student',
    anotherObj : {
        name : 'asif hossain',
        value : function(){
            console.log('my name is ' + this.name);
        }
    }
}
myCustomObj.anotherObj.value.apply(myCustomObj)

//now modify the rahim and karim objects for apply method
var karim = {
    name : 'karim rahman',
    dob : 1996,
    age : function(currentYear, msg){
        console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old')
    }
}
var rahim = {
    name : 'abdur rahim',
    dob : 1990
}
karim.age(2021, 'hello world'); //this is normal ouput
//now 
karim.age.apply(rahim, [2014, 'myself']) //apply method uses as array, first take object and between the array takes arguments.

// bind() method from same example--
var myCustomObj = {
    name : 'muhammad asif',
    age : 26,
    job : 'student',
    anotherObj : {
        name : 'asif hossain',
        value : function(){
            console.log('this is bind output ' + this.name);
        }
    }
}
 myCustomObj.anotherObj.value.bind(myCustomObj);    //bind() directlty don't print ouput, it returns function defination.

 // we can use this function in anywhere by store it to another variable --
 var bindFunc = myCustomObj.anotherObj.value.bind(myCustomObj); 
bindFunc();     //the output is print 
//bind() is very useful between call() and apply(), bcz we can use it anywhere by declaring in fuction


// we can call arguments in different way in bind()
var sibu ={
    name : 'sibu daa',
    dob : 1997,
    age : function(currentYear, msg){
        console.log(msg + ', this is ' + this.name + '. I am ' + (currentYear - this.dob) + ' years old.' );
    }
}
var shuvo = {
    name : 'shuvo roy',
    dob : 2000
}
// sibu.age(2021, 'hi');

// var resultShuvo = sibu.age.bind(shuvo, 2021); // calling first time arguments
// resultShuvo('Hi, everyone') //calling second time arguments.

var result = sibu.age.bind(shuvo); // calling the entire function.
result(2025, 'Hello, Dolly');

//or you can call it, how many times you want! Tha'ts why bind() is especial and it used very much.
result(2030, 'hi asif');
result(2040, 'Muhammad asif')



// var a = 10;
// var b = 20;

// console.log('before swap - the value of a: ' + a + ' and the value of b: ' + b);

// function swap(a, b){
//     console.log('Inside function Before swap - the value of a: ' + a + ' and the value of b: ' + b);
//     var temp = a;
//     a = b 
//     b = temp
//     console.log('Inside function after swap - the value of a: ' + a + ' and the value of b: ' + b);
// }

// swap(a,b);

// console.log('after swap - the value of a: ' + a + ' and the value of b: ' + b);

