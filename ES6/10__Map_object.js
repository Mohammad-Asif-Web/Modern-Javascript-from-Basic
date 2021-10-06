//  Map is a kind of Object of data structure and holds key-value pairs. This is not same as map(). It has own methods and properties. It can accept function, boolean, integer, character, string and other types of data.

const mapName = new Map();     //Creating new Map

//putting a value to Map by set and accessing the data by get
mapName.set('fullName', "muhammad asif");  
console.log(mapName.get('fullName'));
//  We can chech a specific value in map
console.log(mapName.has('fullName'));
//   if it don't have a specific value it will displayed false
console.log(mapName.has('someName')); 
//  adding a new pairs to map
mapName.set('lastName', 'hussain');
console.log(mapName);
//  now we can delete this pairs by delete
mapName.delete('lastName');
console.log(mapName); 
console.log(mapName.has('lastName'));
//  Also we can clear the entire map
mapName.clear();
//  checking the result after clear
console.log(mapName);


const favor = new Map();
favor.set('name', 'Muhammad');
favor.set('job', "engineer");
favor.set('color', 'green');
favor.set('os', 'windows');
favor.set('mobileOS', 'Keypad-nonTouch');
//  accessing the data
console.log(favor);
//  we can know the element size from 'size' property
console.log(favor.size);

//  Loop in Map()
//  forEach Method -- In this method fist argument we will get value, and second argument we will get key
favor.forEach((value, key) =>{
    console.log(`Key is ${key} and the value is ${value}`); 
});

//  for..of method -- It is same as normal loop
for(let[key, value] of favor.entries()){
    console.log(`key is: ${key} and the value is: ${value}`);
}


//  using the Map Object
const myMap = new Map()

const keyString = 'A string'
const keyObj = {};
const keyFunc = function() {};
//  setting the value
myMap.set(keyString, 'I am a String');
myMap.set(keyObj, "value associated with Object");
myMap.set(keyFunc, "value associated with function");
console.log(myMap.size);
console.log(myMap);
console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));


//  Relation with Array and Map objects
const arr = [['name', 'asif'], ['age', 25]];
//  Using the regular Map Constructor to transform a 2D key-value Array into a map
const arrMap = new Map(arr);
console.log(arrMap);
console.log(arrMap.get('name'));
console.log(arrMap.get('age'));
//  Using Array.from() to transform a map into a 2D key-value Array
const newArr = Array.from(arrMap);
console.log(newArr);

//  Map Merged -- Spread Operator converts a Map into an Array
const first = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);
const second = new Map([
    [1, 'uno'],
    [2, 'dos']
]);
const newMap = new Map([...first, ...second]);
console.log(newMap);















