// document.write("<h1>Tutorial No. 29 -- Immediately Invoked Function Expressions (IIFE) in Javascript</h1>");

// আমাদের সাধারনত কোনো ফাংশন বানানোর পর পরে সেটাকে কল করে ইউজ করতে হয়। কিন্তু যদি আমরা ফাংশন বানানোর সাথে সাথেই সেটাকে কল করতে চাই সেক্ষেত্রে আমরা ইফি Immediately Invoked Function Expressions (IIFE) টেকনিক ইউজ করতে পারি।

//put the entire function between bracket and at last call extra two arguments by bracket.
//IIFE is privately works. It can not be used as locally, only used in function brackets() between.
(function aDemoFunc(){
    console.log("hello world");
})();

(function name(a, b){
    return console.log("your name is " + a);
})('asif.');

var sum = (function(){
    return 10 + 20;
})();
console.log(sum)

//using IIFE as a privat function. we can call a object from IIFE

var controller = (function() {
    var obj = {
        name : "Muhammad asif",
        age : 26,
        address : "Sutrapur Dhaka"
    }
    return obj;
})();

var result = (function() {
    return "your name is " + controller.name +
    ". your stayed in " + controller.address +
    " and you are " + controller.age + " years old."
})();
console.log(result)














