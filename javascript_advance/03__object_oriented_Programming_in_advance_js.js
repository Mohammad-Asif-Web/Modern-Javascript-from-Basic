// document.write("<h1>Tutorial No. 03 -- Object oriented programming (OOP) in advance js</h1>");

// Almost everything is object in javascript without primitive data type. There are two types of data type in JS. Primitive data type and non-primitive data type ( or object). Primitive data types are - String, Number, boolean, undefined and null. without this everything is objects in js. Like Functions, Arrays, Loops etc.

//  Primitive data types stores the value by itself. On the other side, object doesn't stores the the data directly. That data is stores somewhere and object just take the reference.
//  When primitive data type passes his data as argument/parameter on any functions, it just send his data's copy not real one. Example below :-

var a = 10
var b = 20

console.log('before Swap - The value of a: ' + a + ' and the value of b: ' + b);

function swap(a, b){
    console.log('inside function before Swap - the value of a: ' + a + ' and the value of b: ' + b);
    var temp = a
    a = b
    b = temp
    console.log('inside function after Swap - the value of a: ' + a + ' and the value of b: ' + b);
}
swap(a,b)
console.log('After Swap - the value of a: ' + a + ' and the value of b: ' + b);


// Now if we do the same work in Object, we can see that --

var obj = {
    c : 10,
    d : 20
}

console.log('before Swap - in object The value of a: ' + obj.c + ' and the value of b: ' + obj.d);

function swap(x){
    console.log('inside function before Swap - the value of a: ' + x.c + ' and the value of b: ' + x.d);
    var temp = x.c
    x.c = x.d
    x.d = temp
    console.log('inside function after Swap - the value of a: ' + x.c + ' and the value of b: ' + x.d);
}
swap(obj)
console.log('After Swap - the value of a: ' + obj.c + ' and the value of b: ' + obj.d);
//  here we can see that, data is changed inside function and that is effected on outside datas. 


var arr = [0, 1, 3, 8, 9]
var len = arr.length;
console.log(len);    // this array length is

arr.push(100);  //adding item to array
console.log(arr);

console.dir(arr);


var book = {
    name : 'Functional Javascript',
    author : 'michael younus',
    printName : function(){
        console.log('The book name is ' + this.name)
    },
    authorName : function(){
        console.log('The Author name is ' + this.author)
    },
    subject : {
        name : 'Computer Science',
        ece1 : 'electronics',
        ece2 : 'computer network',
        ece3: 'Engineering mathmatics',
        msg: function(){
            console.log('Subject name is ' + this.name);
        }

    },
    newArr : [
        cName = 'Germania',
        id = 1540,
        location = 'Uttara',
        holdingNo = {
            area1 : 93/2,
            area2 : 84/6
        },
        arrFunc = function(){
            console.log('name is ' + this.cName);
        }

    ],
    publishedYear : 2020,
    page : 250
}
console.log(book)
book.printName();
book.authorName();
var result = book.page;
console.log('Total page is ' + result);

book.subject.msg();


//  Prototype Chain --  Though javascript is a object oriented programming language, basically it is prototype based. Javascript object models and other major languages object model is not same. we can ge prototype object in every js objects.





