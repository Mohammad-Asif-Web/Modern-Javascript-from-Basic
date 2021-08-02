// document.write("<h1>Tutorial No. 30 -- 'this' keyword in Advanced Javascript</h1>");

// 'this' keyword value can be determine by following four rules:
// No.1 -- global rules

console.log(this);

// this is worked as `non strict mode`
var printItem = function(){
    console.log(this);
}
var item = printItem();

// but this is won't work in `strict mode`
var printItem2 = function(){
    'use strict';
    console.log(this);
}
printItem2();

// this will return true. bcZ browser global object is window and it is same as 'this' keyword.
// console.log(this === window); true but undefined.

function named(){
    this.Name = 'muhammad asif'
}
named();
console.log(Name);


// No.2 -- object rules

var myCustomObj = {
    name:'muhammad asif',
    age: 25,
    job: 'Software Engineer',
    msg: function(){
        console.log(`My name is ${this.name}
        my age is ${this.age} and Myself a ${this.job}`)
        //this is indicating to object, that's why its object rules and its not global rules
        console.log(this === myCustomObj)
        // 'this' and myCustomObj is same thing and is true.
    }
}
myCustomObj.msg();
// var result = myCustomObj.msg();
// console.log(result);

// এখন অবজেক্ট এর ভিতরে যদি আরেকটা অবজেক্ট থাকে আর সেখানে thisইউজ করা হয় তাহলে কি হবে?
var myAnotherObj = {
    name : 'asif hussain',
    id : 1540,
    address : 'sutrapur',
    otherObj : {
        name : 'Md. asif',
        msg : function(){
            console.log('my name is ' + this.name);
        }
    }
}
myAnotherObj.otherObj.msg();

//another example
var exampleObj = {
    name : 'asif',
    age : 26,
    job : 'student',
    anotherObj : {
        name : 'asif khan',
        value : function(){
            console.log(this);
        }
    }
} 
exampleObj.anotherObj.value();

// No.3 -- spost rules
//this rules depends on call(), apply(), bind() mehods. Its sets the value of `this` keyword. this methods are decribed in next lesson(31). call, bind, applyএই মেথডগুলো শুধুমাত্র ফাংশনের সাথে ইউজ করা যায় যেমনটা আমরা উদাহরণটায় করেছি। অন্য কোনো ডাটা টাইপ যেমন অবজেক্ট, স্ট্রিং, নাম্বার বা বুলিয়ানের সাথে ইউজ করা যাবে না।
// মানে এখানে thisanotherObjকে ইন্ডিকেট করছে। কিন্তু আমরা যদি কাস্টমভাবে বলে দিতে চাই anotherObjনা বরং আমরা চাই এখানে thismyCustomObjকে ইন্ডিকেট করুক তাহলে এভাবে call মেথড ইউজ করে বলে দিতে পারিঃ
exampleObj.anotherObj.value.call(exampleObj)    //using call()method

// 1 -- গ্লোবালি যেকোনো জায়গায়, কাস্টমভাবে তৈরীকৃত অবজেক্ট এর ভিতরে ছাড়া thisসবসময় গ্লোবাল অবজেক্টকেই ইন্ডিকেট করবে।
// 2 -- এটা নরমাল রেগুলার ফাংশন কলেও গ্লোবাল অবজেক্ট কে পয়েন্ট করে
// 3 -- এটার ভ্যালু অ্যাসাইন হয় না যতক্ষন না পর্যন্ত আপনি ডিক্ল্যেয়ারকৃত ফাংশনটাকে কল না করছেন বা এটা যেখানে ইউজ করা হয়েছে সেটাকে কল না করছেন।

//No.4 -- new' keyword rules



var newObj = {
    name : 'emrul hasan',
    college : 'IST',
    id : 1520,
    address : 'Mirpur, Dhaka',
    subject : {
        ece1 : 'applied physics',
        ece2 : 'computer network',
        ece3 : 'control system',
        ece4 : 'ansi C',
        msg : function(){
            console.log(this);
            // if console.log is assign by (this), then the ouput will show from below function call.
            //if console.log is assign by locally object call like (this.name/this.subject/this.ece) then the output will show from this function.
        }
     }
    
}
// newObj.subject.msg();
newObj.subject.msg.call(newObj.college);
