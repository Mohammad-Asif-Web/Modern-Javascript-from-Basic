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
myCustomObj.anotherObj.value.apply(myCustomObj);

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












