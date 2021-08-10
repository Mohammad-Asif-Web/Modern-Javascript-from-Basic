// document.write("<h1>Tutorial No. 30 -- Object oriented programming (OOP) in advance js</h1>");

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


// now we will see this example by object

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

var arr = [0, 1, 3, 8, 9]
var len = arr.length;
console.log(len);    // this array length is

arr.push(100);  //adding item to array
console.log(arr);

console.dir(arr);




