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

//  Array slice() Method ---  Syntax -- slice(start, end) -- start like a index, and end likes a current value starts from 1.
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










