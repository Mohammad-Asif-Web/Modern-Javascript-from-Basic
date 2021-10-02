const nodeList = document.querySelectorAll(".box-content");
console.log(nodeList);

// nodeList is a object type
const type = typeof nodeList;
console.log(type);

// converting from nodelist to array in traditional way-- this one is Array, now we can use it as array property.
const nodeToArr = Array.prototype.slice.call(nodeList);
console.log(nodeToArr); 

for(let i = 0; i<nodeToArr.length; i++){
    if(nodeToArr[i] === 3) break;
    console.log('number printed: ' + nodeToArr[i]);
}

//  But very easily we can complete this solution by ES6. 
const nodeToArr6 = Array.from(nodeList);
console.dir(nodeToArr6);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//now we want to do a operation till 5. we want to break it. 
//  In es5 loop
for(var i = 0; i>numbers.length; i++){
    if(numbers[i] === 5) break;
    console.log('Number Printed: ' + numbers[i]);
};

//  Array find() Method

const array = [1, 3, 10, 8, 25];
array.find(function(value, index, arr) {
    console.log( `value ${value} index is ${index} with ${arr}`);
});

const result = array.find((value, index) => {
    return value > 4;
})
console.log(result);

//  Array findIndex() Method --- finds the index number of an array
const arrayFindIndex = array.findIndex((element) => element > 3);
console.log(arrayFindIndex);

const fruits = ["apple", "banana", "orange", "grape", "mango"]
const findFruits = fruits.findIndex((fruit) => fruit === "grape");
console.log(findFruits);
console.log(fruits[findFruits]);


//  Array filter() Method
//find element by length

const words = ["spray", "limit", "elite", "exeburant", "destruction", "present"];
const wordResult = words.filter((word) => word.length > 5);
console.log(wordResult);
//filtering out  all small values
const numFilter = [0, 5, 2, 12, 8, 4, 24,  30];
const numResult = numFilter.filter((element) => element > 8);
console.log(numResult);


//  Array slice() Method ---  
//  Syntax -- slice(start, end) -- start like a index, and end likes a current value starts from 1.

const animals = ["cat", "ant", "camel", "lion", "tiger", "frog"];
console.log(animals.slice(2));
console.log(animals.slice(2,4));
console.log(animals.slice(1, 6));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));


//  Array splice() Method ---   this method changes the real value in array
//  Syntax // splice(start)  // splice(start, deleteCount) // splice(start, deleteCount, item1) // splice(start, deleteCount, item1, item2, itemN)

//  Remove all elements, starting from index 2
let fish = ['angel', 'clown', 'mandarin', 'sturgeon', 'gold fish']
console.log(fish.splice(2));
console.log(fish);
//Remove 0(zero) elements before index 2, and insert "drum"
fish.splice(2, 0, "drum");
console.log(fish);
//Remove 0(zero) elements before index 2, and insert "guitar" and "piano"
fish.splice(2, 0, "guitar", "piono");
console.log(fish);
//Remove 1 element at index 3
fish.splice(3, 1);
console.log(fish);
//Remove 1 element at index 2 and insert "trumpet"
fish.splice(2, 1, "trumpet");
console.log(fish);
//Remove 2 elements from index 0, and insert "parrot", "salmon" and "crow"
fish.splice(0, 2, "parrot", "salmon", "crow");
console.log(fish);
//Remove 2 elements, starting from index 2
fish.splice(2, 2);
console.log(fish);
//Remove 1 elements from index -2
fish.splice(-2, 1);
console.log(fish);


//  Array ConCat() Method --
//  Syntax -- concat(), concat(value0), concat(value0, value1), concat(value0, value1, ... , valueN)
const con = ['a', 'b', 'd'];
const cat = ['e', 'f', 'g'];
console.log(con.concat(cat));
//concat numbers and strings
const conNum = [2, 4, 6, 8, 10];
const conStr = ['a', 'e', 'i', 'o', 'u'];
console.log(conStr.concat(conNum));
//ConCat nested Array
const nest1 = [[1]];
const nest2 = [2, [3], 4];
let nest = nest1.concat(nest2);
console.log(nest);
nest.push([5])
console.log(nest);


//  Push() Method -- The push() methods add one or more elements to the ends of an array
//  Syntax -- push(element), push(element0, element1)
const pusAni = ['horse', 'goats', 'sheep'];
pusAni.push('cat');
console.log(pusAni);
pusAni.push('chickens', 'dogs', 'crow');
console.log(pusAni);
// using an object in an array
let obj = {
    length: 0,

    addElem: function add(element) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, element)
    }
}

// Let's add some empty objects just to illustrate.
obj.addElem({})
obj.addElem({})
console.log(obj.length)


//  Map() method -- its behave like a for loop --- It doesn't affect on main array value
// Syntax1 -- map((element) => { ... }), 
// Syntax2 -- map((element, index) => { ... }), 
// Syntex3 -- map((element, index, array) => { ... })
const mapArray = [0, 1, 3, 5, 7, 9, 2, 4];
const mapResult = mapArray.map((element) => element * 2);
console.log(mapResult);
//get a square root of an aray
const square = [1, 4, 9, 16, 25, 36];
const squareResult = square.map((num) =>{
    return Math.sqrt(num);
})
console.log(squareResult);
// get an array of ASCII encoding byte from a STRING
let Map = Array.prototype.map
let strResult = Map.call("Muhammad asif", (x) => {
    return x.charCodeAt(0);
})
console.log(strResult);
//  Using querySelectorAll to map()
let elems = document.querySelectorAll("box-content")
let values = Array.from(elems, (obj) =>{
    return obj.value;
})
console.dir(values);
//  Convert string lower to uppercase -- it doesn't changes the value of main array
const names = ['asif', 'tamim', 'sakib', 'abeer'];
const nameResult = names.map((name) => {
    return name.toUpperCase();
})
console.log(nameResult);
console.log(names);
// finding value of objects in array with map method
const objNew = [
    {
        name : 'muhammad',
        age : 25
    },
    {
        name : 'lemon',
        age : 24
    },
    {
        name : 'naeem',
        age : '28'
    },
    {
        name : 'khalid',
        age : 65
    }
]
const objResult = objNew.map((element) =>{
    return `name : ${element.name}, age : ${element.age}`
})
console.log(objResult);
//Using map to reformat objects in an array-- using from the previous object value
const objInArr = objNew.map((arr) =>{
    let obj2 = {};
    obj2[arr.name] = arr.age;
    return obj2;
})
console.log(objInArr);


//  Reduce() Method
//  Syntax1 -- reduce((previousValue, currentValue) => { ... } )
//  Syntax2 -- reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)

//  trditional function method
const array1 = [0, 1, 2, 3, 4];
const initialValue = 10;
const reducer = array1.reduce(function(one, two){
    return one + two;
}, initialValue)
console.log(reducer);
//  ES6 -- Arrow Function Method
const reducer2 = (prev, curr) => prev + curr;
console.log(array1.reduce(reducer2, initialValue));
//  Find Minimum and Maximum numbers
const minMax = [20, 13, 4, 83, 33, 8, 48];
const max = (x, y) => Math.max(x, y);
console.log(minMax.reduce(max));

const min = minMax.reduce(function(prev, curr){
    return Math.min(prev, curr);
});
console.log(min);
//  Sum of all values of an Array
const sum = [0, 1, 2, 3];
const sumResult = sum.reduce((num1, num2) => num1 + num2);
console.log(sumResult);



































